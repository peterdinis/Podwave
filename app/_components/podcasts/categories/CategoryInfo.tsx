'use client';

import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import Header from '../../shared/Header';
import CategoryPodcastTable from './CategoryPodcastTable';
import { Podcast } from '@/app/_types/podcastTypes';

const CategoryInfo: FC = () => {
    const { id } = useParams();

    const data = useQuery(api.categories.getCategoryById, {
        categoryId: id[0] as unknown as Id<'categories'>,
    });

    console.log("D", data);

    return (
        <DefaultLayout>
            <Header text={data?.category?.categoryName as unknown as string} />
            <hr className='mt-4' />
            <div className='mt-5 text-xl font-bold'>
                Podcasts from this category
            </div>
            <div className='mt-3'>
                <CategoryPodcastTable podcastData={data?.podcasts as unknown as Podcast} />
            </div>
        </DefaultLayout>
    );
};

export default CategoryInfo;
