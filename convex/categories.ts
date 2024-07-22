import { ConvexError, v } from 'convex/values';
import { mutation, query } from './_generated/server';

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

export const getAllCategories = query({
    handler: async (ctx) => {
        return await ctx.db.query('categories').collect();
    },
});

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

export const deleteCategory = mutation({
    args: {
        categoryId: v.id('categories'),
    },
    handler: async (ctx, args) => {
        const category = await ctx.db.get(args.categoryId);

        if (!category) {
            throw new ConvexError('Category not found');
        }
        
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