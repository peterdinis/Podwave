'use client';

import { FC, useState, useEffect } from 'react';
import Header from '../shared/Header';
import PodcastCard from './PodcastCard';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import PodcastPagination from './PodcastPagination';

const PodcastsLists: FC = () => {
    const [cursor, setCursor] = useState<string | undefined>(undefined);
    const limit = 10; // Define how many items per page

    const data = useQuery(api.podcasts.getAllPodcasts, { cursor, limit });

    const handleNextPage = () => {
        if (data?.nextCursor) {
            setCursor(data.nextCursor);
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header text='All Podcasts' />
            <div className='mx-auto mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data?.podcasts &&
                    data.podcasts.map((item, index) => (
                        <div key={index}>
                            <PodcastCard podcast={item} />
                        </div>
                    ))}
            </div>

            <div className='mt-4 p-3'>
                <PodcastPagination onNextPage={handleNextPage} hasNextPage={!!data?.nextCursor} />
            </div>
        </>
    );
};

export default PodcastsLists;