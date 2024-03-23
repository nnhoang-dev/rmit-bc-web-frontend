'use client';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='w-full mx-auto bg-gradient-to-t from-black to-primary text-white'>
            <Image alt="rmit-business-club"
                className='w-full  object-cover'
                width={6000}
                height={3375}
                loading='lazy'
                loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/%5BBC%5D%20Website%20Cover.png?alt=media&token=fc6c6e1d-ab37-45c5-85e8-1f9519477afe'}
                src={'me.png'}
            />
        </div>
    );
};

export default Banner;