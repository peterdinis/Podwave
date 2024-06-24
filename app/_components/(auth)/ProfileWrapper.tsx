'use client';

import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import { useUser } from '@clerk/nextjs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { AccordionItem, Accordion, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';



const ProfileWrapper: FC = () => {
    const { user } = useUser();
    return (
        <DefaultLayout>
            <Header text={user?.fullName as unknown as string} />
            <Accordion className='mt-5' type='single' collapsible>
            <AccordionItem value='item-1'>
                <AccordionTrigger>Account information</AccordionTrigger>
                <AccordionContent>
                   <Label className='text-xl'>FullName:</Label>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    <Switch id='airplane-mode' />
                    <Label htmlFor='airplane-mode' className='text-white'>
                        Airplane Mode
                    </Label>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    <Switch id='airplane-mode' />
                    <Label htmlFor='airplane-mode' className='text-white'>
                        Airplane Mode
                    </Label>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    <Switch id='airplane-mode' />
                    <Label htmlFor='airplane-mode' className='text-white'>
                        Airplane Mode
                    </Label>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </DefaultLayout>
    );
};

export default ProfileWrapper;
