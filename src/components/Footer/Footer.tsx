'use client';

import Link from 'next/link';
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon } from '@/utils/svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className=''>
            <div className=' w-full mx-auto bg-gradient-to-t from-black  to-primary text-white text-base '>
                <div className='max-w-screen-xl mx-auto h-full  py-8'>
                    <div className='w-full mx-auto flex flex-col md:flex-row items-center justify-between '>
                        <div className="max-w-[400px] md:basis-6/12 px-4 flex flex-col text-center md:text-left justify-center items-center md:justify-normal md:items-start" >
                            <Link href='/' className='w-40 py-2'>
                                <Image alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%',
                                    }}
                                    loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/LogoBCMauTrang.png?alt=media&token=16ea3b56-88b5-4257-b8ec-38860ea96237'}
                                    src={'logo.png'}
                                />
                                {/* <span>Business Club</span> */}
                            </Link>
                            <div className="info">
                                <div className='font-extrabold  mb-1'>RMIT Vietnam Business Club - SGS</div>
                                <div>Founded in 2004, making us the oldest active academic club at RMIT with the vision of nurturing future business leaders.</div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:flex flex-col">
                            <Link href='/about' className='hover:scale-105 transition-all duration-200 ease py-2'>About Us</Link>
                            <Link href='/' className='hover:scale-105 transition-all duration-200 ease py-2'>Marketing Challengers</Link>
                            <Link href='/' className='hover:scale-105 transition-all duration-200 ease py-2'>The Logisticom</Link>
                            <Link href='/recruitment' className='hover:scale-105 transition-all duration-200 ease py-2'>Recruitment 2024</Link>
                            <Link href='/human-of-bc' className='hover:scale-105 transition-all duration-200 ease py-2'>Human of BC</Link>
                            <Link href='/our-projects' className='hover:scale-105 transition-all duration-200 ease py-2'>Our Projects</Link>
                        </div>
                        <div className='md:basis-2/12 lg:hidden'></div>
                        <div className="max-w-min md:basis-4/12  px-4 flex flex-col justify-center text-center md:text-left">
                            <div className='hidden md:block font-extrabold '>Contact Us</div>
                            <div className='py-2 mt-4 md:mt-0'>Email: businessclub.rmit@gmail.com</div>
                            <div className='flex items-center justify-around md:justify-start'>
                                <Link target='_blank' href='https://www.facebook.com/RMITBusinessClub' className='inline-block h-8 w-10 pr-2'>
                                    <FacebookIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='/' className='inline-block h-8 w-10 pr-1'>
                                    <InstagramIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='/' className='inline-block h-10 w-12 pr-1'>
                                    <LinkedinIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='/' className='inline-block h-8 w-8'>
                                    <TiktokIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;