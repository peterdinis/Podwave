import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';

const AboutWrapper: FC = () => {
    return <DefaultLayout>
        <Header text='About Podware application' />
    </DefaultLayout>;
};

export default AboutWrapper;
