import { event } from '@/lib/interface';
import Image from 'next/image';

const PartnerSponsor = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <h2 className='text-primary text-3xl font-bold mt-10 text-center'>Partner - Sponsor</h2>
            <div className='mt-4 mb-10'>
                <Image alt={props.project.projectName}
                    className=' md:w-3/4 object-cover'
                    width={500}
                    height={500}
                    loader={() => (props.project.partner)}
                    src={`${props.project.slug}.png`}
                    loading='lazy'
                />
            </div>
        </div>
    );
};

export default PartnerSponsor;