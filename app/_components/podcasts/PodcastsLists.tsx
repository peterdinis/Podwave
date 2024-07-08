'use client';

import { FC, useState } from 'react';
import Header from '../shared/Header';
import PodcastCard from './PodcastCard';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import PodcastPagination from './PodcastPagination';

const PodcastsLists: FC = () => {
    const [cursor, setCursor] = useState<string | undefined>(undefined);
    const [prevCursors, setPrevCursors] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 10; // Define how many items per page

    const data = useQuery(api.podcasts.getAllPodcasts, { cursor, limit });

    const handleNextPage = () => {
        if (data?.nextCursor) {
            setPrevCursors([...prevCursors, cursor || '']);
            setCursor(data.nextCursor);
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (prevCursors.length > 0) {
            const newPrevCursors = [...prevCursors];
            const newCursor = newPrevCursors.pop();
            setPrevCursors(newPrevCursors);
            setCursor(newCursor);
            setCurrentPage(currentPage - 1);
        }
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header text='All Podcasts' />
            <div className='mx-auto mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {data.podcasts.map((item, index) => (
                    <div key={index}>
                        <PodcastCard podcast={item} />
                    </div>
                ))}
            </div>

            <div className='mt-4 p-3'>
                <PodcastPagination
                    onNextPage={handleNextPage}
                    onPreviousPage={handlePreviousPage}
                    hasNextPage={!!data.nextCursor}
                    hasPreviousPage={prevCursors.length > 0}
                    currentPage={currentPage}
                />
            </div>
        </>
    );
};

export default PodcastsLists;
