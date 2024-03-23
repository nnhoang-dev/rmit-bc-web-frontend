import React, { useState } from 'react';
import Title from '../Title';

const OurDepartments = () => {
    const departments = [
        { title: 'Marketing', desc: "The Marketing Department serves as the face of RMIT Vietnam Business Club - SGS. We promote club awareness toward the RMIT community, third-party organizations, and media partners via publications on social media channels. Besides media products, ‘Marketing Discussion’ and ‘Academic Bonding’ are well-known internal events launched by our Department, allowing members to gain event management skills and Communication knowledge shared by experts." },
        { title: 'Human Resources', desc: "The Human Resources Department is defined as the heart of RMIT Vietnam Business Club - SGS. We have built sustainable competitiveness among club members with effective management. Our values are encapsulated in three missions: Acquire a new talented generation to maintain the club’s human capital and long-term development, support BCers’ well-being and enhance club affiliation through bonding and motivating gifts, and sharpening BCers’ skill set within essential training" },
        { title: 'External Relations', desc: "The External Relations Department represents RMIT Vietnam Business Club - SGS in expanding, maintaining, and managing relationships with external partners such as the RMIT Community, Outsider Clubs, NGOs, Corporations, etc., intending to bring abundant resources to the club's growth. As a member, you will cultivate effective communication, problem-solving, and working with stakeholders." },
        { title: 'Research and Development', desc: "The Research and Development Department is considered the backbone of RMIT Vietnam Business Club - SGS. We are accountable for establishing and maintaining the following essential values: Evaluate and draw implications from activities, events, and projects through reports, execute internal training activities to help BC's future leaders improve leadership quality and business acumen, develop toolkits and standardize working procedures to streamline the club's operations, inform BC members and business enthusiasts with business insights and the latest news through Business Discussion and It's Bussible!" },
    ];
    const [departmentsIndex, setDepartmentsIndex] = useState(1);
    const [modal, setModal] = useState(false);

    return (
        <div className='w-full flex flex-col justify-center items-center mt-10'>
            <Title title="Our Departments" />

            <div className='w-full mt-10'>
                {
                    departments.map((v, i) => (
                        <div key={i} className='flex ' onClick={() => { setDepartmentsIndex(i); setModal(!modal); }}>
                            {i % 2 != 0 && (<div className='basis-6/12 hidden sm:block'></div>)}
                            <div className='h-28 group basis-full sm:basis-6/12 bg-gradient-to-r from-black from-[1%] to-primary mb-4 flex justify-center items-center
                                                        text-white cursor-pointer 
                                                        lg:w-3/5 text-xl sm:text-2xl text-center p-4
                                                        sm:shadow-[10px_10px_rgba(0,0,0,0.2)] hover:shadow-none
                                                        transition-all duration-200 ease
                                                        '>
                                <h3>{v.title}</h3>
                                <div className="fixed w-full sm:max-w-lg  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/90 rounded-lg  
                                invisible opacity-0 -z-50 group-hover:visible group-hover:opacity-100 group-hover:z-50 ">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                                        <h3 className="text-xl font-medium ">
                                            {v.title}
                                        </h3>
                                    </div>
                                    <div className="p-4 md:p-5 text-justify text-base">
                                        {v.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <button onClick={() => setModal(false)} type="button" className=" text-gray-400 bg-transparent rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center
                                    fill-white hover:fill-red-800 transition-all duration-100 ease" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button> */}
            {/* <div id="small-modal" onClick={() => setModal(false)}
                className={`${modal ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 ease bg-black/20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0`}>
                <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md max-h-full text-white">
                    <div className="relative bg-primary/80 rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-xl font-medium ">
                                {departments[departmentsIndex].title}
                            </h3>
                            <button onClick={() => setModal(false)} type="button" className=" text-gray-400 bg-transparent rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center
                                                            fill-white hover:fill-red-800 transition-all duration-100 ease" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4 text-justify">
                            {departments[departmentsIndex].desc}
                        </div>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default OurDepartments;