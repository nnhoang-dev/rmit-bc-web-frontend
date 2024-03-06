import React from 'react';
import Image from 'next/image';

const Generation = () => {
    const data: { fullName: string, desc: string, imgLink: string; }[] = [
        { fullName: 'Trần Phương Vy', desc: 'President', imgLink: '' },
        { fullName: 'Huỳnh Minh Thư', desc: 'External Vice President', imgLink: '' },
        { fullName: 'Phạm Mai Hạnh Duy', desc: 'Internal Vice President', imgLink: '' },
        { fullName: 'Huỳnh Phan Đoan Trang', desc: 'Chief Financial Officer', imgLink: '' },
    ];

    return (
        <div className='max-w-screen-xl mx-auto flex flex-col items-center text-black px-2 py-20'>
            <div className='w-full'>
                <div className='text-center text-4xl font-black'>HUMAN OF BC</div>
                <div className='w-full text-2xl text-primary font-bold mt-10'>Generation 19</div>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between '>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12'>
                            {data.map((v, i) => (
                                <div key={i} className='mt-2 basis-1/2 sm:basis-3/12 group lg:even:mt-10 px-1 md:px-2 
                                                        md:mt-0'>
                                    <div className='overflow-hidden relative  bg-gray-400 '>
                                        <Image alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                            loader={() => 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=jAc1-3tUG08AX8H9Hxr&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfD8Qo2s84O_FySEreY6ctb-FdqJZ6zEh75i7fBXs8SLjA&oe=65ED86A4'}
                                            src={'me.png'}
                                        />
                                        <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                            <div className='font-bold'>{v.fullName}</div>
                                            <div>{v.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='h-full basis-5/12'>
                            <div className='text-2xl font-bold text-primary mt-4'>EXECUTIVE BOARD GENERATION 19</div>
                            <div className=' mt-2'>The executive board, acting as the leaders of BC, decides long-term and short-term objectives for the club. The executive board, consisting of 1 president, followed by 2 vice presidents, and 1 CFO, takes responsibility for monitoring the club toward the set goals. As Business Club is a student club of RMIT University, the executive board is responsible for preparing reports for each semester, annual reports, and plans to be submitted to the Student Life department.</div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col-reverse lg:flex-row-reverse items-center justify-between '>
                        <div className='flex flex-wrap sm:flex-row mt-5 -mx-1 md:-mx-2 w-full md:basis-7/12'>
                            {data.map((v, i) => (
                                <div key={i} className='mt-2 basis-1/2 sm:basis-3/12 lg group lg:even:mt-10 px-1 md:px-2 
                                                        md:mt-0'>
                                    <div className='overflow-hidden relative  bg-gray-400 '>
                                        <Image alt="Picture of the author"
                                            width={500}
                                            height={500}
                                            style={{
                                                objectFit: 'cover',
                                                height: '100%',
                                                width: '100%'
                                            }}
                                            loader={() => 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=jAc1-3tUG08AX8H9Hxr&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfD8Qo2s84O_FySEreY6ctb-FdqJZ6zEh75i7fBXs8SLjA&oe=65ED86A4'}
                                            src={'me.png'}
                                        />
                                        <div className='-bottom-full group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                            <div className='font-bold'>{v.fullName}</div>
                                            <div>{v.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='h-full basis-5/12'>
                            <div className='text-2xl font-bold text-primary mt-4'>MANAGEMENT BOARD</div>
                            <div className=' mt-2'>The Management Board, comprising four managers per department, is responsible for overseeing departmental operations each semester. They conduct quality control assessments, set departmental goals in line with official guidelines and the club's strategic plan, maintain communication among department members, and report to the Executive Board.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generation;