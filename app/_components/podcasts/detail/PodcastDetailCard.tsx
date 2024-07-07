'use client';

import { PodcastType } from '@/app/_types/podcastTypes';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

const PodcastDetailCard: FC<PodcastType> = ({
    imageUrl,
    podcastTitle,
    _id,
    podcastDescription,
}: PodcastType) => {
    const router = useRouter();

    const handleViews = () => {
        router.push(`/podcasts/${_id}`, {
            scroll: true,
        });
    };

    return (
        <div className='cursor-pointer' onClick={handleViews}>
            <figure className='flex flex-col gap-2'>
                <Image
                    src={imageUrl as unknown as StaticImport}
                    width={174}
                    height={174}
                    alt={podcastTitle as unknown as string}
                    className='aspect-square h-fit w-full rounded-xl 2xl:size-[200px]'
                />
                <div className='flex flex-col'>
                    <h1 className='text-16 text-white-1 truncate font-bold'>
                        {podcastTitle}
                    </h1>
                    <h2 className='text-12 text-white-4 truncate font-normal capitalize'>
                        {podcastDescription}
                    </h2>
                </div>
            </figure>
        </div>
    );
};

export default PodcastDetailCard;
