import Link from 'next/link';
import React from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon } from '@/utils/svg';

const Footer = () => {
    return (
        <footer>
            <div className='w-full min-h-96 bg-gradient-to-t from-black to-primary text-white'>
                <div className='max-w-screen-xl mx-auto h-full flex flex-col justify-between items-center py-8 px-2
                                lg:flex-row'>
                    <div className="w-4/12" >
                        <div className='pb-4'>Business Club</div>
                        <div className="info">
                            <div className='font-extrabold text-2xl mb-1'>RMIT Vietnam Business Club - SGS</div>
                            <div>RMIT Vietnam Business Club - SGS founded in 2004, making us the oldest active academic club at RMIT with the vision of nurturing future business leaders.</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Link href='/' className='py-2'>About Us</Link>
                        <Link href='/' className='py-2'>Marketing Challengers</Link>
                        <Link href='/' className='py-2'>The Logisticom</Link>
                        <Link href='/' className='py-2'>Recruitment 2024</Link>
                        <Link href='/' className='py-2'>Human of BC</Link>
                        <Link href='/' className='py-2'>Our Projects</Link>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className='font-extrabold text-2xl'>Contact Us</div>
                        <div className='py-2'>Email: businessclub.rmit@gmail.com</div>
                        <div className='flex items-center'>
                            <Link href='https://www.facebook.com/RMITBusinessClub' className='inline-block h-8 w-10 pr-2'>
                                <FacebookIcon className={'hover:scale-110 transition-all ease duration-200'} />
                            </Link>
                            <Link href='/' className='inline-block h-8 w-10 pr-1'>
                                <InstagramIcon className={'hover:scale-110 transition-all ease duration-200'} />
                            </Link>
                            <Link href='/' className='inline-block h-10 w-12 pr-1'>
                                <LinkedinIcon className={'hover:scale-110 transition-all ease duration-200'} />
                            </Link>
                            <Link href='/' className='inline-block h-8 w-8'>
                                <TiktokIcon className={'hover:scale-110 transition-all ease duration-200'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;