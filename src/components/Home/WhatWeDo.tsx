import React from 'react';
import Title from '../Title';

const WhatWeDo = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-10 '>
            <Title title="What we do?" />
            <p className='py-4 '>For Business Club, <q>Leader</q> is not a position but a direction, in which everyone has the opportunity to learn, contribute, capture value in return, and make yourself ready for challenges awaiting ahead. We aim to nurture future business leaders via value-added projects, knowledge discussions and career guidance</p>
            <video autoPlay loop muted controls className='w-full' >
                <source src="https://firebasestorage.googleapis.com/v0/b/uploadingfile-31197.appspot.com/o/Video.mp4?alt=media&token=5ea8c0fd-0a01-4287-ac0a-29e672e4adb8" type="video/mp4" />
            </video>
        </div>

    );
};

export default WhatWeDo;
{/* <track
    src="/path/to/captions.vtt"
    kind="subtitles"
    srcLang="en"
    label="English"
/> */}