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
        <div className='flex sm:flex-row flex-col'>
            <div className='basis-8/12'>
                {recruiment.map((v, i) => (
                    <div key={i} className='group flex justify-between items-center mb-4 cursor-pointer my-2 md:my-4 '>
                        <div className='basis-10/12 min-h-full text-white p-4 md:p-8 bg-gradient-to-r from-black to-primary'>
                            <div className='font-bold '>{v.title}</div>
                            <div className=''>{v.desc}</div>
                        </div>
                        <div className='basis-2/12 font-bold text text-primary py-1 md:px-2 flex justify-center items-center' >
                            <div className='aspect-square w-4/5 min-w-20 rounded-full
                            bg-gradient-to-br from-[#FF7E21] via-[#FFEBE0] to-white flex justify-center items-center 
                            scale-90 group-hover:scale-110 transition-all ease duration-200
                            text-xl lg:text-3xl xl:text-5xl'>{i + 1}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col justify-center items-center basis-4/12'>
                <div className='hidden text-primary font-bold'>Recruiment</div>
                <div className='bg-primary px-6 py-4 rounded-full font-bold  text-white mt-8 text-center'>Job Description</div>
            </div>
        </div>
    );
};

export default Recruiment;