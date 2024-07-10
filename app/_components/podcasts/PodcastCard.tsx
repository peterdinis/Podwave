import { FC } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { PodcastType } from '@/app/_types/podcastTypes';

interface PodcastCardProps {
    podcast: PodcastType;
}

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
    return (
        <Card>
            <CardHeader className='flex flex-col items-center'>
                <Image
                    className='w-full rounded-xl'
                    src={podcast.imageUrl!}
                    alt='Podcast Image'
                    loading='lazy'
                    width={800}
                    height={800}
                />
                <CardTitle className='mt-4 text-center text-2xl font-bold dark:text-white'>
                    {podcast.podcastTitle}
                </CardTitle>
            </CardHeader>
            <CardDescription className='prose-p: prose mt-6 break-all p-3 text-lg font-bold'>
                {podcast.podcastDescription}
            </CardDescription>
            <CardContent className='text-center'>
                <Button className='mt-2' variant={'default'} size={'lg'}>
                    <Link href={`/podcasts/${podcast._id}`}>Detail</Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PodcastCard;
