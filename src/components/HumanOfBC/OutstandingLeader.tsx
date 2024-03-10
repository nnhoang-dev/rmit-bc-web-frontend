import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Link from 'next/link';

const OutstandingLeader = () => {
    const dataOutstandingLeader: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        { fullName: 'Trần Gia Bảo', role: 'The Logisticom S7 Project Leader', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FGIA%20B%E1%BA%A2O.jpg?alt=media&token=2c70a4e1-ac92-4199-9846-dd58c92b1173', linkLinkedin: 'https://www.linkedin.com/in/baotran202/' },
        { fullName: 'Ngô Thị Mai Hoa', role: 'Marketing Challengers S12 Project Leader', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FMAI%20HOA.jpg?alt=media&token=106f609f-4c2c-422b-87b8-027f0c671ef8', linkLinkedin: 'https://www.linkedin.com/in/ngothimaihoa1519/' },
        { fullName: 'Nguyễn Huỳnh Thảo Như ', role: 'BCareer 2.0 Project Leader ', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FTh%E1%BA%A3o%20Nh%C6%B0.jpeg?alt=media&token=ec534af1-9d92-4f43-8933-4d022723f77b', linkLinkedin: 'https://www.linkedin.com/in/nguyen-huynh-thao-nhu-nhtn/' },
    ];



    return (
        <div className='w-full bg-[#f1f0f0]'>
            <div className='max-w-screen-xl mx-auto w-full flex flex-col items-center text-black px-2 py-20'>
                <Title title='Outstanding Leader' />
                <div className='w-full flex flex-col-reverse lg:flex-row justify-between'>
                    <div className='basis-9/12 px-2 md:px-0'>
                        <div className='flex -mx-1 md:-mx-2 mt-10 flex-wrap'>
                            {dataOutstandingLeader.map((v, i) => (
                                <div key={i} className=' basis-1/2 sm:basis-4/12 group  px-1 md:px-2 
                                                        md:mt-0'>
                                    <div className='overflow-hidden relative  bg-gray-400 '>
                                        <Link href={v.linkLinkedin} className='' >
                                            <Image alt="Picture of the author"
                                                className='lg:min-h-[300px] md:min-h-[374px] w-full object-cover'
                                                width={500}
                                                height={500}
                                                loader={() => v.imgLink}
                                                src={'me.png'}
                                            />
                                        </Link>
                                        <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                            <div className='font-bold text-xs'>{v.fullName}</div>
                                            <div className='leading-4' >{v.role}</div>
                                            <div className='leading-4' >{v.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='basis-3/12 mt-10'>
                        <Image alt="Picture of the author"
                            className=' object-cover w-full'
                            width={500}
                            height={500}
                            loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/once%20a%20BCer.jpg?alt=media&token=78951f5d-adf9-4eae-9571-4e3f6930fd6d'}
                            src={'me.png'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutstandingLeader;