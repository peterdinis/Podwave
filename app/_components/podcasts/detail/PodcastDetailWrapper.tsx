'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { Loader2, Mic} from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import PodcastReview from '../reviews/PodcastReview';
import Header from '../../shared/Header';
import AddToFavorite from '../favorite/AddToFavorite';
import { Separator } from '@/components/ui/separator';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import ReviewsWrapper from '../reviews/ReviewsWrapper';

const PodcastDetailWrapper: FC = () => {
    const { id } = useParams();
    const { user } = useUser();
    const podcastId = id[0] as unknown as Id<'podcasts'>;

    const data = useQuery(api.podcasts.getPodcastById, { podcastId });
    const similarPodcasts = useQuery(api.podcasts.getPodcastByVoiceType, {
        podcastId,
    });

    const isOwner = user?.id === data?.authorId;

    if (!data || !similarPodcasts) {
        return <Loader2 className='h-8 w-8 animate-spin' />;
    }

    return (
        <DefaultLayout>
            <Header text='The Coding Podcast: Unlocking the Secrets of Software Development' />
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
                                {data.podcastDescription}
                            </p>
                        </div>
                        <Separator />
                    </div>
                    <ReviewsWrapper avatar={data.authorImageUrl} />
                </div>
                <div className='mt-8 space-y-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Host</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='flex items-center gap-4'>
                                <Avatar>
                                    <AvatarImage src={data?.authorImageUrl} />
                                </Avatar>
                                <div>
                                    <h3 className='font-medium'>{data.author}</h3>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    {/* TODO: Displaying episodes for podcasts */}
                </div>
            </section>
        </DefaultLayout>
    );
};

export default PodcastDetailWrapper;
