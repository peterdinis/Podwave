import { FC } from 'react';
import Header from '../shared/Header';
import PodcastCard from './PodcastCard';

const PodcastsLists: FC = () => {
    return (
        <>
            <Header text='Top podcasts' />
            <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
                <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                </div>
            </main>
        </>
    );
};

export default PodcastsLists;
