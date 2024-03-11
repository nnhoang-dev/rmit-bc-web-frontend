import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Generation = () => {
    const dataExecutiveBoard: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        { fullName: 'Trần Phương Vy', role: 'President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FPH%C6%AF%C6%A0NG%20VY.jpg?alt=media&token=4fda8dc2-4bdf-4cc1-bc6e-105056a18cc1', linkLinkedin: 'https://www.linkedin.com/in/tranphuongvy04/' },
        { fullName: 'Huỳnh Minh Thư', role: 'External Vice President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FMINH%20TH%C6%AF.jpg?alt=media&token=49c36903-74e6-4632-ac0c-a3cdf923fb88', linkLinkedin: 'https://www.linkedin.com/in/thu-minh-huynh/' },
        { fullName: 'Phạm Mai Hạnh Duy', role: 'Internal Vice President', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FH%E1%BA%A0NH%20DUY.jpg?alt=media&token=7f265344-cb06-4c4e-859f-3cd3dcfeae27', linkLinkedin: 'https://www.linkedin.com/in/ph%E1%BA%A1m-mai-h%E1%BA%A1nh-duy/' },
        { fullName: 'Huỳnh Phan Đoan Trang', role: 'Chief Financial Officer', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2F%C4%90OAN%20TRANG%20(Laura).jpg?alt=media&token=73a11e36-224a-4581-a8f9-9237233c1106', linkLinkedin: 'https://www.linkedin.com/in/lyrara/' },

    ];
    const dataManagementBroad: { fullName: string, role: string, desc: string, imgLink: string, linkLinkedin: string; }[] = [
        { fullName: 'Huỳnh Minh Huy', role: 'Research & Development Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FHUY%20HUYNH.jpg?alt=media&token=8012824e-ddd7-48a7-af1d-fb0b857843b1', linkLinkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEM6aNwBZyyMzEca46RhK0zym3Bvu09T0Ok&keywords=huy%20huynh&origin=RICH_QUERY_SUGGESTION&position=2&searchId=af48336e-c1b3-40c0-a936-e5226d90bdbe&sid=C*O&spellCorrectionEnabled=false' },
        { fullName: 'Trần Thục Uyên', role: 'Human Resources Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FTH%E1%BB%A4C%20UY%C3%8AN.jpg?alt=media&token=1b8fc70b-1093-4e22-9e41-0972c466f408', linkLinkedin: 'https://www.linkedin.com/in/uyen-tran-b0883a27a/' },
        { fullName: 'Tăng Duy Phát', role: 'External Relations Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FDUY%20PH%C3%81T.jpg?alt=media&token=34d31c71-474b-43c1-84c7-0ed9d5795f17', linkLinkedin: 'https://www.linkedin.com/in/phat-tang/' },
        { fullName: 'Nguyễn Phương Uyên', role: 'Marketing Manager', desc: 'Currently a student at RMIT University Vietnam', imgLink: 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/HumanOfBC%2FEBMB%2FPH%C6%AF%C6%A0NG%20UY%C3%8AN.jpg?alt=media&token=8aa76cc2-1aea-456e-b400-8ca28b481366', linkLinkedin: 'https://www.linkedin.com/in/uyen-nguyen-57b562265/' },
    ];

    return (
        <div className='max-w-screen-xl mx-auto flex flex-col items-center text-black px-2 py-20'>
            <div className='w-full'>
                <div className='text-center text-4xl font-black'>HUMAN OF BC</div>
                <div className='w-full text-2xl text-primary font-bold mt-10'>Generation 19</div>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex flex-col-reverse lg:flex-row justify-between '>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12'>
                            {dataExecutiveBoard.map((v, i) => (
                                <Link href={v.linkLinkedin} target='_blank' key={i} className='mt-2 basis-1/2 sm:basis-3/12 group lg:even:mt-10 px-1 md:px-2 
                                                        md:mt-0 hover:scale-105 transition-all duration-200 ease'>
                                    <div className='overflow-hidden relative  bg-gray-400 '>
                                        <Image alt="Picture of the author"
                                            className='lg:min-h-[300px] md:min-h-[374px] w-full object-cover'
                                            width={500}
                                            height={500}
                                            loader={() => v.imgLink}
                                            src={'me.png'}
                                        />
                                        <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                            <div className='font-bold text-xs'>{v.fullName}</div>
                                            <div className='leading-4' >{v.role}</div>
                                            <div className='leading-4' >{v.desc}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className='h-full basis-5/12'>
                            <div className='text-2xl font-bold text-primary mt-4'>EXECUTIVE BOARD GENERATION 19</div>
                            <p className='text-justify mt-2'>The executive board, acting as the leaders of BC, decides long-term and short-term objectives for the club. The executive board, consisting of 1 president, followed by 2 vice presidents, and 1 CFO, takes responsibility for monitoring the club toward the set goals.</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-col-reverse lg:flex-row-reverse justify-between '>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12'>
                            {dataManagementBroad.map((v, i) => (
                                <div key={i} className='mt-2 basis-1/2 sm:basis-3/12 lg group lg:even:mt-10 px-1 md:px-2 
                                md:mt-0 hover:scale-105 transition-all duration-200 ease'>
                                    <Link href={v.linkLinkedin} className='' >
                                        <div className='overflow-hidden relative  bg-gray-400 '>
                                            <Image alt="Picture of the author"
                                                className='lg:min-h-[300px] md:min-h-[374px] w-full object-cover'
                                                width={500}
                                                height={500}
                                                loader={() => v.imgLink}
                                                src={'me.png'}
                                            />
                                            <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                                <div className='font-bold text-xs'>{v.fullName}</div>
                                                <div className='leading-4' >{v.role}</div>
                                                <div className='leading-4' >{v.desc}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className='h-full basis-5/12'>
                            <div className='text-2xl font-bold text-primary mt-4'>MANAGEMENT BOARD</div>
                            <p className=' mt-2 text-justify'>The Management Board, comprising four managers per department, is responsible for overseeing departmental operations each semester. They conduct quality control assessments, set departmental goals in line with official guidelines and the club's strategic plan, and maintain communication among department members.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

};

export default Generation;
