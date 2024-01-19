import React from 'react';
import Image from 'next/image';

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
                <div className='text-4xl text-primary font-extrabold border-b-4 border-black px-5 pb-5'>Outstanding Leader </div>
                <div className='w-full flex justify-between mt-10'>

                    <div className='flex-1 grid grid-cols-4 gap-y-8'>
                        {outstandingLeader.map((v, i) => (
                            <div key={i} className='group overflow-hidden relative mr-20 last:mr-0 h-52 w-40 bg-gray-400'>
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
                                {/* -bottom-[40%] group-hover:bottom-0 transition-all ease-out duration-200 bg-gradient-to-t to-white/0 from-[#9d140c]/80  */}
                                <div className='flex flex-col absolute bottom-0 bg-white h-16 w-full p-2 text-[11px]'>
                                    <span className='font-bold'>{v.fullName}</span>
                                    <span>{v.desc}</span>
                                </div>
                            </div>
                        ))}
                        {outstandingLeader.map((v, i) => (
                            <div key={i} className='group overflow-hidden relative mr-20 last:mr-0 h-52 w-40 bg-gray-400'>
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
                                {/* -bottom-[40%] group-hover:bottom-0 transition-all ease-out duration-200 bg-gradient-to-t to-white/0 from-[#9d140c]/80  */}
                                <div className='flex flex-col absolute bottom-0 bg-white h-16 w-full p-2 text-[11px]'>
                                    <span className='font-bold'>{v.fullName}</span>
                                    <span>{v.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center w-1/5 h-96 bg-primary text-white text-center text-4xl font-extrabold p-5 leading-[50px]'> Once a BCer, always a BCer</div>
                </div>
            </div>
        </div>
    );
};

export default OutstandingLeader;