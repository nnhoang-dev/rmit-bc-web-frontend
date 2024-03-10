import React, { useState } from 'react';
import { event } from "../../lib/interface";
import Image from 'next/image';
import Link from 'next/link';

const OtherEvents = (props: { allEvents: event[]; }) => {


    const [audience, setAudience] = useState('All Audience');
    const [event, setEvent] = useState('All Events');
    const [dates, setDates] = useState('All Dates');
    const [search, setSearch] = useState('');
    const [dataOtherEvents, setDataOtherEvents] = useState(props.allEvents);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(Math.floor(dataOtherEvents.length / 6) + 1);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.currentTarget.value.toLowerCase();
        setCurrentPage(1);
        setSearch(input);
        const dataAfterFilter = props.allEvents.filter((data) => {
            return data.projectName.toLowerCase().includes(input);
        });
        setDataOtherEvents(dataAfterFilter);
        setNumberOfPages(Math.floor(dataAfterFilter.length / 6) + 1);
    };

    const handleClickFilter = (e: React.MouseEvent<HTMLSpanElement>, type: string) => {
        setCurrentPage(1);
        let au = audience;
        let ev = event;
        let da = dates;

        switch (type) {
            case 'audience':
                setAudience(e.currentTarget.innerHTML);
                au = e.currentTarget.innerHTML;
                break;
            case 'event':
                setEvent(e.currentTarget.innerHTML);
                ev = e.currentTarget.innerHTML;
                break;
            case 'dates':
                setDates(e.currentTarget.innerHTML);
                da = e.currentTarget.innerHTML;
                break;
        }
        setDataOtherEvents(props.allEvents.filter((data) => {
            if (au == data.audience || au == 'All Audience') {
                console.log(data.date.substring(data.date.length - 4, data.date.length));
                console.log(ev);


                if (ev == data.status || ev == 'All Events') {
                    if (da == data.date.substring(data.date.length - 4, data.date.length) || da == 'All Dates') {
                        return true;
                    }
                }
            }
            return false;
        }));
    };

    return (
        <div className='w-full flex flex-col justify-center items-center mt-10'>
            <div className='text-primary text-3xl font-bold mt-10 mb-4'>Other Events</div>
            <div className='border-2 border-gray-400 rounded-full w-4/5 flex justify-between items-center'>
                <input id='search' type="text" placeholder='Type here' className='p-4 outline-none w-full h-full rounded-full' onChange={(e) => handleSearch(e)} onClick={() => {
                    setAudience('All Audience');
                    setEvent('All Events');
                    setDates('All Dates');
                    setDataOtherEvents(props.allEvents);

                }} />
                <label htmlFor='search' className='bg-primary w-14 h-14 rounded-full flex justify-center items-center m-1'>
                    <div className='h-10 w-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </div>
                </label>
            </div>
            <div className='w-full mt-10 px-4 hidden md:block'>
                <div className='p-4 pr-0 bg-gray-200  flex'>
                    <div className='flex flex-col'>
                        <span className='mx-3 my-1 font-bold'>Audience:</span>
                        <span className='mx-3 my-1 font-bold'>Event:</span>
                        <span className='mx-3 my-1 font-bold'>Time:</span>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='my-2'>
                            <span className={`mx-4 ${audience == 'All Audience' ? 'text-primary' : ''}`} onClick={(e) => handleClickFilter(e, 'audience')}>All Audience</span>
                            <span className={`mx-4 ${audience == 'Nationwide undergraduates' ? 'text-primary' : ''}`} onClick={(e) => handleClickFilter(e, 'audience')}>Nationwide undergraduates</span>
                            <span className={`mx-4 ${audience == 'RMIT undergraduates' ? 'text-primary' : ''}`} onClick={(e) => handleClickFilter(e, 'audience')}>RMIT undergraduates</span>
                        </div>
                        <div className='my-2'>
                            <span className={`mx-4 ${event == 'All Events' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'event')}>All Events</span>
                            <span className={`mx-4 ${event == 'Upcoming' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'event')}>Upcoming</span>
                            <span className={`mx-4 ${event == 'Past' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'event')}>Past</span>
                        </div>
                        <div className='my-2'>
                            <span className={`mx-4 ${dates == 'All Dates' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>All Dates</span>
                            <span className={`mx-4 ${dates == '2024' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>2024</span>
                            <span className={`mx-4 ${dates == '2023' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>2023</span>
                            <span className={`mx-4 ${dates == '2022' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>2022</span>
                            <span className={`mx-4 ${dates == '2021' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>2021</span>
                            <span className={`mx-4 ${dates == '2020' ? 'text-primary' : ''} `} onClick={(e) => handleClickFilter(e, 'dates')}>2020</span>
                        </div>
                    </div>
                </div >
            </div >
            <div className='w-full flex flex-wrap md:-mx-2 lg:-mx-4'>
                {dataOtherEvents.map((data, i) => {
                    if (i >= 6 * (currentPage - 1) && i < 6 * currentPage) return (
                        <Link href={`/our-projects/${data.slug}`} key={i} className=' md:px-2 lg:px-4 basis-full md:basis-1/2 xl:basis-1/3 relative
                    mt-2 lg:mt-8 md:mt-4  hover:scale-[1.02] transition-all duration-200 ease'>
                            <div className='h-[350px] shadow-lg border '>
                                <Image alt="Picture of the author"
                                    className='h-56'
                                    width={500}
                                    height={500}
                                    style={{
                                        objectFit: 'cover',
                                        width: '100%',
                                    }}
                                    loader={() => (data.picture)}
                                    src={'me.png'}
                                />
                                <div className='p-4 pb-8'>
                                    <div className='text-xs'>
                                        <span>{data.time}</span>
                                        <span className='mx-4'>|</span>
                                        <span>{data.audience}</span>
                                    </div>
                                    <div className='font-bold mt-2 line-clamp-2'>{data.projectName}</div>
                                    <div className='text-xs font-semibold  mt-auto absolute left-8 bottom-2'>{data.date}</div>
                                </div>
                            </div>
                        </Link>
                    );
                }
                )}
            </div>

            {/* Pagination */}
            {numberOfPages > 1 && (
                <div className='mt-10 cursor-pointer -mx-2 flex'>
                    <div onClick={() => { if (currentPage - 1 > 0) setCurrentPage(currentPage - 1); }} className='mx-2 p-4 font-bold rotate-180 transition-all duration-200 ease hover:bg-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path fill="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                    {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((i) => (
                        <div key={i} className={`mx-2 p-4 font-bold  transition-all duration-200 ease  ${currentPage == i ? 'bg-primary text-white hover:opacity-80' : 'text-black hover:bg-gray-100'}`} onClick={() => setCurrentPage(i)}>{i}</div>
                    ))}
                    <div onClick={() => { if (currentPage + 1 <= numberOfPages) setCurrentPage(currentPage + 1); }} className='mx-2 p-4  font-bold transition-all duration-200 ease hover:bg-gray-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="15" viewBox="0 0 320 512"><path fill="#000000" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                    </div>
                </div>
            )
            }

        </div >
    );
};

export default OtherEvents;