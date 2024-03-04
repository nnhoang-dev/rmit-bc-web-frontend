'use client';
import React, { useEffect, useState } from 'react';

const InforProject = (props: any) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(() => {
        var countDownDate = new Date("April 1, 2024 00:00:00").getTime();
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
        <div className='container mx-auto px-2'>

            <div className='w-full flex justify-center my-10'>
                <h2 className=' font-bold text-xl sm:text-4xl'>BCareer 2.0: Road to Management Trainee - Secrets to Success</h2>
                <div className='ml-2 flex justify-center items-center'>
                    <div className='px-4 py-2 bg-gray-400  font-bold text-white'>Past</div>
                </div>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row bg-gray-200 p-8 '>
                <div className='basis-7/12 my-5'>
                    <div className='flex items-center my-2'>
                        <div className='h-4 w-4 inline-block mr-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg></div>
                        <span className=''>23 Aug 2023</span>
                    </div>
                    <div className='flex items-center my-2'>
                        <div className='h-4 w-4 inline-block mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                        </div>
                        <span className=''>01:30 pm - 05:00 pm</span>
                    </div>
                    <div className='flex items-center my-2'>
                        <div className='h-4 w-4 inline-block mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                        </div>
                        <span className=''>01:30 pm - 05:00 pm</span>
                    </div>
                    <div className='flex items-center my-2'>
                        <div className='h-4 w-4 inline-block mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
                        </div>
                        <span className=''>01:30 pm - 05:00 pm asdjksal asjdklas; asjdkl;a asjdkl; qwuoppi ádioup</span>
                    </div>
                </div>
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


                    <div className='bg-primary rounded-full w-60 px-8 py-4 my-2 font-bold text-xl text-center text-white'>Register Now</div>
                </div>
            </div>

            <p>These are short, famous texts in English from classic sources like the Bible or Shakespeare. Some texts have word definitions and explanations to help you. Some of these texts are written in an old style of English. Try to understand them, because the English that we speak today is based on what our great, great, great, great grandparents spoke before! Of course, not all these texts were originally written in English. The Bible, for example, is a translation. But they are all well known in English today, and many of them express beautiful thoughts.</p>
        </div >

    );
};

export default InforProject;