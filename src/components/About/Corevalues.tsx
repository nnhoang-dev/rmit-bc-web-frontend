import React from 'react';

const Corevalues = () => {
    const coreValues = ['Growth Mindset', 'Leadership', 'Initiative', 'Professional', 'Effective Communication'];
    return (
        <div className='max-w-screen-xl mx-auto text-black px-2'>
            <div className='flex flex-col justify-center items-center pt-20 '>
                <div className='text-4xl text-primary font-extrabold border-b-4 border-black px-5 pb-5'>Core Values</div>
                <div className='w-full flex justify-between text-white font-bold mt-10'>
                    {coreValues.map((v, i) => (
                        <div key={i}
                            className='group overflow-hidden h-80 w-60 relative bg-gradient-to-r from-black to-primary flex justify-center items-center '>
                            <div className='h-52 w-52 bg-gradient-to-br from-primary to-black rounded-full flex justify-center items-center text-7xl font-bold text-white
                                            transition-all ease duration-500 backdrop-blur-sm '>
                                <div className='group-hover:invisible flex justify-center items-center text-8xl text-center transition-all ease duration-150'>{v.slice(0, 1)}</div>
                            </div>
                            <div className='top-full opacity-0 group-hover:top-0 group-hover:opacity-100 h-full w-full backdrop-blur-sm absolute flex justify-center items-center text-2xl transition-all ease-out duration-200 bg-white/25'>
                                <span className='text-center'>{v}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Corevalues;