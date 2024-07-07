'use client';

import { FC, useState, FormEvent } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { createReview } from '@/convex/reviews';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { format } from 'date-fns';
import { Id } from '@/convex/_generated/dataModel';

interface PodcastReviewProps {
    podcastId: string;
}

const PodcastReview: FC<PodcastReviewProps> = ({ podcastId }) => {
    const [reviewText, setReviewText] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const { toast } = useToast();
    const { user } = useUser();

    const handleReviewSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await createReview('string' as any, {
                podcastId: podcastId as unknown as Id<'podcasts'>,
                userId: user?.id as unknown as Id<'users'>,
                reviewText: reviewText,
                rating: rating,
                reviewDate: format(new Date(), 'yyyy-MM-dd'),
            });
            toast({
                title: 'New review was created',
                className: 'bg-green-600 text-white font-bold',
                duration: 2000,
            });
        } catch (error: any) {
            console.log('Errror', error);
            toast({
                title: 'Failed to created review',
                className: 'bg-red-600 text-white font-bold',
                duration: 2000,
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button className='mt-5' variant={'default'}>
                    Pridať recenziu k podcastu
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h2>Pridať recenziu</h2>
                    </DialogTitle>
                    <form onSubmit={handleReviewSubmit} className='mt-4'>
                        <Label className='ml-2 text-lg font-bold'>
                            Tvoj komentár
                        </Label>
                        <Textarea
                            className='mt-2'
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder='Napíšte sem váš komentár...'
                            required
                        />

                        <Label className='ml-2 mt-3 text-lg font-bold'>
                            Hodnotenie
                        </Label>
                        <select
                            className='ml-4 mt-2 p-2'
                            value={rating}
                            onChange={(e) =>
                                setRating(parseInt(e.target.value))
                            }
                            required
                        >
                            <option value={0}>-- Vyberte hodnotenie --</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                        <br />
                        <Button
                            className='mt-4'
                            variant={'secondary'}
                            type='submit'
                        >
                            Pridať recenziu
                        </Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PodcastReview;
