import React from 'react';
import Image from 'next/image';
import Title from '../Title';

const OutstandingLeader = () => {
    const outstandingLeader: { fullName: string, desc: string, imgLink: string; }[] = [
        { fullName: 'Trần Phương Vy', desc: 'President', imgLink: '' },
        { fullName: 'Huỳnh Minh Thư', desc: 'External Vice President', imgLink: '' },
        { fullName: 'Phạm Mai Hạnh Duy', desc: 'Internal Vice President', imgLink: '' },
        { fullName: 'Huỳnh Phan Đoan Trang', desc: 'Chief Financial Officer', imgLink: '' },
    ];

    return (
        <div className='w-full bg-[#f1f0f0]'>
            <div className='max-w-screen-xl mx-auto w-full flex flex-col items-center text-black px-2 py-20'>
                <Title title='Outstanding Leader' />
                <div className='w-full flex flex-col-reverse lg:flex-row justify-between'>
                    <div className='basis-9/12 px-2 md:px-0'>
                        <div className='flex -mx-4 mt-10 flex-wrap'>
                            {outstandingLeader.map((v, i) => (
                                <div key={i} className='basis-1/2 md:basis-1/4 group relative px-2 pb-2 md:px-4 md:pb-8'>
                                    <Image alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        className='object-cover'
                                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/427888582_4465617976997343_4359727408490062132_n.jpg?stp=c0.37.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDe6vqereUwL9Kdqic6ZP6dYIS4UPoCSlbWkiurWULtpg&oe=65E77A22'}
                                        src={'me.png'}
                                    />
                                    <div className='flex flex-col  bg-white h-16 w-full p-2 text-[11px]'>
                                        <span className='font-bold'>{v.fullName}</span>
                                        <span>{v.desc}</span>
                                    </div>
                                </div>
                            ))}
                            {outstandingLeader.map((v, i) => (
                                <div key={i} className='basis-1/2 md:basis-1/4 group relative px-2 pb-2 md:px-4 md:pb-8'>
                                    <Image alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        className='object-cover'
                                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/427888582_4465617976997343_4359727408490062132_n.jpg?stp=c0.37.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDe6vqereUwL9Kdqic6ZP6dYIS4UPoCSlbWkiurWULtpg&oe=65E77A22'}
                                        src={'me.png'}
                                    />
                                    <div className='flex flex-col  bg-white h-16 w-full p-2 text-[11px]'>
                                        <span className='font-bold'>{v.fullName}</span>
                                        <span>{v.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-10 flex basis-3/12 justify-center items-center w-full h-96 bg-primary text-white text-center text-4xl font-extrabold p-5 leading-[50px] lg:ml-8'> Once a BCer, always a BCer</div>
                </div>
            </div>
        </div>
    );
};

export default OutstandingLeader;