import { event } from '@/lib/interface';

const Agenda = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <h2 className='text-primary text-3xl font-bold mt-10 mb-4 text-center'>Agenda</h2>
            <ul className='mt-4'>
                {props.project.agenda.map((v, i) => (
                    <li className={`${v.slice(0, 1) == '-' ? 'list-disc ml-4' : ''}`} key={i} > {`${v.slice(0, 1) == '-' ? v.slice(1, v.length) : v}`}</li>
                ))}
            </ul>
        </div >
    );
};

export default Agenda;;