import React from 'react';
import Image from 'next/image';
import Title from '../Title';
import Link from 'next/link';

const OutstandingLeader = () => {
    const dataOutstandingLeader: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        {
            fullName: 'Trần Gia Bảo',
            role: 'The Logisticom S7 Project Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FGIA_B%E1%BA%A2O.jpg?alt=media&token=dc1f8d9a-8587-4a70-aace-a57abdace075',
            linkLinkedin: 'https://www.linkedin.com/in/baotran202/'
        },
        {
            fullName: 'Ngô Thị Mai Hoa',
            role: 'Marketing Challengers S12 Project Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FMAI%20HOA.jpg?alt=media&token=e64b1769-63fe-4a4f-9f61-a6e43f0fa3fa',
            linkLinkedin: 'https://www.linkedin.com/in/ngothimaihoa1519/'
        },
        {
            fullName: 'Nguyễn Huỳnh Thảo Như ',
            role: 'BCareer 2.0 Project Leader ',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FTh%E1%BA%A3o%20Nh%C6%B0.jpeg?alt=media&token=9536c590-e9b6-43dd-b1d3-d621d66bf1c5',
            linkLinkedin: 'https://www.linkedin.com/in/nguyen-huynh-thao-nhu-nhtn/'
        },
        {
            fullName: 'Nguyễn Thị Thu Phương',
            role: 'RnD - Academic Team Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FThu%20Ph%C6%B0%C6%A1ng.JPG?alt=media&token=552fcce1-b656-4956-a001-fa167b136d4f',
            linkLinkedin: 'https://www.linkedin.com/in/phuongng-madeleine/',
        },
        {
            fullName: 'Nguyễn Yên Đan',
            role: 'BCareer Program Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FY%C3%AAn%20%C4%90an.jpg?alt=media&token=998d8777-ac36-4c01-8bbe-9bf2c7186b3c',
            linkLinkedin: 'https://www.linkedin.com/in/daisynguyen2210/',
        },
        {
            fullName: 'Phạm Thị Thanh Ngân',
            role: 'Research & Development Member',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/ngan-phammm/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwAR0qE80yEy84IlM4LfINELJkar0-S9OX1nqtIAU86eOqa3oVhYubUrJ6eNk',
        },
        {
            fullName: 'Nguyễn Thị Bích Ngọc',
            role: 'RnD - Project Evaluation Team Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FB%C3%ADch%20Ng%E1%BB%8Dc.jpg?alt=media&token=8a4d404b-7739-45b9-a240-21fb07a496ae',
            linkLinkedin: 'https://www.linkedin.com/in/ngoc-nguyen-b19720234/',
        },
        {
            fullName: 'Đỗ Hiền Vi',
            role: 'RnD - Academic Team Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FHi%E1%BB%81n%20Vi.jpg?alt=media&token=d96082eb-f5e0-43fc-a1bd-3291ae221103',
            linkLinkedin: 'https://www.linkedin.com/in/viviennedhv-a83859267/',
        },
        {
            fullName: 'Đỗ Phạm Ngọc Trân',
            role: 'BCareer 2.0 Program Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FNg%E1%BB%8Dc%20Tr%C3%A2n.jpeg?alt=media&token=1d65066a-f096-4f95-8168-b5dbccf46f2e',
            linkLinkedin: 'https://www.linkedin.com/in/dpngoctran/',
        },
        {
            fullName: 'Nguyễn Lê Tú Anh ',
            role: 'Marketing Challengers S12 Sponsor Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/nguyenletuanh/',
        },
        {
            fullName: 'Trần Nguyễn Bảo Như',
            role: 'MKT - Content Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FB%E1%BA%A3o%20Nh%C6%B0%20.jpg?alt=media&token=93338db6-b4cf-483e-8f3c-c2ed909d5aea',
            linkLinkedin: 'https://www.linkedin.com/in/trannguyenbaonhu/',
        },
        {
            fullName: 'Nguyễn Vũ Ánh Nguyệt',
            role: 'BCareer Marketing Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/kathnguyenn/',
        },
        {
            fullName: 'Lê Vũ Hoàng Uyên ',
            role: 'BCareer Operations Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FHo%C3%A0ng%20Uy%C3%AAn.jpg?alt=media&token=dec0d392-7645-4efe-aca3-5c319a33c52f',
            linkLinkedin: 'https://www.linkedin.com/in/uyen-le-b6920b252/',
        },
        {
            fullName: 'Ngô Quốc Cường',
            role: 'BCareer 2.0 Marketing Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FQu%E1%BB%91c%20C%C6%B0%E1%BB%9Dng.PNG?alt=media&token=e03e99a6-48c1-4a6d-9cf8-1b08818809e1',
            linkLinkedin: 'https://www.linkedin.com/in/cuong-ngo-a5091b218/',
        },
        {
            fullName: 'Phạm Ngọc Thiên',
            role: 'Marketing Challengers S12 Program Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/thien-ngoc-pham-168799222/',
        },
        {
            fullName: 'Nguyễn Thọ Tường Vy',
            role: 'The Logisticom S7 Marketing Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/nttv1106/',
        },
        {
            fullName: 'Phan Quỳnh Anh',
            role: 'Marketing Discussion 7.0 Project Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FQu%E1%BB%B3nh%20Anh.jpg?alt=media&token=dfbd89a7-9add-409f-938a-3168bb303d58',
            linkLinkedin: 'https://www.linkedin.com/in/quynh-anh-phan-64a80a219/',
        },
        {
            fullName: 'Trần Thị Thủy',
            role: 'Marketing Challengers S12 Marketing Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/thuy-tran-/',
        },
        {
            fullName: 'Nguyễn Tường Bách',
            role: 'Human Resources Member',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2FT%C6%B0%E1%BB%9Dng%20B%C3%A1ch.jpeg?alt=media&token=f9496893-3c60-4281-9e5f-8d2b29086202',
            linkLinkedin: '',
        },
        {
            fullName: 'Hoàng Nguyễn Gia Hân ',
            role: 'Marketing Challengers S12 Operations Leader',
            desc: 'Currently a student at RMIT University Vietnam',
            imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FOutstandingLeader%2Fanonymous.jpg?alt=media&token=f8b623e4-3be9-4a57-a08d-56c979c76665',
            linkLinkedin: 'https://www.linkedin.com/in/h%C3%A2n-ho%C3%A0ng/',
        },
    ];




    return (
        <div className='w-full bg-[#f1f0f0]'>
            <div className='w-full flex flex-col items-center text-black px-2 py-20'>
                <Title title='Outstanding Leaders' />
                <div className='w-full flex flex-col lg:flex-row  justify-between -mx-2 sm:-mx-4 '>
                    <div className='lg:hidden basis-3/12 px-2 mt-10 '>
                        <Image alt="Picture of the author"
                            className=' object-cover w-full'
                            width={500}
                            height={500}
                            loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/20240312_004753_0000.png?alt=media&token=acdd245b-6932-47b0-8ca8-7ad243082df9'}
                            src={'me.png'}
                        />
                    </div>
                    <div className='lg:basis-9/12 px-2 sm:px-2  mt-10'>
                        <div className='flex -mx-1 md:-mx-2 flex-wrap'>
                            {dataOutstandingLeader.map((v, i) => (
                                <Link href={v.linkLinkedin} target='_blank' key={i} className='h-[260px] w-[190px] group basis-1/2 md:basis-1/4 group  px-1 md:px-2 mb-2 md:mb-4 hover:scale-105 transition-all duration-200 ease'>
                                    <div className='overflow-hidden relative h-[260px] '>
                                        <Image alt="Picture of the author"
                                            className=' w-full object-cover'
                                            width={500}
                                            height={500}
                                            loader={() => v.imgLink}
                                            src={'me.png'}
                                        />
                                        <div className=' p-2  text-xs bg-white -bottom-4  group-hover:bottom-0 transition-all ease-out duration-200
                                            flex flex-col justify-start absolute h-24 w-full text-[9px] sm:text-[12px] sm:leading-[16px] '>
                                            <div className='font-bold'>{v.fullName}</div>
                                            <div>{v.role}</div>
                                            <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100
                                                            transition-all ease-out duration-200'>{v.desc}</div>
                                        </div>
                                        {/* <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                            <div className='font-bold text-xs'>{v.fullName}</div>
                                            <div className='leading-4' >{v.role}</div>
                                            <div className='leading-4' >{v.desc}</div>
                                        </div> */}
                                    </div>
                                </Link>
                            ))}

                            {/* <div className='basis-1/6 px-2'>
                                <Image alt="Picture of the author"
                                    className=' object-cover w-full'
                                    width={500}
                                    height={500}
                                    loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/once%20a%20BCer.jpg?alt=media&token=78951f5d-adf9-4eae-9571-4e3f6930fd6d'}
                                    src={'me.png'}
                                />
                            </div> */}
                        </div>
                    </div>

                    <div className='hidden lg:block basis-3/12 px-2 mt-10 '>
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