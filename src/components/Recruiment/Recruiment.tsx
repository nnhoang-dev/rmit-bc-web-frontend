import React from 'react';

const Recruiment = () => {
    const recruiment = [
        {
            title: 'CV Submission',
            desc: 'Prepare CV according to our fortmat and submit within deadline',
            link: '',
        },
        {
            title: '1st Interview',
            desc: 'Attend 1st Interview with careful preparation',
            link: '',
        },
        {
            title: 'Probation Round',
            desc: 'Participate in our 3-month-period Probation Round with professional manner and structure',
            link: '',
        },
        {
            title: '2nd Interview',
            desc: 'Attend 2nd Interview to review the progress and reflect yourself',
            link: '',
        },
        {
            title: 'Onboarding',
            desc: 'Become an official member of our family ',
            link: '',
        },
    ];

    return (
        <div className='flex flex-col-reverse lg:flex-row'>
            <div className='flex-1 '>
                {recruiment.map((v, i) => (
                    <div key={i} className='group flex justify-between items-center h-32 mb-4 cursor-pointer'>
                        <div className='h-full text-white p-4 bg-gradient-to-r from-black to-primary flex-1'>
                            <div className='font-bold text-3xl'>{v.title}</div>
                            <div className='text-xl'>{v.desc}</div>
                        </div>
                        <div className='font-bold text-5xl text-primary rounded-full aspect-square h-3/5 
                        bg-gradient-to-br from-[#FF7E21] via-[#FFEBE0] to-white flex justify-center items-center ml-16 
                        group-hover:scale-125 transition-all ease duration-200'>{i + 1}</div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center lg:ml-24'>
                <div className='text-primary font-bold text-6xl'>Recruiment</div>
                <div className='bg-primary px-6 py-4  rounded-full font-bold text-xl text-white mt-8'>Job Description</div>
            </div>
        </div>
    );
};

export default Recruiment;