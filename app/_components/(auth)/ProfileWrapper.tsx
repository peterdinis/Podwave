'use client';

import { FC, ReactNode } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import { useUser } from '@clerk/nextjs';
import ProfilePodcasts from '../podcasts/profile/ProfilePodcasts';

const ProfileWrapper: FC = () => {
    const { user } = useUser();
    return (
        <DefaultLayout>
            <Header text='My Profile' />
            <h2 className='prose-h2: prose mt-5 p-4 text-2xl font-bold'>
                {user?.fullName} Welcome
            </h2>
            <ProfilePodcasts />
        </DefaultLayout>
    );
};

export default ProfileWrapper;
