import { event } from '@/lib/interface';

const Recap = (props: { project: event; }) => {
    return (
        <div className='container mx-auto px-2 flex flex-col justify-center items-center py-10'>
            <h2 className='text-primary text-3xl font-bold text-center'>Recap</h2>
            {props.project.typeRecap == 'video' ? (
                <div className='relative w-full mt-4 '>
                    <div className='overflow-hidden pt-[60%] '>
                        <iframe className='absolute mx-auto w-full h-full top-0 right-0 left-0 bottom-0 border-none' src={props.project.recap} scrolling="yes" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            ) : (
                <div className='relative mt-4 w-full sm:w-[500px] '>
                    <div className='overflow-hidden pt-[170%] sm:pt-[130%]  '>
                        <iframe className='absolute mx-auto h-full w-full top-0 right-0 left-0 bottom-0 border-none' src={props.project.recap} scrolling="yes" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            )}

        </div>

    );
};

export default Recap;
// <iframe src="" width="500" height="728" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>