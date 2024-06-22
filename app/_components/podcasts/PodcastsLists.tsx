'use client';

import { FC } from 'react';
import Header from '../shared/Header';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';

const PodcastsLists: FC = () => {
    return (
        <>
            <Header text='Top podcasts' />
            <div className='container mx-auto'>
                <div className='flex h-full w-full items-center justify-center px-4 py-24 sm:py-8'>
                    {/* Carousel for desktop and large size devices */}
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
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 1L1 7L7 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        <Slide index={0}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 1
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='texlg:t-xl le text-basealg:ding-tight leading-4 text-white'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M1 1L7 7L1 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
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
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 1L1 7L7 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        <Slide index={0}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 1
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='texlg:t-xl le text-basealg:ding-tight leading-4 text-white'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M1 1L7 7L1 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
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
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M7 1L1 7L7 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </ButtonBack>
                            <div className='mx-auto h-full w-full overflow-x-hidden overflow-y-hidden'>
                                <Slider>
                                    <div
                                        id='slider'
                                        className='flex h-full w-full items-center justify-start transition duration-700 ease-out md:gap-6 lg:gap-8'
                                    >
                                        <Slide index={0}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 1
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={5}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={6}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={7}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={8}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/fDngH9G/carosel-1.png'
                                                    alt='black chair and white table'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='texlg:t-xl le text-basealg:ding-tight leading-4 text-white'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={9}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/DWrGxX6/carosel-2.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={10}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/tCfVky2/carosel-3.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                        <Slide index={11}>
                                            <div className='relative flex w-full flex-shrink-0 sm:w-auto'>
                                                <img
                                                    src='https://i.ibb.co/rFsGfr5/carosel-4.png'
                                                    alt='sitting area'
                                                    className='w-full object-cover object-center'
                                                />
                                                <div className='absolute h-full w-full bg-gray-800 bg-opacity-30 p-6'>
                                                    <h2 className='text-base leading-4 text-white lg:text-xl lg:leading-5'>
                                                        Catalog 2
                                                    </h2>
                                                    <div className='flex h-full items-end pb-6'>
                                                        <h3 className='text-xl font-semibold leading-5 text-white lg:text-2xl lg:leading-6'>
                                                            Minimal Interior
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext
                                role='button'
                                aria-label='slide forward'
                                className='absolute right-0 z-30 mr-8 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
                                id='next'
                            >
                                <svg
                                    width={8}
                                    height={14}
                                    viewBox='0 0 8 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M1 1L7 7L1 13'
                                        stroke='white'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        </>
    );
};

export default PodcastsLists;
