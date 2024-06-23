'use client';

import { FC} from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import { useUser } from '@clerk/nextjs';

const ProfileWrapper: FC = () => {
    const { user } = useUser();
    return (
        <DefaultLayout>
            <Header text={user?.fullName as unknown as string} />
            <h2 className='mt-5 p-3 text-xl prose prose-p: dark:text-white font-bold'>My favorite podcasts</h2>

        </DefaultLayout>
    );
};

export default ProfileWrapper;
