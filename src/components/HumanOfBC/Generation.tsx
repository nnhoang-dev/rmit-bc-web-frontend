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
                <div className='text-center text-6xl font-black'>HUMAN OF BC</div>
                <div className='w-full text-3xl text-primary font-bold mt-20'>Generation 19</div>
                <div className='flex flex-col items-center'>
                    <div className='w-full flex items-center justify-between  mt-20'>
                        <div className='flex '>
                            {data.map((v, i) => (
                                <div key={i} className='group overflow-hidden relative mr-3 last:mr-0 even:mt-10 h-52 w-40 bg-gray-400'>
                                    <Image alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',
                                            width: '100%'
                                        }}
                                        loader={() => 'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/399862577_4391509687741506_4961352823905162984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=iPRSFIarTeIAX8F6VuY&_nc_ht=scontent-hkg1-2.xx&oh=00_AfDL_1LyXHE-XyvzTu89wkcPhqyes1by_BNozI51V93oHw&oe=65ADEBD9'}
                                        src={'me.png'}
                                    />
                                    <div className='-bottom-[40%] group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                        <div className='font-bold'>{v.fullName}</div>
                                        <div>{v.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-2/5'>
                            <div className='text-5xl font-bold text-primary'>EXECUTIVE BOARD GENERATION 19</div>
                            <div className='text-xl mt-5'>chữ gì đó mà chưa rõ chữ gì maybe mission gen này, vài lời sến sẩm, những cái đẻ ra tại gen này, etc.</div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-20'>
                        <div className='w-2/5'>
                            <div className='text-5xl font-bold text-primary'>MANAGEMENT BOARD</div>
                            <div className='text-xl mt-5'>chữ gì đó mà chưa rõ chữ gì maybe mission gen này, vài lời sến sẩm, những cái đẻ ra tại gen này, etc.</div>
                        </div>
                        <div className='flex '>
                            {data.map((v, i) => (
                                <div key={i} className='group overflow-hidden relative mr-3 last:mr-0 even:mt-10 h-52 w-40 bg-gray-400'>
                                    <Image alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        style={{
                                            objectFit: 'cover',
                                            height: '100%',
                                            width: '100%'
                                        }}
                                        loader={() => 'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/399862577_4391509687741506_4961352823905162984_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=iPRSFIarTeIAX8F6VuY&_nc_ht=scontent-hkg1-2.xx&oh=00_AfDL_1LyXHE-XyvzTu89wkcPhqyes1by_BNozI51V93oHw&oe=65ADEBD9'}
                                        src={'me.png'}
                                    />
                                    <div className='-bottom-[40%] group-hover:bottom-0 transition-all ease-out duration-200
                        flex flex-col justify-end absolute h-2/5 w-full bg-gradient-to-t to-white/0 from-[#9d140c]/80 p-2 text-[11px] text-white'>
                                        <div className='font-bold'>{v.fullName}</div>
                                        <div>{v.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Generation;