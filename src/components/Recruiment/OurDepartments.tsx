import React from 'react';

const OurDepartments = () => {
    const departments = ['Marketing', 'Human Resources', 'External relations', 'Research and Development'];

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='font-extrabold text-7xl text-center text-primary my-20'>Our Departments</div>
            <div className='w-full'>
                {
                    departments.map((v, i) => (
                        <div key={i} className='h-28 w-full bg-gradient-to-r from-black to-primary mb-8 flex justify-center items-center
                                                        text-4xl text-white even:ml-auto cursor-pointer
                                                        shawdow-[10px 5px 5px red] shadow-[15px_15px_rgba(0,0,0,0.5)]
                                                        lg:w-3/5
                                                        '>
                            {v}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurDepartments;