'use client';
import Image from 'next/image';
import Title from '../Title';

const NationalProjects = () => {
    const loadImgMacha = () => {
        return "https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Avatar%20MarCha.png?alt=media&token=8baddc0e-a57d-4fb0-9184-a087b3825eab";
    };
    const loadImgLogis = () => {
        return "https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Avatar%20Logis.jpeg?alt=media&token=1f62d893-1434-4051-83c2-a4a9fbc861e3";
    };
    return (
        <div className='max-w-screen-2xl mx-auto flex flex-col justify-center items-center pb-10 '>
            <Title title="National Projects" />
            <div className=' flex  -mx-1 md:-mx-2 sm:flex-row flex-col'>
                <div className=' px-1 md:px-4 basis-3/12 mt-8'>
                    <Image loader={loadImgMacha}
                        src="MARKETING CHALLENGERS"
                        alt="MARKETING CHALLENGERS"
                        width={1000}
                        height={1000}
                        loading='lazy'
                    />
                </div>
                <div className=" px-2 md:px-4 basis-9/12 mt-2 sm:mt-8 ">
                    <h3 className='font-bold mb-2 text-center sm:text-start'>MARKETING CHALLENGERS</h3>
                    <p className="text-justify">Founded in the year 2009, Marketing Challengers, a 2-month nationwide marketing communication competition, has achieved substantial success over the course of 11 seasons. The platform serves as an arena for aspiring marketing enthusiasts among undergraduates in Vietnam, offering them the opportunity to participate in an agency-style challenge by crafting comprehensive Integrated Marketing Communication (IMC) strategies in English for prominent brands spanning diverse industry sectors.</p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row -mx-1 md:-mx-2'>
                <div className='px-1 md:px-4 basis-3/12 mt-10 sm:mt-8'>
                    <Image loader={loadImgLogis}
                        src="THE LOGISTICOM.png"
                        alt="MARKETING CHALLENGERS"
                        width={1000}
                        height={1000}
                        loading='lazy'
                    />
                </div>
                <div className=" px-2 md:px-4 basis-9/12 mt-2 sm:mt-8 ">
                    <h3 className='font-bold mb-2 text-center sm:text-start'>THE LOGISTICOM</h3>
                    <p className="text-justify">With 7 successful seasons, the Logisticom is a nationwide Logistics and Supply Chain Management competition for undergraduates in Vietnam. Its mission is to provide structure covering the entire Logistics and Supply Chain Management with emerging topics to highlight academic knowledge and practical skills alongside assistance from industry professionals.</p>
                </div>
            </div>
        </div>
    );
};

export default NationalProjects;