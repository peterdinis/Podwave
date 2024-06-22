import { FC } from "react";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import Header from "../shared/Header";

const TopPodcastsWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text="Top rated podcasts" />
        </DefaultLayout>
    )
}

export default TopPodcastsWrapper