import { FC } from "react";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import Header from "../shared/Header";

const PodcastCategoriesWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text="Categories" />
        </DefaultLayout>
    )
}

export default PodcastCategoriesWrapper