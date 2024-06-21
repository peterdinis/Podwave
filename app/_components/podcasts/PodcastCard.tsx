import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const PodcastCard: FC = () => {
    return (
        <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <Image
                    className='rounded-xl'
                    src={
                        'https://image-placeholder.com/images/actual-size/1024x768.png'
                    }
                    alt='Podcast Image'
                    loading='lazy'
                    width={700}
                    height={700}
                />
            </CardHeader>
            <CardContent>
                <div className='text-2xl font-bold'>
                    <CardTitle className='prose-h1: prose mt-5 p-2 dark:text-white'>
                        Podcast Title
                    </CardTitle>
                </div>
                <Button className='mt-2 p-4' variant={'default'} size={'lg'}>
                    <Link href='/'>Detail</Link>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PodcastCard;
