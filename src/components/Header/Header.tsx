import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='w-screen bg-primary h-20 border-b-[1px] border-solid text-white'>
                <div className='max-w-screen-xl mx-auto h-full flex justify-between items-center px-2'>
                    <Link href='/' >
                        <span>Business Club</span>
                    </Link>
                    <div className='h-full hidden lg:flex'>
                        <Link href='/' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>Home</Link>
                        <Link href='/about' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>About Us</Link>
                        <Link href='/' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>Marketing Challengers</Link>
                        <Link href='/' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>The Logisticom</Link>
                        <Link href='/recruiment' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>Recruitment 2024</Link>
                        <Link href='/human-of-bc' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>Human of BC</Link>
                        <Link href='/our-projects' className='mr-4 leading-7 h-full flex items-center transition-all ease duration-200 hover:scale-110 cursor-pointer'>Our Projects</Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;