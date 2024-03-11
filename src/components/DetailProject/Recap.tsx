import React from 'react';
import { event } from '@/lib/interface';

const Recap = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2 flex flex-col justify-center items-center py-10'>
            <div className='text-primary text-3xl font-bold mb-4 text-center'>Recap</div>
            <div className='relative w-full mt-10 '>
                {props.project.typeRecap == 'video' ? (
                    <div className='overflow-hidden pt-[60%] '>
                        <iframe className='absolute mx-auto h-full top-0 right-0 left-0 bottom-0 border-none' src={props.project.recap} width="100%" scrolling="yes" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                ) : (
                    <div className='overflow-hidden pt-[60%] '>
                        <iframe className='absolute mx-auto h-full top-0 right-0 left-0 bottom-0 border-none' src={props.project.recap} width="500" scrolling="yes" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                )}

            </div>

        </div>
    );
};

export default Recap;
// <iframe src="" width="500" height="728" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>