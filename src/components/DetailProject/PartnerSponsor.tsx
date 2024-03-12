import React from 'react';
import { event } from '@/lib/interface';
import Image from 'next/image';

const PartnerSponsor = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <div className='text-primary text-3xl font-bold mt-10 text-center'>Partner - Sponsor</div>
            <div className='mt-4 mb-10'>
                <Image alt="Picture of the author"
                    className=' md:w-3/4 object-cover'
                    width={500}
                    height={500}
                    loader={() => (props.project.partner)}
                    src={'me.png'}
                />
            </div>
        </div>
    );
};

export default PartnerSponsor;