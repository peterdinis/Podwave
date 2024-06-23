import { FC } from 'react';
import DefaultLayout from '../../shared/layouts/DefaultLayout';
import Header from '../../shared/Header';
import PodcastReview from '../reviews/PodcastReview';

const PodcastDetailInfo: FC = () => {
    return (
        <DefaultLayout>
            <Header text='Podcast Detail' />
            <PodcastReview />
        </DefaultLayout>
    );
};

export default PodcastDetailInfo;
