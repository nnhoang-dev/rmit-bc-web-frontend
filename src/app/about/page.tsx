'use client';

import AboutUs from '@/components/About/AboutUs';
import Awards from '@/components/About/Awards';
import CoreValues from '@/components/About/Corevalues';
import VisionAndMision from '@/components/About/VisionAndMision';
import React from 'react';

const AboutPage = () => {


    return (
        <div className=" text-base sm:text-xs md:text-sm lg:text-xl">
            <AboutUs />
            <VisionAndMision />
            <CoreValues />
            <Awards />
        </div >
    );
};

export default AboutPage;;