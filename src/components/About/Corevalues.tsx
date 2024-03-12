import React from 'react';
import Title from '../Title';

const CoreValues = () => {
    const coreValues = ['Growth Mindset', 'Leadership', 'Initiative', 'Professional', 'Effective Communication'];
    return (
        <div className='max-w-screen-xl mx-auto text-black px-2'>
            <div className='flex flex-col justify-center items-center pt-10 '>
                <Title title="Core Values" />

                <div className='w-full flex justify-between text-white font-bold mt-10 -mx-2'>
                    {coreValues.map((v, i) => (
                        <div key={i}
                            className='basis-1/5  group px-1 md:px-2  mt-5 relative overflow-hidden
                            h-32 sm:h-40 md:h-60  xl:h-80'>
                            <div className='w-full h-full bg-gradient-to-r from-black from-5% to-primary flex justify-center items-center'>
                                <div className='aspect-square w-4/5 bg-gradient-to-br from-primary to-black to-90% rounded-full flex justify-center items-center font-bold text-white
                                            transition-all ease duration-500 backdrop-blur-sm
                                            sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl'>
                                    <div className='group-hover:invisible flex justify-center items-center text-center transition-all ease duration-150
                                    '>{v.slice(0, 1)}</div>
                                </div>
                                <div className='text-[6px] sm:text-xs md:text-base lg:text-lg
                                top-full opacity-0 group-hover:top-0 group-hover:opacity-100 h-full w-full backdrop-blur-sm absolute flex justify-center items-center  transition-all ease-out duration-200 bg-white/10'>
                                    <span className='text-center leading-3 px-4'>{v}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoreValues;