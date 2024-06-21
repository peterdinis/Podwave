import { FC } from "react";
import DefaultLayout from "../shared/layouts/DefaultLayout";
import PodcastsLists from "../podcasts/PodcastsLists";

const HomeWrapper: FC = () => {
  return (
    <DefaultLayout>
        <PodcastsLists />
    </DefaultLayout>
  );
};

export default HomeWrapper;
