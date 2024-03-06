import React from 'react';
import Image from 'next/image';

const Speaker = () => {
    return (
        <div className='container mx-auto px-2'>
            <div className='text-primary text-3xl font-bold mt-10 mb-4 text-center'>Speaker </div>
            <div className='flex -mx-1 sm:-mx-4'>
                <div className='px-1 sm:px-4 basis-1/4'>
                    <Image alt="Picture of the author"
                        className='w-full aspect-square rounded-full object-cover'
                        width={500}
                        height={500}
                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfD-ncs-C9JzGOm9k0sTYZKBrxrDYdaEG6nNpORSRP8O2A&oe=65E797E4'}
                        src={'me.png'}
                    />
                    <div className='text-sm sm:text-lg my-2 w-full text-center'>Nguyễn Nam Hoàng</div>
                    <p className='text-xs sm:text-base'>These are short, famous texts in English from classic sources like the Bible or Shakespeare. </p>
                </div>
                <div className='px-1 sm:px-4 basis-1/4'>
                    <Image alt="Picture of the author"
                        className='w-full aspect-square rounded-full object-cover'
                        width={500}
                        height={500}
                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfD-ncs-C9JzGOm9k0sTYZKBrxrDYdaEG6nNpORSRP8O2A&oe=65E797E4'}
                        src={'me.png'}
                    />
                    <div className='text-sm sm:text-lg my-2 w-full text-center'>Nguyễn Nam Hoàng</div>
                    <p className='text-xs sm:text-base'>These are short, famous texts in English from classic sources like the Bible or Shakespeare. </p>
                </div>
                <div className='px-1 sm:px-4 basis-1/4'>
                    <Image alt="Picture of the author"
                        className='w-full aspect-square rounded-full object-cover'
                        width={500}
                        height={500}
                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfD-ncs-C9JzGOm9k0sTYZKBrxrDYdaEG6nNpORSRP8O2A&oe=65E797E4'}
                        src={'me.png'}
                    />
                    <div className='text-sm sm:text-lg my-2 w-full text-center'>Nguyễn Nam Hoàng</div>
                    <p className='text-xs sm:text-base'>These are short, famous texts in English from classic sources like the Bible or Shakespeare. </p>
                </div>
                <div className='px-1 sm:px-4 basis-1/4'>
                    <Image alt="Picture of the author"
                        className='w-full aspect-square rounded-full object-cover'
                        width={500}
                        height={500}
                        loader={() => 'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/427888582_4465617976997343_4359727408490062132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFaKADCepgAeCRPFQKrheS2gwse2-Yfrf6DCx7b5h-t_mWUxWlEajP7gsqDjC9CCSeOu6_5SqQqV7ISmbDGHsws&_nc_ohc=cI280ttEmq8AX8wnUwd&_nc_ht=scontent-hkg4-1.xx&oh=00_AfD-ncs-C9JzGOm9k0sTYZKBrxrDYdaEG6nNpORSRP8O2A&oe=65E797E4'}
                        src={'me.png'}
                    />
                    <div className='text-sm sm:text-lg my-2 w-full text-center'>Nguyễn Nam Hoàng</div>
                    <p className='text-xs sm:text-base'>These are short, famous texts in English from classic sources like the Bible or Shakespeare. </p>
                </div>
            </div>
        </div>
    );
};

export default Speaker;