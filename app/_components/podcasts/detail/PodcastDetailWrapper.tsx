'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import PodcastReview from '../reviews/PodcastReview';
import Header from '../../shared/Header';
import AddToFavorite from '../favorite/AddToFavorite';
import ReviewsWrapper from '../reviews/ReviewsWrapper';

const PodcastDetailWrapper: FC = () => {
    const { id } = useParams();
    const { user } = useUser();
    const data = useQuery(api.podcasts.getPodcastById, {
        podcastId: id[0] as unknown as Id<'podcasts'>,
    });

    const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
        podcastId: id[0] as unknown as Id<'podcasts'>,
    });

    const isOwner = user?.id === data?.authorId;

    if (!similarPodcasts || !data)
        return <Loader2 className='h-8 w-8 animate-spin' />;
    return (
        <DefaultLayout>
            <Header text='Podcast Info' />
            <PodcastReview podcastId={id[0] as unknown as Id<'podcasts'>} />
            <AddToFavorite podcastId={id[0] as unknown as Id<'podcasts'>} />

            <div className='mt-6'>
            <ReviewsWrapper />
            </div>
        </DefaultLayout>
    );
};

export default PodcastDetailWrapper;
