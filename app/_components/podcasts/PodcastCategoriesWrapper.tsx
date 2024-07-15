import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';
import CategoriesLists from './categories/CategoriesLists';

const PodcastCategoriesWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text='Categories' />
            <CategoriesLists />
        </DefaultLayout>
    );
};

export default PodcastCategoriesWrapper;
