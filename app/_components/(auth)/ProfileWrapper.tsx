'use client';

import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import { useUser } from '@clerk/nextjs';

const ProfileWrapper: FC = () => {
    const { user } = useUser();
    return (
        <DefaultLayout>
            <Header text={user?.fullName as unknown as string} />
            <h2 className='prose-p: prose mt-5 p-3 text-xl font-bold dark:text-white'>
                My favorite podcasts
            </h2>
        </DefaultLayout>
    );
};

export default ProfileWrapper;
