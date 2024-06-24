import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Create a new review
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
            throw new ConvexError('User not authenticated');
        }

        // Ensure the user exists
        const user = await ctx.db.get(args.userId);
        if (!user) {
            throw new ConvexError('User not found');
        }

        // Ensure the podcast exists
        const podcast = await ctx.db.get(args.podcastId);
        if (!podcast) {
            throw new ConvexError('Podcast not found');
        }

        return await ctx.db.insert('reviews', {
            podcastId: args.podcastId,
            userId: args.userId,
            reviewText: args.reviewText,
            rating: args.rating,
            reviewDate: args.reviewDate,
        });
    },
});

// Get all reviews for a specific podcast
export const getReviewsByPodcastId = query({
    args: {
        podcastId: v.id('podcasts'),
    },
    handler: async (ctx, args) => {
        return await ctx.db
            .query('reviews')
            .filter((q) => q.eq(q.field('podcastId'), args.podcastId))
            .collect();
    },
});

// Get a review by ID
export const getReviewById = query({
    args: {
        reviewId: v.id('reviews'),
    },
    handler: async (ctx, args) => {
        const review = await ctx.db.get(args.reviewId);

        if (!review) {
            throw new ConvexError('Review not found');
        }

        return review;
    },
});

// Update a review
export const updateReview = mutation({
    args: {
        reviewId: v.id('reviews'),
        reviewText: v.optional(v.string()),
        rating: v.optional(v.number()),
        reviewDate: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const review = await ctx.db.get(args.reviewId);

        if (!review) {
            throw new ConvexError('Review not found');
        }

        return await ctx.db.patch(args.reviewId, {
            reviewText: args.reviewText ?? review.reviewText,
            rating: args.rating ?? review.rating,
            reviewDate: args.reviewDate ?? review.reviewDate,
        });
    },
});

// Delete a review
export const deleteReview = mutation({
    args: {
        reviewId: v.id('reviews'),
    },
    handler: async (ctx, args) => {
        const review = await ctx.db.get(args.reviewId);

        if (!review) {
            throw new ConvexError('Review not found');
        }

        return await ctx.db.delete(args.reviewId);
    },
});
