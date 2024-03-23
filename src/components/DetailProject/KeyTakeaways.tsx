import { event } from '@/lib/interface';

const KeyTakeaways = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <h2 className='text-primary text-3xl font-bold mt-10 text-center'>Key Takeaways</h2>
            <ul className='mt-4'>

                {props.project.keyTakeaways.map((v, i) => (
                    <li className='list-disc ml-4' key={i}>{v}</li>
                ))}
            </ul>
        </div>

    );
};

export default KeyTakeaways;