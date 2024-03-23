'use client';

import Link from 'next/link';
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon } from '@/utils/svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='text-xs sm:text-xs md:text-sm lg:text-base'>
            <div className=' w-full mx-auto bg-gradient-to-t from-black  to-primary text-white '>
                <div className='max-w-screen-xl mx-auto h-full  py-8'>
                    <div className='w-full mx-auto flex flex-col md:flex-row items-center justify-between '>
                        <div className="max-w-[400px] md:basis-6/12 px-4 flex flex-col text-center md:text-left justify-center items-center md:justify-normal md:items-start" >
                            <Link href='/' className='w-40 py-2'>
                                <Image alt="RMIT Vietnam Business Club"
                                    width={3478}
                                    height={1018}
                                    style={{
                                        objectFit: 'contain',
                                        height: '100%',
                                    }}
                                    loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/LogoBCMauTrang.png?alt=media&token=16ea3b56-88b5-4257-b8ec-38860ea96237'}
                                    src={'rmit-vietnam-business-club-logo.png'}
                                    loading='lazy'
                                />
                            </Link>
                            <div className="info">
                                <div className='font-extrabold  mb-1'>RMIT Vietnam Business Club - SGS</div>
                                <div>RMIT Vietnam Business Club founded in 2004, making us the oldest active academic club at RMIT with the vision of nurturing future business leaders.</div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:flex flex-col">
                            <Link href='/' className='hover:scale-105 transition-all duration-200 ease py-2'>Home</Link>
                            <Link href='/about' className='hover:scale-105 transition-all duration-200 ease py-2'>About Us</Link>
                            <Link target='_blank' href='https://www.marketingchallengers.org/' className='hover:scale-105 transition-all duration-200 ease py-2'>Marketing Challengers</Link>
                            <Link target='_blank' href='https://www.thelogisticom.org' className='hover:scale-105 transition-all duration-200 ease py-2'>The Logisticom</Link>
                            <Link href='/recruitment' className='hover:scale-105 transition-all duration-200 ease py-2'>Recruitment 2024</Link>
                            <Link href='/human-of-bc' className='hover:scale-105 transition-all duration-200 ease py-2'>Human of BC</Link>
                            <Link href='/our-projects' className='hover:scale-105 transition-all duration-200 ease py-2'>Our Projects</Link>
                        </div>
                        <div className='md:basis-2/12 lg:hidden'></div>
                        <div className="max-w-max md:basis-4/12  px-4 flex flex-col justify-center text-center md:text-left">
                            <div className='hidden md:block font-extrabold '>Contact Us</div>
                            <div className='py-2 mt-4 md:mt-0'>Email: businessclub.rmit@gmail.com</div>
                            <div className='flex items-center justify-around md:justify-start'>
                                <Link target='_blank' href='https://www.facebook.com/RMITBusinessClub' className='inline-block h-8 w-10 pr-2'>
                                    <FacebookIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='https://www.instagram.com/rmitbusinessclub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='inline-block h-8 w-10 pr-1'>
                                    <InstagramIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='https://www.linkedin.com/company/rmit-vietnam-business-club/mycompany/' className='inline-block h-10 w-12 pr-1'>
                                    <LinkedinIcon className={'scale-125 md:scale-100 md:hover:scale-110 transition-all ease duration-200'} />
                                </Link>
                                <Link target='_blank' href='https://www.tiktok.com/@rmitvnbusinessclubsgs?is_from_webapp=1&sender_device=pc' className='inline-block h-8 w-8'>
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