'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { Loader2, Mic } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import PodcastReview from '../reviews/PodcastReview';
import Header from '../../shared/Header';
import AddToFavorite from '../favorite/AddToFavorite';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import ReviewsWrapper from '../reviews/ReviewsWrapper';

const PodcastDetailWrapper: FC = () => {
    const { id } = useParams();
    const podcastId = id[0] as unknown as Id<'podcasts'>;

    const data = useQuery(api.podcasts.getPodcastById, { podcastId });
    const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
        podcastId,
    });

    if (!data || !similarPodcasts) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    return (
        <DefaultLayout>
            <Header text={data.podcastTitle} />
            <PodcastReview podcastId={podcastId} />
            <AddToFavorite podcastId={podcastId} />

            <section className='container mx-auto px-4 py-8 md:px-6 md:py-12 lg:py-16'>
                <div className='grid gap-8 lg:grid-cols-[2fr_1fr]'>
                    <div>
                        <div className='space-y-4'>
                            <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center'>
                                <div className='flex items-center gap-2'>
                                    <Mic className='h-5 w-5 fill-primary' />
                                    <span className='text-muted-foreground'>
                                        Hosted by
                                    </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Avatar>
                                        <AvatarImage
                                            src={data?.authorImageUrl}
                                        />
                                    </Avatar>
                                    <span className='font-medium'>
                                        {data?.author}
                                    </span>
                                </div>
                            </div>
                            <p className='prose-p: prose text-muted-foreground dark:text-white'>
                                Description: {data.podcastDescription}
                            </p>
                            <p className='text-sm text-muted-foreground'>
                                <strong>Views:</strong> {data.views}
                            </p>
                        </div>
                        <Separator />
                    </div>
                    <ReviewsWrapper />
                </div>
                <div className='mt-8 space-y-6'>
                    <h2 className='prose-h2: prose text-xl font-bold dark:text-blue-50'>
                        Play now
                    </h2>
                    <video controls src={data.audioUrl} />
                </div>
            </section>
        </DefaultLayout>
    );
};

export default PodcastDetailWrapper;
