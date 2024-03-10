import React from 'react';

const Modal = (props: { title: string, desc: string; }) => {
    return (
        // <div className='bg-black/20 fixed z-50 top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
        <div id="small-modal" className="bg-black/20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0">
            <div className="relative w-full max-w-md max-h-full text-white">
                <div className="relative bg-primary/80 rounded-lg shadow ">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 className="text-xl font-medium ">
                            {props.title}

                        </h3>
                        <button type="button" className=" text-gray-400 bg-transparent rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center
                                                        fill-white hover:fill-red-800 transition-all duration-100 ease" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4 text-justify">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Modal;