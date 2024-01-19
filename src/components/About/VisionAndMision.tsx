import React from 'react';

const VisionAndMision = () => {
    return (
        <div className='w-full  bg-gradient-to-r from-black to-primary'>
            <div className='max-w-screen-lg mx-auto text-black py-20 px-2'>
                <div className='flex items-center justify-between'>
                    <div className='text-5xl font-bold text-white bg-primary w-96 h-20 flex justify-center items-center'>VISION</div>
                    <div className='text-3xl font-bold text-white ml-[10%]'>Nurture Future Business Leaders</div>
                </div>
                <div className='flex items-center justify-between mt-20'>
                    <div className='flex-1'>
                        <div className='text-3xl font-bold text-white text-center'>Sharpen business acumen in every step of our journey</div>
                        <div className='text-3xl font-bold text-white text-center'>Enhance a sense of belonging </div>

                    </div>
                    <div className='text-5xl font-bold text-white bg-primary w-96 h-20 flex justify-center items-center ml-[10%]'>MISSION</div>
                </div>
            </div>
        </div>
    );
};

export default VisionAndMision;