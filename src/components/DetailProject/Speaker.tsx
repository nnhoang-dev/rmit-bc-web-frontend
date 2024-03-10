import React from 'react';
import Image from 'next/image';
import { event } from '@/lib/interface';

const Speaker = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <div className='text-primary text-3xl font-bold mt-10 text-center'>Speaker </div>
            <div className='w-full grid grid-flow-col auto-cols-[50%] sm:auto-cols-[33%] lg:auto-cols-[25%] overflow-x-scroll mt-10'>
                {
                    props.project.speakers.map((v, i) => (
                        <div key={i} className='px-1 sm:px-4'>
                            <Image alt="Picture of the author"
                                className='w-full aspect-square rounded-full object-cover'
                                width={500}
                                height={500}
                                loader={() => (v.imgLink)}
                                src={'me.png'}
                            />
                            <div className='text-sm sm:text-lg my-2 w-full text-center'>{v.name}</div>
                            <p className='text-[10px] sm:text-base'>{v.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Speaker;