import { FC } from "react";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import Header from "../shared/Header";


const NewPodcastWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text="New added podcasts" />
        </DefaultLayout>
    )
}

export default NewPodcastWrapper