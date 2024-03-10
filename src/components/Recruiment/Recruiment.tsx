'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Recruiment = () => {
    const recruiment = [
        {
            title: 'CV Submission',
            desc: 'Prepare CV according to our fortmat and submit within deadline',
            moreInfo: `<div>Deadline submission: 11:59 PM (21/3/2024)</div>`

        },
        {
            title: '1st Interview',
            desc: 'Attend 1st Interview with careful preparation',
            moreInfo: ` <div> The evaluation will be scored according to the rubric as well as candidate's performance</div><span>Those selected candidates after 1st interview will join Probation Round</span>`
        },
        {
            title: 'Probation Round',
            desc: 'Participate in our 3-month-period Probation Round with professional manner and structure',
            moreInfo: `<div>Our Probation Round mainly consists of 2 formats of Probation Round: an academic workshop or a fundraising booth</div>`
        },
        {
            title: '2nd Interview',
            desc: 'Attend 2nd Interview to review the progress and reflect yourself',
            moreInfo: `<div>Evaluate the growth, adaptability, and commitment of the Probationers</div><div>Finalize Probationer department choice</div>`
        },
    ];

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        var countDownDate = new Date("March 21, 2024 23:59:00").getTime();
        var x = setInterval(function () {

            var now = new Date().getTime();

            var distance = countDownDate - now;

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        window.addEventListener('beforeunload', (event: any) => {
            clearInterval(x);
        });
    }, []);

    return (
        <div className='flex md:flex-row flex-col'>
            <div className='basis-8/12'>
                {recruiment.map((v, i) => (
                    <div key={i} className='group flex justify-between items-center mb-4 cursor-pointer my-2 md:my-4 relative
                                            '>
                        <div className='basis-10/12 min-h-full  text-white p-4 md:p-8 bg-gradient-to-r from-black from-[1%] to-primary 
                                        relative overflow-hidden mr-2 sm:mr-0'>
                            <div className='font-bold '>{v.title}</div>
                            <div className=''>{v.desc}</div>
                            <div className='w-full h-full py-4 md:py-8 pr-8 md:pr-16 absolute top-40 group-hover:top-0 bg-gradient-to-r from-black to-primary
                                            text-xs sm:text-sm lg:text-base transition-all ease-out duration-200
                                            flex flex-col justify-center '>
                                <div dangerouslySetInnerHTML={{ __html: v.moreInfo }}></div>
                            </div>
                        </div>
                        <div className='basis-2/12 font-bold text text-primary py-1 md:px-2 flex justify-center items-center' >
                            <div className='aspect-square w-4/5 min-w-20 rounded-full
                            bg-gradient-to-br from-[#FF7E21] via-[#FFEBE0] to-white flex justify-center items-center 
                            scale-90 sm:group-hover:scale-110 group-hover:scale-[1.02] transition-all ease duration-200
                            text-3xl lg:text-4xl xl:text-5xl
                            '>{i + 1}</div>
                            <div className='w-2 bg-primary absolute top-0 -bottom-4 -z-50'></div>
                        </div>
                    </div>
                ))}
                <div className='group flex justify-between items-center mb-4 cursor-pointer my-2 md:my-4 relative
                                            '>
                    <div className='basis-10/12 min-h-full  text-white p-4 md:p-8 bg-gradient-to-r from-black from-[1%] to-primary 
                                        relative overflow-hidden mr-2 sm:mr-0'>
                        <div className='font-bold '>Onboarding</div>
                        <div className=''>Become an official member of our family</div>
                        <div className='w-full h-full py-4 md:py-8 pr-8 md:pr-16 absolute top-40 group-hover:top-0 bg-gradient-to-r from-black to-primary
                                            text-xs sm:text-sm lg:text-base transition-all ease-out duration-200
                                            flex flex-col justify-center '>
                            <div>
                                1-1 meeting with manager to update growth path
                            </div>
                            <div>
                                Bonding with department
                            </div>
                        </div>
                    </div>
                    <div className='basis-2/12 font-bold text text-primary py-1 md:px-2 flex justify-center items-center' >
                        <div className='aspect-square w-4/5 min-w-20 rounded-full
                            bg-gradient-to-br from-[#FF7E21] via-[#FFEBE0] to-white flex justify-center items-center 
                            scale-90 sm:group-hover:scale-110 group-hover:scale-[1.02] transition-all ease duration-200
                            text-3xl lg:text-4xl xl:text-5xl
                            '>5</div>
                        <div className='w-2 bg-primary absolute top-0 bottom-0 -z-50'></div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center basis-4/12 cursor-pointer'>
                <div className='w-full flex flex-col-reverse md:flex-row justify-center items-center '>
                    <div className='flex flex-col items-center basis-5/12 my-5'>
                        <div className='flex -mx-1 sm:-mx-2'>
                            <div className="basis-1/4 flex flex-col items-center px-1 sm:px-2 ">
                                <div className=" bg-gray-300 flex flex-col items-center justify-center rounded-lg  h-24 w-20  text-2xl md:text-4xl ">
                                    <div className="text-3xl  text-primary z-10 font-bold md:text-5xl ">
                                        {days}
                                    </div>
                                </div>
                                <p className="text-base mt-3 font-semibold text-primary md:text-xl ">
                                    {'Days'}
                                </p>
                            </div>
                            <div className="basis-1/4 flex flex-col items-center px-1 sm:px-2 ">
                                <div className=" bg-gray-300 flex flex-col items-center justify-center rounded-lg  h-24 w-20  text-2xl md:text-4xl ">
                                    <div className="text-3xl  text-primary z-10 font-bold md:text-5xl ">
                                        {hours}
                                    </div>
                                </div>
                                <p className="text-base mt-3 font-semibold text-primary md:text-xl ">
                                    {'Hours'}
                                </p>
                            </div>
                            <div className="basis-1/4 flex flex-col items-center px-1 sm:px-2 ">
                                <div className=" bg-gray-300 flex flex-col items-center justify-center rounded-lg  h-24 w-20  text-2xl md:text-4xl ">
                                    <div className="text-3xl  text-primary z-10 font-bold md:text-5xl ">
                                        {minutes}
                                    </div>
                                </div>
                                <p className="text-base mt-3 font-semibold text-primary md:text-xl ">
                                    {'Minutes'}
                                </p>
                            </div>
                            <div className="basis-1/4 flex flex-col items-center px-1 sm:px-2 ">
                                <div className=" bg-gray-300 flex flex-col items-center justify-center rounded-lg  h-24 w-20  text-2xl md:text-4xl ">
                                    <div className="text-3xl  text-primary z-10 font-bold md:text-5xl ">
                                        {seconds}
                                    </div>
                                </div>
                                <p className="text-base mt-3 font-semibold text-primary md:text-xl ">
                                    {'Seconds'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-primary font-bold text-3xl md:text-5xl'>Recruitment</div>
                <Link target='_blank' href='https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=c9a559d2-7aab-4f13-a6ed-e7e9c52aec87&redirect_uri=https%3A%2F%2Fforms.office.com%2Flanding&state=eyJ2ZXJzaW9uIjoxLCJkYXRhIjp7IklkZW50aXR5UHJvdmlkZXIiOiJBWmc4Q2lMQzg2THBYRy1VWG0wS3dLSjNfQnZRWjdDZEdNT0RpUTVkZWhwWlBpYlRaN240WlExZ09mcmpnS0RvMm5yandEaXk3dWlpM0pUMmJ1RElSUDgiLCIucmVkaXJlY3QiOiJodHRwczovL2Zvcm1zLm9mZmljZS5jb20vcGFnZXMvcmVzcG9uc2VwYWdlLmFzcHg_aWQ9Y1RZeTBiN05GMFMwMUwyeVMxRXhhMzc4MGNfMnBHZElzTjZLOS1iOXN2eFVPVmxRUWpBNU5qTlhRbGhXUmxkR05GbEJRVk0xTkU4d1dTNHUmZmJjbGlkPUl3QVIxQjc3Z0M3dDlPZC1wZlpyZ29uTmpnZW43MVV2VTBnaHU2MXY5N3Z6cDhHSVp2S182aE13VFdjZW8mc2lkPWY2OWU2YjExLTdlOGItNDhhMC1hYTAzLTA4N2NhZTAyMmI2MSIsIi54c3JmIjoiQVNwb1RXTDY0cEpESlJNMEQ1Rkdyb1NBX1VUSlphU1oxd24xSUFBQ3pwdUpZdjY4RS0wMGtob1Z4aDVTZzdHVnNLNGxialByYTc2WkFFblBINzZGNVZqMHBHc2JCZktZS2RZclVHTDJhZW52Z0NuZXRWY3RMdHhveFVmUlQtMVFUQSIsIk9wZW5JZENvbm5lY3QuQ29kZS5SZWRpcmVjdFVyaSI6IkFYTzRoVmRlaVByRHczX3pTS0p6MmR1Ym1HUlE5cldSemU1eVBnRlNzY1hGOG9OSjh2V200S2htaDZTbkZad3J3V1lwQ0pMN0pWc2xobkh2cE55R3duYjQySzVpZU85eXllb2ZTVHFxcW9HelVLWEhYRjJkTDhGT0l6MjV0WG1qb0EifX0&response_type=code%20id_token&scope=openid%20profile&response_mode=form_post&nonce=638456412911035151.MzgyZGEyZDktMzViNi00NmQ1LWI5MzYtMjMzMGI2MTkzZTdlYTQwMzNkYmYtMTY1ZC00MjY0LTg3OGYtZTk3MGYyYjY1YjRi&msafed=0&x-client-SKU=ID_NET8_0&x-client-ver=7.2.0.0' className='bg-primary px-6 py-4 rounded-full font-bold  text-white mt-2 md:mt-8 text-center hover:bg-gradient-to-br hover:from-[#FF7E21] hover:via-[#FFEBE0] hover:to-white hover:text-primary transition-all duration-200 ease'>Apply now</Link>
            </div>
        </div>
    );
};

export default Recruiment;