'use client';
import React from 'react';
import Title from '../Title';
import Image from 'next/image';
import { partner } from '@/lib/interface';

const OurPartner = () => {
    const dataPartner: partner[] = [
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F1.%20SPVB%20Logo.png?alt=media&token=52317b5d-d4f4-4328-82a7-bd88f0f1a567',
            priority: 1
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F2.%20NESTLE_.png?alt=media&token=6290d88d-c7fe-4f6a-883b-7d5b36e7252b',
            priority: 3
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F3.%20CocaCola.png?alt=media&token=03246281-ec3b-4d5f-90f7-a69c4d3f6e1b',
            priority: 5
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 7
        },
        {
            alt: '',
            link: '',
            priority: 9
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline2%2F3.%20EQVN.jpg?alt=media&token=389c06fa-4335-4cda-ab53-8fc8d75f19ed',
            priority: 11
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline2%2F5.%20Fonos.jpg?alt=media&token=462d3c49-5295-430a-8f99-daf0fb57adb0',
            priority: 13
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline2%2F7.%20Decathlon.jpg?alt=media&token=762ca4aa-3dd6-4844-a015-8f130c409dc8',
            priority: 15
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline3%2F1.%20Mercedes-Benz-Logo.png?alt=media&token=b9fe91a0-8ae4-4e6f-b7e5-bc4eec0faeac',
            priority: 17
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline3%2F3.%20Peugeot.png?alt=media&token=68fcdfbf-3bd8-4951-b104-7dcaaaa6f3db',
            priority: 19
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline3%2F5.%20_Bloomer.jpg?alt=media&token=cee397ca-06d4-48be-a7c0-35cbeb3ba38c',
            priority: 21
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 23
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 25
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 27
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 29
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 31
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F5.%20P%26G_Logo.png?alt=media&token=8f4af5d9-6e9e-4ead-b073-2c448008864b',
            priority: 2
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F6.%20DNA.png?alt=media&token=c05a3417-0ea3-4f41-a508-b4defee89fd3',
            priority: 4
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F7.%20Zee.png?alt=media&token=020881f3-19f4-4ab1-a62d-604c5a2c0bec',
            priority: 6
        },
        {
            alt: '',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
            priority: 8
        },

    ].sort((a, b) => a.priority - b.priority);

    return (
        <div className='flex flex-col justify-center items-center pb-10 '>
            <Title title="Our Partners" />

            <p className='mt-4'>With 19 years of experience, it has been our profound honour to have worked with pretigious partners. We are motivated to strengthen our competency and making impacts. If you are interested to be our partner, please contact us through: businessclub.rmit@gmail.com</p>
            <div className='w-full mt-4 overflow-scroll'>
                <div className='grid grid-flow-col auto-cols-[25%]'>
                    {
                        dataPartner.filter((v) => v.priority % 2).map((v, i) => (
                            <div key={i} className='px-1 flex flex-col justify-center items-center my-4'>
                                <Image alt={v.alt}
                                    className='object-contain h-48'
                                    width={500}
                                    height={500}
                                    loader={() => v.link}
                                    src={'me.png'}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className='grid grid-flow-col auto-cols-[25%]'>
                    {
                        dataPartner.filter((v) => !(v.priority % 2)).map((v, i) => (
                            <div key={i} className='px-1 flex flex-col justify-center items-center my-4'>
                                <Image alt={v.alt}
                                    className='object-contain h-48'
                                    width={500}
                                    height={500}
                                    loader={() => v.link}
                                    src={'me.png'}
                                />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default OurPartner;
