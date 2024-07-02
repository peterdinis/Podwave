'use client';

import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import Header from '../../shared/Header';
import PodcastReview from '../reviews/PodcastReview';
import { useParams } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

const PodcastDetailInfo: FC = () => {
    const { id } = useParams();

    const data = useQuery(api.podcasts.getPodcastById, {
        podcastId: id[0] as unknown as Id<'podcasts'>,
    });

    console.log("D", data);

    return (
        <DefaultLayout>
            <Header text='Podcast Detail' />
            <PodcastReview />
            <hr />
        </DefaultLayout>
    );
};

export default PodcastDetailInfo;
