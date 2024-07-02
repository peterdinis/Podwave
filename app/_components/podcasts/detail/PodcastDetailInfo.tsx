'use client';

import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import Header from '../../shared/Header';
import PodcastReview from '../reviews/PodcastReview';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useAudio } from '../../shared/provider/AudioProvider';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const PodcastDetailInfo: FC = () => {
    const { id } = useParams();
    const router = useRouter();
    const data = useQuery(api.podcasts.getPodcastById, {
        podcastId: id[0] as unknown as Id<'podcasts'>,
    });

    const { setAudio } = useAudio();

    const handlePlay = () => {
        setAudio({
          title: data?.podcastTitle!,
          audioUrl: data?.audioUrl!,
          imageUrl: data?.imageUrl!,
          author: data?.author!,
          podcastId: data?._id!,
        });
      };
    return (
        <DefaultLayout>
            <Header text='Podcast Detail' />
            <PodcastReview />
            <hr className='mt-2' />
            <div className="mt-6 flex w-full justify-between max-md:justify-center">
      <div className="flex flex-col gap-8 max-md:items-center md:flex-row">
        <Image
          src={data?.imageUrl as unknown as StaticImport}
          width={250}
          height={250}
          alt="Podcast image"
          className="aspect-square rounded-lg"
        />
        <div className="flex w-full flex-col gap-5 max-md:items-center md:gap-9">
          <article className="flex flex-col gap-2 max-md:items-center">
            <h1 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
              {data?.podcastTitle}
            </h1>
            <figure
              className="flex cursor-pointer items-center gap-2"
              onClick={() => {
                router.push(`/profile/${data?.authorId}`);
              }}
            >
              <Image
                src={data?.authorImageUrl as unknown as StaticImport}
                width={30}
                height={30}
                alt="Caster icon"
                className="size-[30px] rounded-full object-cover"
              />
              <h2 className="text-16 font-normal text-white-3">{data?.author}</h2>
            </figure>
          </article>

          <Button
            onClick={handlePlay}
            className="text-16 w-full max-w-[250px] bg-orange-1 font-extrabold"
          >
            <Play className='h-10 w-10' />Play podcast
          </Button>
        </div>
      </div>
    </div>
        </DefaultLayout>
    );
};

export default PodcastDetailInfo;
