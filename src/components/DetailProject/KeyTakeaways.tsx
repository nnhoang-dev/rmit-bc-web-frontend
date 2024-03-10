import React from 'react';
import { event } from '@/lib/interface';

const KeyTakeaways = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2'>
            <div className='text-primary text-3xl font-bold mt-10 mb-4 text-center'>Key Takeaways</div>
            <ul className='mt-10'>

                {props.project.keyTakeaways.map((v, i) => (
                    <li className='list-disc ml-4' key={i}>{v}</li>
                ))}
            </ul>
        </div>

    );
};

export default KeyTakeaways;