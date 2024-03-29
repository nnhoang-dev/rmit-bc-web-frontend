import Link from 'next/link';
import Image from 'next/image';

const AnnualEvents = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='text-primary text-3xl font-bold mt-6 line-clamp-2'>Annual Events</div>

            <div className='w-full flex flex-wrap md:-mx-2 lg:-mx-4'>
                <Link target='_blank' href="https://www.marketingchallengers.org/" className='md:px-2 lg:px-4 basis-full sm:basis-1/2 lg:basis-1/3
                                        mt-2 lg:mt-8 md:mt-4  hover:scale-[1.02] transition-all duration-200 ease'>
                    <div className='shadow-lg border'>
                        <Image alt="Marketing Challengers Competition"
                            className='h-56 w-full object-cover'
                            width={500}
                            height={500}
                            loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/Marketing%20Challengers.png?alt=media&token=0e16f135-cedd-40af-a19f-cfb3062c669d'}
                            src={'marketing-challengers-competition.png'}
                            loading='lazy'
                        />
                        <div className='p-4 pb-8 h-28'>
                            <div className='text-xs'>
                                <span>Biennially</span>
                                <span className='mx-4'>|</span>
                                <span>Nationwide undergraduates</span>
                            </div>
                            <h3 className='font-bold mt-2 line-clamp-2'>Marketing Challengers Competition</h3>
                        </div>
                    </div>
                </Link>
                <Link target='_blank' href="https://thelogisticom.org/" className='md:px-2 lg:px-4 basis-full sm:basis-1/2 lg:basis-1/3 
                                        mt-2 lg:mt-8 md:mt-4  hover:scale-[1.02] transition-all duration-200 ease'>
                    <div className='shadow-lg border'>
                        <Image alt="The Logisticom competition"
                            className='h-56 w-full object-cover'
                            width={500}
                            height={500}
                            loader={() => 'https://firebasestorage.googleapis.com/v0/b/rmit-bc-web-storage.appspot.com/o/The%20Logisticom.png?alt=media&token=c5d7f19d-efad-45b2-af96-cd558642b10a'}
                            src={'the-logisticom-competition.png'}
                            loading='lazy'
                        />
                        <div className='p-4 pb-8 h-28'>
                            <div className='text-xs'>
                                <span>Biennially</span>
                                <span className='mx-4'>|</span>
                                <span>Nationwide undergraduates</span>
                            </div>
                            <h3 className='font-bold mt-2 line-clamp-2'>The Logisticom competition</h3>
                        </div>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default AnnualEvents;