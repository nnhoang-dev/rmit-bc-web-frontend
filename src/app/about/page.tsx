'use client';

import AboutUs from '@/components/About/AboutUs';
import Awards from '@/components/About/Awards';
import Banner from '@/components/About/Banner';
import Corevalues from '@/components/About/Corevalues';
import VisionAndMision from '@/components/About/VisionAndMision';
import React from 'react';

const AboutPage = () => {


    return (
        <div className=" w-full ">
            <Banner />
            <AboutUs />
            <VisionAndMision />
            <Corevalues />
            <Awards />
        </div >
    );
};

export default AboutPage;;