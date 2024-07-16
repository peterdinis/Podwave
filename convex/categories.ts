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

        const podcasts = await ctx.db
            .query('podcasts')
            .filter(q => q.eq(q.field('categoryId'), args.categoryId))
            .collect();

        return { category, podcasts };
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

export const getCategoryBySearch = query({
    args: {
        search: v.string(),
    },
    handler: async (ctx, args) => {
        if (args.search === '') {
            return await ctx.db.query('categories').order('desc').collect();
        }

        const nameSearch = await ctx.db
            .query('categories')
            .withSearchIndex('search_category_name', (q) =>
                q.search('categoryName', args.search),
            )
            .take(10);

        if (nameSearch.length > 0) {
            return nameSearch;
        }

        return await ctx.db
            .query('categories')
            .withSearchIndex('search_category_description', (q) =>
                q.search('categoryDescription', args.search),
            )
            .take(10);
    },
});