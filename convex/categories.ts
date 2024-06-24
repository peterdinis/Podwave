import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

// Create a new category
export const createCategory = mutation({
    args: {
        categoryName: v.string(),
        categoryDescription: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new ConvexError('User not authenticated');
        }

        return await ctx.db.insert('categories', {
            categoryName: args.categoryName,
            categoryDescription: args.categoryDescription,
        });
    },
});

// Get all categories
export const getAllCategories = query({
    handler: async (ctx) => {
        return await ctx.db.query('categories').collect();
    },
});

// Get a category by ID
export const getCategoryById = query({
    args: {
        categoryId: v.id('categories'),
    },
    handler: async (ctx, args) => {
        const category = await ctx.db.get(args.categoryId);

        if (!category) {
            throw new ConvexError('Category not found');
        }

        return category;
    },
});

// Update a category
export const updateCategory = mutation({
    args: {
        categoryId: v.id('categories'),
        categoryName: v.optional(v.string()),
        categoryDescription: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const category = await ctx.db.get(args.categoryId);

        if (!category) {
            throw new ConvexError('Category not found');
        }

        return await ctx.db.patch(args.categoryId, {
            categoryName: args.categoryName ?? category.categoryName,
            categoryDescription:
                args.categoryDescription ?? category.categoryDescription,
        });
    },
});

// Delete a category
export const deleteCategory = mutation({
    args: {
        categoryId: v.id('categories'),
    },
    handler: async (ctx, args) => {
        const category = await ctx.db.get(args.categoryId);

        if (!category) {
            throw new ConvexError('Category not found');
        }

        // Optionally, you might want to check if there are any podcasts using this category
        const associatedPodcasts = await ctx.db
            .query('podcasts')
            .filter((q) => q.eq(q.field('categoryId'), args.categoryId))
            .collect();

        if (associatedPodcasts.length > 0) {
            throw new ConvexError(
                'Cannot delete category with associated podcasts',
            );
        }

        return await ctx.db.delete(args.categoryId);
    },
});
