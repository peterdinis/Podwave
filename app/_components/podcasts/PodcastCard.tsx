import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Id } from '@/convex/_generated/dataModel';
import Image from 'next/image';
import Link from 'next/link';

interface Podcast {
    audioDuration: number;
    audioStorageId: any;
    audioUrl: string;
    author: string;
    authorId: string;
    authorImageUrl: string;
    categoryId: string;
    imagePrompt: string;
    imageStorageId: string;
    imageUrl: string;
    podcastDescription: string;
    podcastTitle: string;
    user: string;
    views: number;
    voicePrompt: string;
    voiceType: string;
    _creationTime: number;
    _id: Id<"podcasts">
}

interface PodcastCardProps {
    podcast: Podcast | any;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
    return (
        <Card>
            <CardHeader className='flex flex-col items-center'>
                <Image
                    className='rounded-xl w-full'
                    src={podcast.imageUrl}
                    alt='Podcast Image'
                    loading='lazy'
                    width={1200}
                    height={1200}
                />
                <CardTitle className='mt-4 text-2xl font-bold text-center dark:text-white'>
                    {podcast.podcastTitle}
                </CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
                <Button className='mt-2' variant={'default'} size={'sm'}>
                    <Link href={`/podcasts/${podcast._id}`}>Detail</Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PodcastCard;