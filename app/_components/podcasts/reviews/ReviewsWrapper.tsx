"use client"

import { FC } from 'react';
import { Star } from 'lucide-react';
import {
    AccordionItem,
    Accordion,
    AccordionContent,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { format } from 'date-fns';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const ReviewsWrapper: FC = () => {
    const data = useQuery(api.reviews.getAllReviews);

    return (
        <Accordion type='single' collapsible>
            <AccordionItem value='reviews'>
                <AccordionTrigger className='text-xl font-semibold'>
                    Reviews
                </AccordionTrigger>
                <AccordionContent>
                    <div className='grid gap-6'>
                        {data?.reviews &&
                            data.reviews.map((item) => (
                                <ReviewItem key={item._id} review={item} />
                            ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

const ReviewItem: FC<{ review: any }> = ({ review }) => {
    const userQuery = useQuery(api.users.getUserById, { clerkId: review.userId });

    if (!userQuery) {
        return <div>Loading...</div>;
    }

    const user = userQuery;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <Avatar>
                    <AvatarImage src={user.imageUrl || 'https://placehold.co/400x400'}/>
                </Avatar>
                <div>
                    <h4 className='font-medium'>
                        {user.name || 'Anonymous'}
                    </h4>
                    <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                className={`h-4 w-4 ${index < review.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className='text-muted-foreground'>{review.reviewText}</p>
            <p className='text-muted-foreground'>
                {format(review._creationTime, 'yyyy-MM-dd')}
            </p>
        </div>
    );
};

export default ReviewsWrapper;