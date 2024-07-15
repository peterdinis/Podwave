import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import CreateNewPodcastForm from './create/CreateNewPodcastForm';

const CreateNewPodcastWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text='Create new podcast' />
            <CreateNewPodcastForm />
        </DefaultLayout>
    );
};

export default CreateNewPodcastWrapper;
