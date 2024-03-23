import Title from '../Title';
import Image from 'next/image';

const Awards = () => {
    return (
        <div className='max-w-screen-xl mx-auto text-black px-2'>
            <div className='w-full flex flex-col justify-center items-center py-10 px-2'>
                <Title title="Awards" />
                <div className='mt-10 flex -mx-2 sm:-mx-8 '>
                    <div className='px-2 sm:px-8 basis-1/2 w-full'>
                        <div className='flex flex-col items-center'>
                            <Image alt="Best Fundraising Event Award"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.4)'
                                }}
                                loader={() => 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Co-Charity.png?alt=media&token=bbd581ca-860b-45cb-9acd-bfb579305471'}
                                src={'best-fundraising-event-award.png'}
                                loading='lazy'
                            />
                            <h3 className='font-bold my-3 text-xs sm:text-xl'>Best Fundraising Event Award</h3>
                            <div className='font-bold bg-primary py-0 px-4 text-white'>2022</div>
                        </div>
                    </div>
                    <div className='basis-1/2 px-2 sm:px-8 '>
                        <div className='flex flex-col items-center'>
                            <Image alt="Best Club Of The Semeste"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.4)'
                                }}
                                loader={() => 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Best%20club%20of%20the%20semester.png?alt=media&token=04a83c1d-3aec-43b8-bd05-d40314410fe4'}
                                src={'best-club-of-the-semeste.png'}
                                loading='lazy'
                            />
                            <h3 className='font-bold my-3 text-xs sm:text-xl'>Best Club Of The Semester</h3>
                            <div className='font-bold bg-primary py-0 px-4 text-white'>2022</div>
                        </div>
                        <div className='flex flex-col items-center mt-5'>
                            <Image alt="Best Academic Event of The Year"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.4)'
                                }}
                                loader={() => 'https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Best%20academic%20event.jpg?alt=media&token=74890a2e-3efa-43fc-ab07-6684d1a433c8'}
                                src={'best-academic-event-of-the-year.png'}
                                loading='lazy'
                            />
                            <h3 className='font-bold my-3 text-xs sm:text-xl'>Best Academic Event of The Year</h3>
                            <div className='font-bold bg-primary py-0 px-4 text-white'>2023</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;