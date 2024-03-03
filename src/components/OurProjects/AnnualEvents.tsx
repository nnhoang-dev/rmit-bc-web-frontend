import React from 'react';
import Title from '../Title';
import { event } from '@/lib/interface';

const AnnualEvents = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='text-primary text-3xl font-bold mt-6'>Annual Events</div>

            <div className='w-full flex flex-wrap md:-mx-2 lg:-mx-4'>
                <div className='md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  hover:scale-[1.02] transition-all duration-200 ease'>
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
                                        mt-2 lg:mt-8 md:mt-4  hover:scale-[1.02] transition-all duration-200 ease'>
                    <div className='shadow-lg border'>
                        <div className='w-full h-52 bg-gray-400'></div>
                        <div className='p-4 pb-8'>
                            <div className='text-xs'>
                                <span>Biennially</span>
                                <span className='mx-4'>|</span>
                                <span>Nationwide undergraduates</span>
                            </div>
                            <div className='font-bold mt-2'>The Logisticom competition</div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AnnualEvents;