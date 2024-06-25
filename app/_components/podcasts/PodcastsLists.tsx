'use client';

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../shared/Header';
import {
    CarouselProvider,
    Slider,
    Slide,
} from 'pure-react-carousel';
import PodcastCard from './PodcastCard';

const slideAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

const PodcastsLists: FC = () => {
    const [currentSlide, _] = useState(0);
    const totalSlides = 10;
    const visibleSlidesLg = 12;
    const visibleSlidesMd = 2;
    const visibleSlidesSm = 1;

    return (
        <>
            <Header text='Top podcasts' />
            <div className='container mx-auto'>
                <div className='flex h-full w-full items-center justify-center px-4 py-24 sm:py-8'>
                    <CarouselProvider
                        className='carousel hidden lg:block z-10'
                        naturalSlideWidth={200}
                        isIntrinsicHeight={true}
                        totalSlides={totalSlides}
                        visibleSlides={visibleSlidesLg}
                        step={0}
                        infinite={false}
                        currentSlide={currentSlide}
                        naturalSlideHeight={0}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(totalSlides)].map(
                                            (_, index) => (
                                                <Slide
                                                    index={index}
                                                    key={index}
                                                >
                                                    <motion.div
                                                        initial='hidden'
                                                        animate='visible'
                                                        exit='exit'
                                                        variants={
                                                            slideAnimation
                                                        }
                                                        transition={{
                                                            duration: 0.5,
                                                        }}
                                                    >
                                                        <PodcastCard />
                                                    </motion.div>
                                                </Slide>
                                            ),
                                        )}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for tablet and medium size devices */}
                    <CarouselProvider
                        naturalSlideHeight={100}
                        className='carousel hidden md:block lg:hidden z-10'
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={totalSlides}
                        visibleSlides={visibleSlidesMd}
                        step={1}
                        infinite={false}
                        currentSlide={currentSlide}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(totalSlides)].map(
                                            (_, index) => (
                                                <Slide
                                                    index={index}
                                                    key={index}
                                                >
                                                    <motion.div
                                                        initial='hidden'
                                                        animate='visible'
                                                        exit='exit'
                                                        variants={
                                                            slideAnimation
                                                        }
                                                        transition={{
                                                            duration: 0.5,
                                                        }}
                                                    >
                                                        <PodcastCard/>
                                                    </motion.div>
                                                </Slide>
                                            ),
                                        )}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </CarouselProvider>

                    {/* Carousel for mobile and Small size Devices */}
                    <CarouselProvider
                        className='carousel block md:hidden z-10'
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={totalSlides}
                        visibleSlides={visibleSlidesSm}
                        step={1}
                        infinite={false}
                        currentSlide={currentSlide}
                        naturalSlideHeight={0}
                    >
                        <div className='relative flex w-full items-center justify-center'>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        {[...Array(totalSlides)].map(
                                            (_, index) => (
                                                <Slide
                                                    index={index}
                                                    key={index}
                                                >
                                                    <motion.div
                                                        initial='hidden'
                                                        animate='visible'
                                                        exit='exit'
                                                        variants={
                                                            slideAnimation
                                                        }
                                                        transition={{
                                                            duration: 0.5,
                                                        }}
                                                    >
                                                        <PodcastCard />
                                                    </motion.div>
                                                </Slide>
                                            ),
                                        )}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
            
        </>
    );
};

export default PodcastsLists;
