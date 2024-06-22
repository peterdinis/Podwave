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
            <h2 className='mt-5 p-4 font-bold prose prose-h2: text-2xl'>{user?.fullName} Welcome</h2>
            <ProfilePodcasts />
        </DefaultLayout>
    );
};

export default ProfileWrapper;
