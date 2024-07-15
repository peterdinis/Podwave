"use client";

import { FC, useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import Header from '../Header';
import { Button } from '@/components/ui/button';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { NavigationPodcast } from '@/app/_types/podcastTypes';

const NavigationSearch: FC = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [podcasts, setPodcasts] = useState<NavigationPodcast[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const queryResult = useQuery(api.podcasts.getPodcastBySearch, { search: searchQuery });

    useEffect(() => {
        if (queryResult instanceof Error) {
            setError(queryResult.message);
            setIsLoading(false);
        } else if (queryResult) {
            setPodcasts(queryResult);
            setIsLoading(false);
            setError(null);
        } else {
            setIsLoading(true);
        }
    }, [queryResult]);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleSearch = () => {
        setIsLoading(true);
        setError(null);
    };

    return (
        <>
            <Input
                className='focus:shadow-outline w-full rounded-full bg-gray-100 py-2 pl-4 text-xs font-bold uppercase leading-tight text-gray-700 focus:outline-none sm:w-10/12 md:w-8/12 lg:w-6/12 lg:text-sm xl:w-4/12'
                type='text'
                placeholder='Search'
                onClick={openDialog}
            />
            {isDialogOpen && (
                <Dialog open={isDialogOpen}>
                    <DialogContent>
                        <DialogClose onClick={closeDialog} />
                        <DialogTitle>
                            <Header text='Search for podcast or category' />
                        </DialogTitle>
                        <DialogDescription className='mt-5'>
                            <Input
                                type='text'
                                placeholder='Search'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button className='mt-5' onClick={handleSearch}>Search</Button>
                        </DialogDescription>
                        <DialogDescription className='mt-10'>
                            {isLoading && <p>Loading...</p>}
                            {error && <p>Error: {error}</p>}
                            {podcasts && (
                                <ul>
                                    {podcasts.map((podcast) => (
                                        <li key={podcast._id}>
                                            {podcast.podcastTitle}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default NavigationSearch;