import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Id } from '@/convex/_generated/dataModel';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

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
    podcast: any;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }: any) => {
    return (
        <Card>
            <CardHeader className='z-10 flex flex-row items-center justify-between space-y-0 pb-2'>
                <Image
                    className='rounded-xl w-full'
                    src={podcast.imageUrl}
                    alt='Podcast Image'
                    loading='lazy'
                    width={400}
                    height={500}
                />
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>
                    <CardTitle className='prose-h1: prose mt-5 p-2 dark:text-white'>
                        {podcast.podcastTitle}
                    </CardTitle>
                </div>
                <Button className='mt-2 p-4' variant={'default'} size={'lg'}>
                    <Link href={`/podcasts/${podcast._id}`}>Detail</Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PodcastCard;