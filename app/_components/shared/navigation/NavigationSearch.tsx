"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import Header from '../Header';

const NavigationSearch = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openDialog = () => {
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
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
                            <Input type='text' placeholder='Search' />
                        </DialogDescription>
                        <DialogDescription className='mt-10'>
                            TODO: Map for items here
                        </DialogDescription>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
};

export default NavigationSearch;