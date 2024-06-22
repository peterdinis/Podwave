'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Header from '../shared/Header';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PodcastCard from './PodcastCard';

const slideAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

const PodcastsLists: FC = () => {
    return (
        <>
            <Header text='Top podcasts' />
            <div className='container mx-auto'>
                <div className='flex h-full w-full items-center justify-center px-4 py-24 sm:py-8'>
                    <CarouselProvider
                        className='hidden lg:block'
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={12}
                        visibleSlides={4}
                        step={1}
                        infinite={true}
                        naturalSlideHeight={0}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <ButtonBack
                                role='button'
                                aria-label='slide backward'
                                className='absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='prev'
                            >
                                <ArrowLeft />
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(8)].map((_, index) => (
                                            <Slide index={index} key={index}>
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={slideAnimation}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <PodcastCard />
                                                </motion.div>
                                            </Slide>
                                        ))}
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <ArrowRight />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider
                        naturalSlideHeight={100}
                        className='hidden md:block lg:hidden'
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={12}
                        visibleSlides={2}
                        step={1}
                        infinite={true}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <ButtonBack
                                role='button'
                                aria-label='slide backward'
                                className='absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='prev'
                            >
                                <ArrowLeft />
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(4)].map((_, index) => (
                                            <Slide index={index} key={index}>
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={slideAnimation}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <PodcastCard />
                                                </motion.div>
                                            </Slide>
                                        ))}
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <ArrowRight />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider
                        className='block md:hidden'
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={12}
                        visibleSlides={1}
                        step={1}
                        infinite={true}
                        naturalSlideHeight={0}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <ButtonBack
                                role='button'
                                aria-label='slide backward'
                                className='absolute left-0 z-30 ml-8 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='prev'
                            >
                                <ArrowLeft />
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(2)].map((_, index) => (
                                            <Slide index={index} key={index}>
                                                <motion.div
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={slideAnimation}
                                                    transition={{ duration: 0.5 }}
                                                >
                                                    <PodcastCard />
                                                </motion.div>
                                            </Slide>
                                        ))}
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <ArrowRight />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </>
    );
};

export default PodcastsLists;