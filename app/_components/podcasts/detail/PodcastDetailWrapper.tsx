'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { Airplay, Loader2, Mic, Podcast, Star } from 'lucide-react';
import { useParams } from 'next/navigation';
import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import PodcastReview from '../reviews/PodcastReview';
import Header from '../../shared/Header';
import AddToFavorite from '../favorite/AddToFavorite';
import { Separator } from '@/components/ui/separator';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
                    {/* Make this component */}
                    <Accordion type='single' collapsible>
                        <AccordionItem value='reviews'>
                            <AccordionTrigger className='text-xl font-semibold'>
                                Reviews
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='grid gap-6'>
                                    <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                        <div className='flex items-center gap-4'>
                                            <Avatar>
                                                <AvatarImage
                                                    src={data?.authorImageUrl}
                                                />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>
                                                    Jane Smith
                                                </h4>
                                                <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-muted-foreground'>
                                            I've been listening to this podcast
                                            for a while now and I absolutely
                                            love it. The host is knowledgeable
                                            and engaging, and the topics covered
                                            are always relevant and insightful.
                                            Highly recommended for anyone
                                            interested in software development.
                                        </p>
                                    </div>
                                    <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                        <div className='flex items-center gap-4'>
                                            <img
                                                src='/placeholder.svg'
                                                alt='Reviewer Avatar'
                                                width={40}
                                                height={40}
                                                className='rounded-full'
                                            />
                                            <div>
                                                <h4 className='font-medium'>
                                                    Michael Johnson
                                                </h4>
                                                <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-muted-foreground'>
                                            This podcast has been a game-changer
                                            for me. The information and insights
                                            shared have really helped me level
                                            up my coding skills. I look forward
                                            to each new episode and highly
                                            recommend it to anyone in the
                                            software development field.
                                        </p>
                                    </div>
                                    <div className='grid gap-4 rounded-lg bg-muted p-4'>
                                        <div className='flex items-center gap-4'>
                                            <img
                                                src='/placeholder.svg'
                                                alt='Reviewer Avatar'
                                                width={40}
                                                height={40}
                                                className='rounded-full'
                                            />
                                            <div>
                                                <h4 className='font-medium'>
                                                    Sarah Lee
                                                </h4>
                                                <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-primary' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                    <Star className='h-4 w-4 fill-muted stroke-muted-foreground' />
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-muted-foreground'>
                                            I've been a bit disappointed with
                                            this podcast. While the host is
                                            knowledgeable, the content can
                                            sometimes feel a bit dry and lacking
                                            in practical, actionable advice. I'd
                                            like to see more real-world examples
                                            and case studies in future episodes.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
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
                    <Card>
                        <CardHeader>
                            <CardTitle>Subscribe</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='grid gap-4'>
                                <Button
                                    size='lg'
                                    variant='outline'
                                    className='flex items-center'
                                >
                                    <Airplay className='mr-2 h-5 w-5' />
                                    Spotify
                                </Button>
                                <Button
                                    size='lg'
                                    variant='outline'
                                    className='flex items-center'
                                >
                                    <Podcast className='mr-2 h-5 w-5' />
                                    Apple Podcasts
                                </Button>
                                <Button
                                    size='lg'
                                    variant='outline'
                                    className='flex items-center'
                                >
                                    <Podcast className='mr-2 h-5 w-5' />
                                    Google Podcasts
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default PodcastDetailWrapper;
