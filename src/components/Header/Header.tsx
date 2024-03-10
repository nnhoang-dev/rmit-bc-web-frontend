'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import '../../components/Header/header.css';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <header className='text-base relative'>

            <div className='w-full bg-primary h-20 border-solid text-white'>
                <div className='max-w-screen-xl mx-auto px-2 h-full flex justify-between items-center'>
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
                    <div className='h-10 w-10 cursor-pointer' onClick={() => { setNavbar(!navbar); document.documentElement.scrollTop = 0; }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                </div>
            </div>

            <div className={` w-full bg-primary/80 transition-all ease-in duration-500 fixed z-50 top-0   ${navbar ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <div className='w-full bg-primary h-20 border-solid text-white'>
                    <div className='max-w-screen-xl mx-auto px-2 h-full flex justify-between items-center'>
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
                        <div className='h-10 w-10 cursor-pointer' onClick={() => { setNavbar(!navbar); document.documentElement.scrollTop = 0; }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='max-w-screen-xl mx-auto px-2 text-white h-screen py-20 '>
                    <div className='w-full flex flex-col  ml-auto text-right  sm:h-full'>
                        <Link href='/' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>Home</div>
                        </Link>
                        <Link href='/about' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>About</div>
                        </Link>
                        <Link target='_blank' href='https://www.marketingchallengers.org/' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>Marketing Challengers</div>
                        </Link>
                        <Link target='_blank' href='thelogisticom.org' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>The Logisticom</div>
                        </Link>
                        <Link href='/recruiment' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>Recruitment</div>
                        </Link>
                        <Link href='/human-of-bc' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>Human Of BC</div>
                        </Link>
                        <Link href='/our-projects' >
                            <div onClick={() => setNavbar(!navbar)} className='css my-3 text-transparent hover:text-white font-bold text-3xl sm:text-5xl  transition-all ease duration-200 cursor-pointer'>Our Projects</div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className={`fixed bg-black/20 w-screen h-screen top-0 m-0 transition-all ease-in duration-500  ${navbar ? 'opacity-100' : 'opacity-100'}`}></div> */}
        </header >
    );
};

export default Header;;