import { FC } from 'react';
import DefaultLayout from '../shared/layouts/DefaultLayout';
import Header from '../shared/Header';

const AboutWrapper: FC = () => {
    return (
        <DefaultLayout>
            <Header text='About Podware application' />
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
                <p className="text-lg p-2 dark:text-gray-800">
                    Podware is a cutting-edge application designed for creating and listening to podcasts. 
                    It empowers creators with intuitive tools to record, edit, and publish podcasts effortlessly.
                </p>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-800">
                    Built with Tailwind CSS for responsive and sleek designs, and leveraging Shadcn UI for consistent 
                    user interface components across the application.
                </p>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2 dark:text-black">Create Your Own Podcasts with AI Assistance</h2>
                    <p className="text-lg dark:text-gray-800">
                        Podware integrates advanced AI capabilities to assist creators in generating high-quality 
                        podcasts. Whether you're scripting, editing, or enhancing audio, our AI tools streamline 
                        the process, making podcast creation efficient and accessible.
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2 dark:text-black">Discover and Review Podcasts</h2>
                    <p className="text-lg dark:text-gray-800">
                        Explore a vast library of podcasts within Podware. Listen to your favorite shows, discover 
                        new content, and leave reviews to share your thoughts with the community. Podware's intuitive 
                        interface ensures a seamless experience for both listeners and creators.
                    </p>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AboutWrapper;