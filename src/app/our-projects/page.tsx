'use client';
import AnnualEvents from '@/components/OurProjects/AnnualEvents';
import OtherEvents from '@/components/OurProjects/OtherEvents';
import React from 'react';
import { allEvents } from '@/lib/data';

const OurProjectsPage = () => {
    return (
        <div className='w-full'>
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center items-center my-10 px-2 '>
                <div className='font-black text-5xl'>OUR PROJECTS</div>
                <AnnualEvents />
                <OtherEvents allEvents={allEvents} />
            </div >
        </div >
    );
};

export default OurProjectsPage;