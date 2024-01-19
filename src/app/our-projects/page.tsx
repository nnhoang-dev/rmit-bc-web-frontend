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
                    <div className='text-primary text-3xl font-bold mt-10'>Annual Events</div>
                    <div className='w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap -mx-4'>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                    </div>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='text-primary text-3xl font-bold mt-10'>Other Events</div>
                    <div className='flex mt-10 text-gray-400'>
                        <div className='text-2xl font-bold  lg:mx-10 cursor-pointer transition-all ease duration-200 text-primary' tabIndex={0} onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }}>2023</div>
                        <div className='text-2xl font-bold  lg:mx-10 cursor-pointer transition-all ease duration-200' tabIndex={1} onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }}>2022</div>
                        <div className='text-2xl font-bold  lg:mx-10 cursor-pointer transition-all ease duration-200' tabIndex={2} onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }}>2021</div>
                        <div className='text-2xl font-bold  lg:mx-10 cursor-pointer transition-all ease duration-200' tabIndex={3} onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }}>2020</div>
                        <div className='text-2xl font-bold  lg:mx-10 cursor-pointer transition-all ease duration-200' tabIndex={4} onClick={(e: React.MouseEvent<HTMLElement>) => { handleClick(e); }} > 2019</div >
                    </div >
                    <div className='w-full flex flex-col justify-center items-center lg:flex-row lg:flex-wrap -mx-4'>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                        <div className='w-4/5 aspect-square bg-gray-400 rounded-xl mt-10
                                        lg:w-1/5 lg:mx-4'></div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default OurProjectsPage;