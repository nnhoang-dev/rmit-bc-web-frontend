import React from 'react';
import Title from '../Title';

const OurDepartments = () => {
    const departments = ['Marketing', 'Human Resources', 'External relations', 'Research and Development'];

    return (
        <div className='w-full flex flex-col justify-center items-center mt-10'>
            <Title title="Our Departments" />

            <div className='w-full mt-10'>
                {
                    departments.map((v, i) => (
                        <div key={i} className='flex'>
                            {i % 2 != 0 && (<div className='basis-5/12'></div>)}
                            <div className='h-28 basis-7/12 bg-gradient-to-r from-black to-primary mb-8 flex justify-center items-center
                                                        text-white cursor-pointer 
                                                        shadow-[15px_15px_rgba(0,0,0,0.5)]
                                                        lg:w-3/5 sm:text-2xl text-center p-4
                                                        '>
                                {v}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurDepartments;