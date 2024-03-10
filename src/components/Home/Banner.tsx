'use client';

import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='w-full mx-auto bg-gradient-to-t from-black to-primary text-white'>
            <Image alt="Picture of the author"
                className='w-full  object-cover'
                width={500}
                height={500}
                loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/%5BBC%5D%20Website%20Cover.png?alt=media&token=fc6c6e1d-ab37-45c5-85e8-1f9519477afe'}
                src={'me.png'}
            />
            {/* <video src=""></video> */}
            {/* <div className="container mx-auto bottom-40 left-0 right-0 text-center text-6xl font-extrabold absolute">NUTURE FUTURE BUSINESS LEADERS</div> */}
        </div>
    );
};

export default Banner;