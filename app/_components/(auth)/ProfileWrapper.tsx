'use client';

import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import { useUser } from '@clerk/nextjs';
import { Label } from '@/components/ui/label';
import {
    AccordionItem,
    Accordion,
    AccordionContent,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { format } from 'date-fns';
import MyCreatedPodcastsWrapper from '../podcasts/profile/MyCreatedPodcastsWrapper';

const ProfileWrapper: FC = () => {
    const { user } = useUser();
    return (
        <DefaultLayout>
            <Header text={user?.fullName as unknown as string} />
            <Accordion className='mt-5' type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger>Account information</AccordionTrigger>
                    <AccordionContent>
                        <Label className='text-lg'>
                            FullName: {user?.fullName}
                        </Label>
                        <br />
                        <Label className='mt-3 text-lg'>
                            Last Sign In:{' '}
                            {user?.lastSignInAt
                                ? format(
                                      new Date(user.lastSignInAt).toString(),
                                      'yyyy-MM-dd',
                                  )
                                : 'N/A'}
                        </Label>
                        <br />
                        <Label className='mt-3 text-lg'>
                            Update account:{' '}
                            {user?.updatedAt
                                ? format(
                                      new Date(user.updatedAt).toString(),
                                      'yyyy-MM-dd',
                                  )
                                : 'N/A'}
                        </Label>
                        <br />
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                    <AccordionTrigger>My created podcasts</AccordionTrigger>
                    <AccordionContent>
                        <MyCreatedPodcastsWrapper />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </DefaultLayout>
    );
};

export default ProfileWrapper;
