import type { NextPage } from 'next';
import GlobalErrorComponent from '../_components/shared/GlobalErrorComponent';

const NotFoundPage: NextPage = () => {
    return (
        <GlobalErrorComponent
            statusCode={'404'}
            message={'Requested page not found'}
            linkHref='/'
            linkText='Return to main podcasts page'
        />
    );
};

export default NotFoundPage;
