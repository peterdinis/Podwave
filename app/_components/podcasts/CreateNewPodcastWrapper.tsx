import { FC } from "react";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import Header from "../shared/Header";

const CreateNewPodcastWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text="Create new podcast" />
        </DefaultLayout>
    )
}

export default CreateNewPodcastWrapper