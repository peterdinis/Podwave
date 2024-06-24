import { FC } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Header from '../../shared/Header';
import ReviewForm from './ReviewForm';

const PodcastReview: FC = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <Button className='mt-5' variant={'default'}>
                        Add podcast review
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <Header text='Add review' />
                        </DialogTitle>
                        <DialogDescription className='mt-4'>
                            <ReviewForm />
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default PodcastReview;
