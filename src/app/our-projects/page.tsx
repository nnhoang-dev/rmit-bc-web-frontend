'use client';
import AnnualEvents from '@/components/OurProjects/AnnualEvents';
import OtherEvents from '@/components/OurProjects/OtherEvents';
import React from 'react';
import { event } from "../../lib/interface";

const OurProjectsPage = () => {

    const allEvents: event[] = [
        {
            name: 'International Women’s Day',
            time: '8 Mar 2024 15:00 - 17:00',
            audience: 'RMIT undergraduates',
            event: 'Upcoming',
            year: '2024',
        },
        {
            name: 'BCareer 2.0: Road to Management Trainee - Secrets to Success',
            time: '16 Dec 2023 14:00 - 17:30',
            audience: 'Nationwide undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'International Women’s Day',
            time: '8 Mar 2024 15:00 - 17:00',
            audience: 'RMIT undergraduates',
            event: 'Upcoming',
            year: '2024',
        },
        {
            name: 'BCareer 2.0: Road to Management Trainee - Secrets to Success',
            time: '16 Dec 2023 14:00 - 17:30',
            audience: 'Nationwide undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'International Women’s Day',
            time: '8 Mar 2024 15:00 - 17:00',
            audience: 'RMIT undergraduates',
            event: 'Upcoming',
            year: '2024',
        },
        {
            name: 'BCareer 2.0: Road to Management Trainee - Secrets to Success',
            time: '16 Dec 2023 14:00 - 17:30',
            audience: 'Nationwide undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'International Women’s Day',
            time: '8 Mar 2024 15:00 - 17:00',
            audience: 'RMIT undergraduates',
            event: 'Upcoming',
            year: '2024',
        },
        {
            name: 'BCareer 2.0: Road to Management Trainee - Secrets to Success',
            time: '16 Dec 2023 14:00 - 17:30',
            audience: 'Nationwide undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'International Women’s Day',
            time: '8 Mar 2024 15:00 - 17:00',
            audience: 'RMIT undergraduates',
            event: 'Upcoming',
            year: '2024',
        },
        {
            name: 'BCareer 2.0: Road to Management Trainee - Secrets to Success',
            time: '16 Dec 2023 14:00 - 17:30',
            audience: 'Nationwide undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        },
        {
            name: 'BCareer: The Backstory of Marketing and Sales',
            time: '30 Aug 2023 16:00 - 18:30',
            audience: 'RMIT undergraduates',
            event: 'Past',
            year: '2023',
        }
    ];

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