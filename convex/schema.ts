import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
    podcasts: defineTable({
        user: v.id('users'),
        podcastTitle: v.string(),
        podcastDescription: v.string(),
        audioUrl: v.optional(v.string()),
        audioStorageId: v.optional(v.id('_storage')),
        imageUrl: v.optional(v.string()),
        imageStorageId: v.optional(v.id('_storage')),
        author: v.string(),
        authorId: v.string(),
        authorImageUrl: v.string(),
        voicePrompt: v.string(),
        imagePrompt: v.string(),
        voiceType: v.string(),
        audioDuration: v.number(),
        views: v.number(),
        categoryId: v.id('categories'), // Reference to categories table
    })
        .searchIndex('search_author', { searchField: 'author' })
        .searchIndex('search_title', { searchField: 'podcastTitle' })
        .searchIndex('search_body', { searchField: 'podcastDescription' }),

    users: defineTable({
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    }),

    categories: defineTable({
        categoryName: v.string(),
        categoryDescription: v.optional(v.string()),
    }),

    reviews: defineTable({
        podcastId: v.id('podcasts'), // Reference to podcasts table
        userId: v.id('users'), // Reference to users table
        reviewText: v.string(),
        rating: v.number(),
        reviewDate: v.string(),
    }),
});
