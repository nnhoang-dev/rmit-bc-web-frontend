'use client';
import { event } from '@/lib/interface';
import React from 'react';

const IntroProject = (props: { project: event; }) => {



    return (
        <div className='container mx-auto px-2'>

            <div className='w-full flex justify-center my-10'>
                <h2 className=' font-bold text-xl sm:text-4xl'>{props.project.projectName}</h2>
                <div className='ml-2 flex justify-center items-center'>
                    <div className='px-4 py-2 bg-gray-400  font-bold text-white'>{props.project.status}</div>
                </div>
            </div>

            <div className='w-full flex flex-col-reverse md:flex-row bg-gray-200 px-8 py-4 '>
                <div className=''>
                    {props.project.date && (
                        <div className='flex items-center my-2'>
                            <div className='h-4 w-4 inline-block mr-4'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg></div>
                            <span className=''>{props.project.date}</span>
                        </div>
                    )}
                    {props.project.time && (
                        <div className='flex items-center my-2'>
                            <div className='h-4 w-4 inline-block mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                            </div>
                            <span className=''>{props.project.time}</span>
                        </div>
                    )}
                    {/* <div className='flex items-center my-2'>
                        <div className='h-4 w-4 inline-block mr-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" /></svg>
                        </div>
                        <span className=''></span>
                    </div> */}
                    {props.project.location && (
                        <div className='flex  my-2'>
                            <div className='inline-block mt-1 mr-4 '>
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" /></svg>
                            </div>
                            <span className=''>Location: {props.project.location}</span>
                        </div>
                    )}
                </div>

            </div>

            <p className='mt-5'>{props.project.introduction}</p>
        </div >

    );
};

export default IntroProject;