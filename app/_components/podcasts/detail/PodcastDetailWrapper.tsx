'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FC } from 'react';
import EmptyState from '../../shared/EmptyState';
import PodcastDetailCard from './PodcastDetailCard';
import PodcastDetailPlayer from './PodacastDetailPlayer';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import PodcastReview from '../reviews/PodcastReview';
import Header from '../../shared/Header';
import AddToFavorite from '../favorite/AddToFavorite';

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
            <AddToFavorite />
            {/* TODO: Update later */}
            {/* <section className='flex w-full flex-col'>
                <header className='mt-9 flex items-center justify-between'>
                    <h1 className='text-20 text-white-1 font-bold'>
                        Currenty Playing
                    </h1>
                    <figure className='flex gap-3'>
                        <Image
                            src='/icons/headphone.svg'
                            width={24}
                            height={24}
                            alt='headphone'
                        />
                        <h2 className='text-16 text-white-1 font-bold'>
                            {data?.views}
                        </h2>
                    </figure>
                </header>

                <PodcastDetailPlayer
                    isOwner={isOwner}
                    podcastId={data._id}
                    {...data}
                />

                <p className='text-white-2 text-16 pb-8 pt-[45px] font-medium max-md:text-center'>
                    {data?.podcastDescription}
                </p>

                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-18 text-white-1 font-bold'>
                            Transcription
                        </h1>
                        <p className='text-16 text-white-2 font-medium'>
                            {data?.voicePrompt}
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-18 text-white-1 font-bold'>
                            Thumbnail Prompt
                        </h1>
                        <p className='text-16 text-white-2 font-medium'>
                            {data?.imagePrompt}
                        </p>
                    </div>
                </div>
                <section className='mt-8 flex flex-col gap-5'>
                    <h1 className='text-20 text-white-1 font-bold'>
                        Similar Podcasts
                    </h1>

                    {similarPodcasts && similarPodcasts.length > 0 ? (
                        <div className='podcast_grid'>
                            {similarPodcasts?.map(
                                ({
                                    _id,
                                    podcastTitle,
                                    podcastDescription,
                                    imageUrl,
                                }) => (
                                    <PodcastDetailCard
                                        key={_id}
                                        imageUrl={imageUrl as string}
                                        podcastTitle={podcastTitle}
                                        podcastDescription={podcastDescription}
                                        _id={_id}
                                    />
                                ),
                            )}
                        </div>
                    ) : (
                        <>
                            <EmptyState
                                title='No similar podcasts found'
                                buttonLink='/discover'
                                buttonText='Discover more podcasts'
                            />
                        </>
                    )}
                </section>
            </section> */}
        </DefaultLayout>
    );
};

export default PodcastDetailWrapper;
