import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const createPodcast = mutation({
    args: {
        audioStorageId: v.id('_storage'),
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.string(),
        imageUrl: v.string(),
        imageStorageId: v.id('_storage'),
        voicePrompt: v.string(),
        imagePrompt: v.string(),
        voiceType: v.string(),
        views: v.number(),
        audioDuration: v.number(),
        categoryId: v.id('categories'),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError('User not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), identity.email))
            .collect();

        if (user.length === 0) {
            throw new ConvexError('User not found');
        }

        return await ctx.db.insert('podcasts', {
            audioStorageId: args.audioStorageId,
            user: user[0]._id,
            podcastTitle: args.podcastTitle,
            podcastDescription: args.podcastDescription,
            audioUrl: args.audioUrl,
            imageUrl: args.imageUrl,
            imageStorageId: args.imageStorageId,
            author: user[0].name,
            authorId: user[0].clerkId,
            voicePrompt: args.voicePrompt,
            imagePrompt: args.imagePrompt,
            voiceType: args.voiceType,
            views: args.views,
            authorImageUrl: user[0].imageUrl,
            audioDuration: args.audioDuration,
            categoryId: args.categoryId,
        });
    },
});

export const getUrl = mutation({
    args: {
        storageId: v.id('_storage'),
    },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.storageId);
    },
});

export const getPodcastByVoiceType = query({
    args: {
        podcastId: v.id('podcasts'),
    },
    handler: async (ctx, args) => {
        const podcast = await ctx.db.get(args.podcastId);

        return await ctx.db
            .query('podcasts')
            .filter((q) =>
                q.and(
                    q.eq(q.field('voiceType'), podcast?.voiceType),
                    q.neq(q.field('_id'), args.podcastId),
                ),
            )
            .collect();
    },
});

export const getAllPodcasts = query({
    handler: async(ctx, args) =>{
        const allPodcasts = await ctx.db
            .query('podcasts')
            .order('desc')
            .collect();

        return {
            podcast: allPodcasts
        }
    }
})

export const getAllPaginatedPodcasts = query({
    args: {
        cursor: v.optional(v.string()),
        limit: v.number(),
    },
    handler: async (ctx, args) => {
        const allPodcasts = await ctx.db
            .query('podcasts')
            .order('desc')
            .collect();

        const startIndex = args.cursor
            ? allPodcasts.findIndex(
                  (podcast) => podcast._id.toString() === args.cursor,
              ) + 1
            : 0;

        const paginatedPodcasts = allPodcasts.slice(
            startIndex,
            startIndex + args.limit,
        );
        const lastItem = paginatedPodcasts[paginatedPodcasts.length - 1];
        const nextCursor = lastItem ? lastItem._id.toString() : null;

        return {
            podcasts: paginatedPodcasts,
            nextCursor,
        };
    },
});

export const getPodcastById = query({
    args: {
        podcastId: v.id('podcasts'),
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.podcastId);
    },
});

export const getTrendingPodcasts = query({
    handler: async (ctx) => {
        const podcast = await ctx.db.query('podcasts').collect();

        return podcast.sort((a, b) => b.views - a.views).slice(0, 8);
    },
});

export const getPodcastByAuthorId = query({
    args: {
        authorId: v.string(),
    },
    handler: async (ctx, args) => {
        const podcasts = await ctx.db
            .query('podcasts')
            .filter((q) => q.eq(q.field('authorId'), args.authorId))
            .collect();

        const totalListeners = podcasts.reduce(
            (sum, podcast) => sum + podcast.views,
            0,
        );

        return { podcasts, listeners: totalListeners };
    },
});

export const getPodcastBySearch = query({
    args: {
        search: v.string(),
    },
    handler: async (ctx, args) => {
        if (args.search === '') {
            return await ctx.db.query('podcasts').order('desc').collect();
        }

        const authorSearch = await ctx.db
            .query('podcasts')
            .withSearchIndex('search_author', (q) =>
                q.search('author', args.search),
            )
            .take(10);

        if (authorSearch.length > 0) {
            return authorSearch;
        }

        const titleSearch = await ctx.db
            .query('podcasts')
            .withSearchIndex('search_title', (q) =>
                q.search('podcastTitle', args.search),
            )
            .take(10);

        if (titleSearch.length > 0) {
            return titleSearch;
        }

        return await ctx.db
            .query('podcasts')
            .withSearchIndex('search_body', (q) =>
                q.search('podcastDescription' || 'podcastTitle', args.search),
            )
            .take(10);
    },
});

export const updatePodcastViews = mutation({
    args: {
        podcastId: v.id('podcasts'),
    },
    handler: async (ctx, args) => {
        const podcast = await ctx.db.get(args.podcastId);

        if (!podcast) {
            throw new ConvexError('Podcast not found');
        }

        return await ctx.db.patch(args.podcastId, {
            views: podcast.views + 1,
        });
    },
});

export const deletePodcast = mutation({
    args: {
        podcastId: v.id('podcasts'),
        imageStorageId: v.id('_storage'),
        audioStorageId: v.id('_storage'),
    },
    handler: async (ctx, args) => {
        const podcast = await ctx.db.get(args.podcastId);

        if (!podcast) {
            throw new ConvexError('Podcast not found');
        }

        await ctx.storage.delete(args.imageStorageId);
        await ctx.storage.delete(args.audioStorageId);
        return await ctx.db.delete(args.podcastId);
    },
});


export const addToFavorites = mutation({
    args: {
        podcastId: v.id('podcasts'),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError('User not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), identity.email))
            .collect();

        if (user.length === 0) {
            throw new ConvexError('User not found');
        }

        const userId = user[0]._id;

        const favoriteExists = await ctx.db
            .query('favorites')
            .filter((q) => 
                q.and(
                    q.eq(q.field('userId'), userId),
                    q.eq(q.field('podcastId'), args.podcastId)
                )
            )
            .collect();

        if (favoriteExists.length > 0) {
            throw new ConvexError('Podcast is already in favorites');
        }

        return await ctx.db.insert('favorites', {
            userId: userId,
            podcastId: args.podcastId,
        });
    },
});

export const getFavoritePodcasts = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError('User not authenticated');
        }

        const user = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), identity.email))
            .first();

        if (!user) {
            throw new ConvexError('User not found');
        }

        const favorites = await ctx.db
            .query('favorites')
            .filter((q) => q.eq(q.field('userId'), user._id))
            .collect();

        const podcastIds = favorites.map(favorite => favorite.podcastId);
        
        // Ensure podcastIds is an array of strings
        if (podcastIds.length === 0) {
            return []; // Return empty array if no favorites found
        }

        // Return an array of podcasts
        return await ctx.db.get(podcastIds as any);
    },
});