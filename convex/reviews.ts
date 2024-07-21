import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getAllReviews = query({
    handler: async (ctx) => {
        const allReviews = await ctx.db.query("reviews").order('desc').collect();
        return {
            reviews: allReviews
        }
    }
})

export const createReview = mutation({
    args: {
        podcastId: v.id('podcasts'),
        userId: v.id('users'),
        reviewText: v.string(),
        rating: v.number(),
        reviewDate: v.string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError('Používateľ nie je prihlásený');
        }

        const user = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('email'), identity.email))
            .collect();

        if (user.length === 0) {
            throw new ConvexError('User not found');
        }

        const podcast = await ctx.db.get(args.podcastId);
        if (!podcast) {
            throw new ConvexError('Podcast neexistuje');
        }

        return await ctx.db.insert('reviews', {
            podcastId: args.podcastId,
            userId: user[0]._id,
            reviewText: args.reviewText,
            rating: args.rating,
            reviewDate: args.reviewDate,
        });
    },
});
