'use client';

import AboutUs from '@/components/About/AboutUs';
import Awards from '@/components/About/Awards';
import CoreValues from '@/components/About/Corevalues';
import VisionAndMision from '@/components/About/VisionAndMision';
import React from 'react';

const AboutPage = () => {


    return (
        <div className=" w-full text-[10px] sm:text-xs md:text-base lg:text-lg">
            <AboutUs />
            <VisionAndMision />
            <CoreValues />
            <Awards />
        </div >
    );
};

export default AboutPage;;