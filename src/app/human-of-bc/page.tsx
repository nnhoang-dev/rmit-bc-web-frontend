'use client';
import Banner from '@/components/HumanOfBC/Banner';
import Generation from '@/components/HumanOfBC/Generation';
import OutstandingLeader from '@/components/HumanOfBC/OutstandingLeader';
import React from 'react';

const HumanOfBC = () => {
    return (
        <div className=' max-w-screen-lg mx-auto text-base'>
            <Generation />
            <OutstandingLeader />
        </div>
    );
};

export default HumanOfBC;