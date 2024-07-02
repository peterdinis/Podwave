"use client"

import { FC} from 'react';
import Header from '../shared/Header';
import PodcastCard from './PodcastCard';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const PodcastsLists: FC = () => {
    const data = useQuery(api.podcasts.getAllPodcasts);

    return (
        <>
            <Header text='All Podcasts' />
            <div className='mx-auto mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <PodcastCard podcast={item} />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default PodcastsLists;