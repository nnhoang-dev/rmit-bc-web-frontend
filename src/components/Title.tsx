import React from 'react';

const Title = (props: { title: string; }) => {
    return (
        <div className=' text-primary font-extrabold border-b-4 border-black px-5 pb-3 
            text-2xl sm:text-4xl'>{props.title}</div>
    );
};

export default Title;