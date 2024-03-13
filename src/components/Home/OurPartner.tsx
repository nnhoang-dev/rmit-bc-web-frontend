'use client';
import React, { useState } from 'react';
import Title from '../Title';
import Image from 'next/image';
import { partner } from '@/lib/interface';

const OurPartner = () => {
    const allPartner: partner[] = [
        {
            alt: 'Suntory Pepsico',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F1.%20SPVB%20Logo.png?alt=media&token=52317b5d-d4f4-4328-82a7-bd88f0f1a567',
        },
        {
            alt: 'Nestle',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F2.%20NESTLE_.png?alt=media&token=6290d88d-c7fe-4f6a-883b-7d5b36e7252b',
        },
        {
            alt: 'Cocacola',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F3.%20CocaCola.png?alt=media&token=03246281-ec3b-4d5f-90f7-a69c4d3f6e1b',
        },
        {
            alt: 'Wisdom',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline1%2F4.%20Wisdom.png?alt=media&token=10d3d73a-1850-4b17-8e8a-019cb3877c20',
        },
        {
            alt: 'P&G',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline1%2F5.%20P%26G_Logo.png?alt=media&token=ede9d55b-8ca4-49af-8d40-b2e0aa72f4ca',
        },
        {
            alt: 'DNA',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline1%2F6.%20DNA.png?alt=media&token=4ccb436e-47b4-4eea-a188-d786306b7293',
        },
        {
            alt: 'Zee',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline1%2F7.%20Zee.png?alt=media&token=43d5d386-9f19-4d8d-96f7-edc55f953c02',
        },
        {
            alt: 'Buzzmetrics',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline1%2F7.%20Zee.png?alt=media&token=43d5d386-9f19-4d8d-96f7-edc55f953c02',
        },
        {
            alt: 'Giao Hang Nhanh',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F1.%20GHN.png?alt=media&token=5df28f40-53f6-405c-a2e9-ddd44da1a0dc',
        },
        {
            alt: 'Uncle Bills',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F2.%20Uncle%20Bills.jpg?alt=media&token=1adf4adf-30c9-4c0c-adee-9c63a9a40841',
        },
        {
            alt: 'EQVN',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F3.%20EQVN.png?alt=media&token=6b79d56d-30ce-40fc-a60b-4f39a1ed314e',
        },
        {
            alt: 'MOT',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F4.%20MOT%20png.png?alt=media&token=504ef435-b2cb-4417-9917-eed8ff7b8c8b',
        },
        {
            alt: 'Fonos',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline2%2F5.%20Fonos.jpg?alt=media&token=462d3c49-5295-430a-8f99-daf0fb57adb0',
        },
        {
            alt: 'VILAS',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F6.%20VILAS%20Logo.png?alt=media&token=97153be2-458b-429b-9eac-cf6897d3c31a',
        },
        {
            alt: 'Decathlon',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline2%2F7.%20Decathlon.jpg?alt=media&token=762ca4aa-3dd6-4844-a015-8f130c409dc8',
        },
        {
            alt: 'Vietjet',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline2%2F8.%20Vietjet.png?alt=media&token=e96c7ea9-4c62-4a87-9a0a-1fb2d6aa3f5a',
        },
        {
            alt: 'Mercedes-Benz',
            link: 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Sponsor%2Fline3%2F1.%20Mercedes-Benz-Logo.png?alt=media&token=b9fe91a0-8ae4-4e6f-b7e5-bc4eec0faeac',
        },
        {
            alt: 'Toyota',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F2.%20toyota.png?alt=media&token=b74d9c5b-7b3f-486c-8f77-bdbabfae2eaa',
        },
        {
            alt: 'Peugeot',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F3.%20Peugeot.png?alt=media&token=36bdd8d0-e5b2-4568-af7d-14f4dce9a9b5',
        },
        {
            alt: 'Levi\'s',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F4.%20Levi_s.png?alt=media&token=3faea34c-f17c-4717-8de0-b7f55550e6c0',
        },
        {
            alt: 'Bloomer',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F5.%20_Bloomer.jpg?alt=media&token=fd651ffb-20a0-4ba4-a255-eb54d11f0be9',
        },
        {
            alt: 'Tiki',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F6.%20Tiki.png?alt=media&token=93f236eb-d459-4661-a685-3248a0353fd1',
        },
        {
            alt: 'HP',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F7.%20HP.png?alt=media&token=25928285-48a1-4c81-8a9a-20c439345419',
        },
        {
            alt: 'Clinique',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline3%2F8.%20Clinique.png?alt=media&token=06ef0798-a6cb-49c9-9b76-02ceef0968a8',
        },
        {
            alt: 'TCS',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F1.%20TCS_.png?alt=media&token=df0a4b6c-7857-4994-9dd4-daff3fa22e15',
        },
        {
            alt: 'ERX',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F2.%20ERX_Logo.jpg?alt=media&token=dc04dd33-27c6-4bd8-89a3-b1293ea92fd3',
        },
        {
            alt: 'YOKOGAWA',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F3.%20YVS.png?alt=media&token=a12abb27-05e0-42ea-a975-80f978cb982d',
        },
        {
            alt: 'TruongPhat',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F4.%20Tr%C6%B0%E1%BB%9Dng%20Ph%C3%A1t%20.jpeg?alt=media&token=9c72724a-14e3-4dcd-9881-88e3c96ddb38',
        },
        {
            alt: 'GreenSpeed',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F5.%20GREEN%20SPEED.png?alt=media&token=e2b07daa-36c6-4cfe-86dc-a85b086b058d',
        },
        {
            alt: 'LeongLee',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F6.%20Leong%20Lee%20trademark.png?alt=media&token=93b59081-5c8f-4158-ada4-f2136d042cca',
        },
        {
            alt: 'CMACGM',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F7.%20CMACGM.png?alt=media&token=79474a82-dc61-4e17-aa55-fa6718cac2a5',
        },
        {
            alt: 'Faire',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline4%2F8.%20Faire.png?alt=media&token=f772286e-ef8d-45c1-8cfe-93798a529a5a',
        },
        {
            alt: 'Koykeya',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline5%2F1.%20Koikeya.jpg?alt=media&token=a4140d40-9a16-4649-8a47-8eab7269942b',
        },
        {
            alt: 'SC',
            link: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Sponsor%2Fline5%2F2.%20SC%20Logo_.png?alt=media&token=8c0255bf-0833-487f-9428-8035ee1d23a0',
        },

    ];

    const numberOfPages = Math.floor((allPartner.length - 1) / 8) + 1;
    const [currentPage, setCurrentPage] = useState(1);

    const renderPartner = () => {
        let element = [];
        for (let i = (currentPage - 1) * 8; i < currentPage * 8 && i < allPartner.length; i++) {
            element.push(<div key={i} className='px-1 sm:px-4 lg:px-8 flex flex-col justify-center items-center my-2 sm:my-4'>
                <Image alt={'Picture of the partner'}
                    className='object-contain sm:h-28 md:h-32'
                    width={500}
                    height={500}
                    loader={() => allPartner[i].link}
                    src={'partner'}
                />
            </div>);

        }
        return element;
    };

    return (
        <div className='flex flex-col justify-center items-center pb-10 '>
            <Title title="Our Partners" />

            <p className='mt-4'>With 19 years of experience, it has been our profound honour to have worked with pretigious partners. We are motivated to strengthen our competency and making impacts. If you are interested to be our partner, please contact us through: businessclub.rmit@gmail.com</p>
            <div className='w-full mt-4 flex'>
                <div className='cursor-pointer  flex justify-center items-center rotate-180'
                    onClick={() => { (currentPage != 1) ? setCurrentPage(currentPage - 1) : setCurrentPage(numberOfPages); }}
                >
                    <div className='w-12 aspect-square rounded-full text-center justify-center items-center flex
                                    transition-all duration-200 ease hover:bg-gray-100 '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                </div>
                <div className=' basis-10/12 grow grid grid-flow-col auto-cols-[25%] grid-rows-2'>
                    {renderPartner()}
                </div>
                <div className='cursor-pointer  flex justify-center items-center'
                    onClick={() => { (currentPage != numberOfPages) ? setCurrentPage(currentPage + 1) : setCurrentPage(1); }}
                >
                    <div className='w-12 aspect-square rounded-full text-center justify-center items-center flex
                                    transition-all duration-200 ease hover:bg-gray-100 '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path fill="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                </div>
                {/* <div className='h-14 w-14 rounded-full bg-slate-300 text-center justify-center items-center flex'>
                        <div>B</div>
                    </div> */}
            </div>
            {numberOfPages > 1 && (
                <div className='cursor-pointer -mx-2 flex'>
                    {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((i) => (
                        <div key={i} className={`mx-1 w-2 sm:w-4 aspect-square rounded-full  transition-all duration-200 ease  ${currentPage == i ? 'bg-primary hover:opacity-80' : 'bg-gray-200'}`} onClick={() => setCurrentPage(i)}></div>
                    ))}
                </div>
            )
            }
        </div>
    );
};

export default OurPartner;
