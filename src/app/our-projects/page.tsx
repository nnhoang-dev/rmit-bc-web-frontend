'use client';
import React from 'react';

const OurProjectsPage = () => {
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (!e.currentTarget.classList.contains('text-primary')) {
            e.currentTarget.classList.add('text-primary');
        }
        const index = e.currentTarget.tabIndex;
        let len = e.currentTarget.parentElement?.children.length;
        len = len ? len : 0;
        for (var i = 0; i < len; i++) {
            if (i != index) {
                e.currentTarget.parentElement?.children[i].classList.remove('text-primary');
            }
        }


    };
    let currentIndex = 0;

    const data = [
        {
            year: '2023',
            event: ['1', '2', '3']
        },
        {
            year: '2022',
            event: ['1', '2', '3']
        },
        {
            year: '2021',
            event: ['1', '2', '3']
        },
        {
            year: '2020',
            event: ['1', '2', '3']
        },
        {
            year: '2019',
            event: ['1', '2', '3']
        },
    ];

    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center my-20 px-2'>
                <div className='font-bold text-5xl'>OUR PROJECTS</div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='text-4xl text-primary font-extrabold border-b-4 border-black mt-5 px-5 pb-5'>Annual Events </div>

                    <div className='w-full flex flex-wrap md:-mx-2 lg:-mx-4'>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='text-primary text-3xl font-bold mt-10'>Other Events</div>
                    <div className='border-2 border-gray-400 p-4 rounded-full w-4/5 flex justify-between'>
                        <span>
                            Type here</span>
                        <span>O</span>
                    </div>
                    <div className='w-full mt-10 px-4 hidden md:block'>
                        <div className='p-4 pr-0 bg-gray-200  flex'>
                            <div className='flex flex-col'>
                                <span className='mx-3 my-1 font-bold'>Audience:</span>
                                <span className='mx-3 my-1 font-bold'>Event:</span>
                                <span className='mx-3 my-1 font-bold'>Time:</span>
                            </div>
                            <div className=''>
                                <div className='my-2'>
                                    <span className='mx-4 text-primary '>All Audience</span>
                                    <span className='mx-4'>Nationwide undergraduates</span>
                                    <span className='mx-4'>RMIT undergraduates</span>
                                </div>
                                <div className='my-2'>
                                    <span className='mx-4 text-primary '>All Event</span>
                                    <span className='mx-4'>Upcoming</span>
                                    <span className='mx-4'>Past</span>
                                </div>
                                <div className='my-2'>
                                    <span className='mx-4 text-primary '>All Dates</span>
                                    <span className='mx-4'>2024</span>
                                    <span className='mx-4'>2023</span>
                                    <span className='mx-4'>2022</span>
                                    <span className='mx-4'>2021</span>
                                    <span className='mx-4'>2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-wrap md:-mx-2 lg:-mx-4'>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  '>
                            <div className='shadow-lg border'>
                                <div className='w-full h-52 bg-gray-400'></div>
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>Biennially</span>
                                        <span className='mx-4'>|</span>
                                        <span>Nationwide undergraduates</span>
                                    </div>
                                    <div className='font-bold mt-2'>Marketing Challengers Competition</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default OurProjectsPage;