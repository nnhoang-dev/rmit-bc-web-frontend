'use client';

import Banner from '@/components/Recruiment/Banner';
import OurDepartments from '@/components/Recruiment/OurDepartments';
import Recruiment from '@/components/Recruiment/Recruiment';
import React from 'react';
import Image from 'next/image';

const RecruimentPage = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-screen-lg mx-auto flex-col mt-10 p-2 text-base">
                <Recruiment />
                <OurDepartments />
            </div>
        </div>
    );
};

export default RecruimentPage;