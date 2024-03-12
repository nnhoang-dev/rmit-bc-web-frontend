import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Generation = () => {
    const dataExecutiveBoard: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        { fullName: 'Trần Phương Vy', role: 'President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FPH%C6%AF%C6%A0NG%20VY.jpg?alt=media&token=4b7713d5-eeaa-41de-bf97-f2b82d507b79', linkLinkedin: 'https://www.linkedin.com/in/tranphuongvy04/' },
        { fullName: 'Huỳnh Minh Thư', role: 'External Vice President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FMINH%20TH%C6%AF.jpg?alt=media&token=d140373b-ecf6-4ba9-891f-a4b106de1b62', linkLinkedin: 'https://www.linkedin.com/in/thu-minh-huynh/' },
        { fullName: 'Phạm Mai Hạnh Duy', role: 'Internal Vice President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FH%E1%BA%A0NH%20DUY.jpg?alt=media&token=d3294228-e7dd-430a-be02-d08cea292d88', linkLinkedin: 'https://www.linkedin.com/in/ph%E1%BA%A1m-mai-h%E1%BA%A1nh-duy/' },
        { fullName: 'Huỳnh Phan Đoan Trang', role: 'Chief Financial Officer', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2F%C4%90OAN%20TRANG%20(Laura).jpg?alt=media&token=e7a5f235-7b71-4547-96b6-72fa07bf2569', linkLinkedin: 'https://www.linkedin.com/in/lyrara/' },

    ];
    const dataManagementBroad: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        { fullName: 'Huỳnh Minh Huy', role: 'Research & Development Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FHUY_HUYNH.jpg?alt=media&token=7c637587-ccc1-4620-a0c8-fcf859e522e1', linkLinkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEM6aNwBZyyMzEca46RhK0zym3Bvu09T0Ok&keywords=huy%20huynh&origin=RICH_QUERY_SUGGESTION&position=2&searchId=af48336e-c1b3-40c0-a936-e5226d90bdbe&sid=C*O&spellCorrectionEnabled=false' },
        { fullName: 'Trần Thục Uyên', role: 'Human Resources Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FTH%E1%BB%A4C%20UY%C3%8AN.jpg?alt=media&token=0220da86-527b-46e5-9a2a-03156064640b', linkLinkedin: 'https://www.linkedin.com/in/uyen-tran-b0883a27a/' },
        { fullName: 'Tăng Duy Phát', role: 'External Relations Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FDUY%20PH%C3%81T.jpg?alt=media&token=78f688ce-a0ab-4000-b01b-18e1378ec637', linkLinkedin: 'https://www.linkedin.com/in/phat-tang/' },
        { fullName: 'Nguyễn Phương Uyên', role: 'Marketing Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FPH%C6%AF%C6%A0NG%20UY%C3%8AN.jpg?alt=media&token=87c39771-a355-4ff2-82c6-5ffff6ef742b', linkLinkedin: 'https://www.linkedin.com/in/uyen-nguyen-57b562265/' },
    ];

    return (
        <div className='flex flex-col items-center text-black px-2 py-20'>
            <div className='w-full'>
                <div className='text-center text-5xl font-black'>HUMAN OF BC</div>
                <div className='w-full text-2xl text-primary font-bold mt-10'>Generation 19</div>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex flex-col-reverse lg:flex-row justify-between -mx-1 md:-mx-2'>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12 px-1 md:px-2'>
                            {dataExecutiveBoard.map((v, i) => (
                                <Link href={v.linkLinkedin} target='_blank' key={i} className='mt-2 basis-1/2 sm:basis-3/12 group lg:even:mt-10 px-1 md:px-2 
                                                        md:mt-0 hover:scale-105 transition-all duration-200 ease'>
                                    <div className='overflow-hidden relative  bg-gray-400 '>
                                        <Image alt="Picture of the author"
                                            className=' w-full object-cover'
                                            width={500}
                                            height={500}
                                            loader={() => v.imgLink}
                                            src={'me.png'}
                                        />
                                        <div className=' -bottom-8 sm:-bottom-4 lg:-bottom-8 group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[10px] sm:text-[8px] leading-3 text-white'>
                                            <div className='font-bold'>{v.fullName}</div>
                                            <div className='leading-3' >{v.role}</div>
                                            <div className='mt-1 leading-3 invisible opacity-0 group-hover:visible group-hover:opacity-100  transition-all duration-200 ease' >{v.desc}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className='h-full basis-5/12 px-1 md:px-2'>
                            <div className='text-2xl sm:text-5xl font-bold text-primary mt-4'>EXECUTIVE BOARD </div>
                            <p className='text-justify mt-2'>The Executive Board, acting as the leaders of BC, decides long-term and short-term objectives for the club. The executive board, consisting of 1 president, followed by 2 vice presidents, and 1 CFO, takes responsibility for monitoring the club toward the set goals.</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col-reverse lg:flex-row-reverse justify-between -mx-1 md:-mx-2'>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12 px-1 md:px-2'>
                            {dataManagementBroad.map((v, i) => (
                                <div key={i} className='mt-2 basis-1/2 sm:basis-3/12 lg group lg:even:mt-10 px-1 md:px-2 
                                md:mt-0 hover:scale-105 transition-all duration-200 ease'>
                                    <Link href={v.linkLinkedin} className='' >
                                        <div className='overflow-hidden relative '>
                                            <Image alt="Picture of the author"
                                                className=' w-full object-cover'
                                                width={500}
                                                height={500}
                                                loader={() => v.imgLink}
                                                src={'me.png'}
                                            />
                                            <div className='-bottom-8 sm:-bottom-4 lg:-bottom-8 group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[10px] sm:text-[8px] leading-3 text-white'>
                                                <div className='font-bold '>{v.fullName}</div>
                                                <div className='leading-3' >{v.role}</div>
                                                <div className='mt-1 leading-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease' >{v.desc}</div>
                                            </div>
                                        </div>
                                    </Link >
                                </div>
                            ))}
                        </div>
                        <div className='h-full basis-5/12 px-1 md:px-2'>
                            <div className='text-2xl sm:text-5xl font-bold text-primary mt-4'>MANAGEMENT BOARD</div>
                            <p className=' mt-2 text-justify'>The Management Board, comprising four managers per department, is responsible for overseeing departmental operations each semester. They conduct quality control assessments, set departmental goals in line with official guidelines and the club's strategic plan, and maintain communication among department members.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

};

export default Generation;
