import React from 'react';

const NationalProjects = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-20 '>
            <div className=' text-4xl text-primary font-extrabold border-b-4 border-black px-5 pb-5'>National Projects</div>

            <div className='flex mt-10'>
                <div className="h-80 w-80 bg-gray-400 rounded-3xl ">
                </div>
                <div className="flex-1 ml-20">
                    <p className='font-bold text-2xl mb-3'>MARKETING CHALLENGERS</p>
                    <p className="text-xl">Founded in the year 2009, Marketing Challengers, a 2-month nationwide marketing communication competition, has achieved substantial success over the course of 11 seasons. The platform serves as an arena for aspiring marketing enthusiasts among undergraduates in Vietnam, offering them the opportunity to participate in an agency-style challenge by crafting comprehensive Integrated Marketing Communication (IMC) strategies in English for prominent brands spanning diverse industry sectors.</p>
                </div>
            </div>
            <div className='flex mt-10'>
                <div className="h-80 w-80 bg-gray-400 rounded-3xl ">
                </div>
                <div className="flex-1 ml-20">
                    <p className='font-bold text-2xl mb-3'> THE LOGISTICOM</p>
                    <p className="text-xl">With 7 successful seasons, the Logi﻿sticom is a nationwide Logistics and Supply Chain Management competition for undergraduates in Vietnam. Its mission is to provide structure covering the entire Logistics and Supply Chain Management with emerging topics to highlight academic knowledge and practical skills alongside assistance from industry professionals.</p>
                </div>
            </div>
        </div>
    );
};

export default NationalProjects;