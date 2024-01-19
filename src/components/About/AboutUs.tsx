import React from 'react';

const AboutUs = () => {
    return (
        <div className='max-w-screen-lg mx-auto text-black px-2'>
            <div className='py-20'>
                <div className='text-center text-6xl font-bold mb-8'>ABOUT US</div>
                <div className='text-xl'>
                    <p className='text-center mb-5'><span className='text-primary font-bold'>RMIT Vietnam Business Club - SGS</span> founded in 2004, making us the oldest active club at RMIT.</p>
                    <p className='text-center mb-5'> Business Club has always had a great influence on society, particularly at RMIT. Our journey is worth sharing, with our partnerships with many small to large firms and organizations throughout Vietnam.</p>
                    <p className='text-center mb-5'>Also, we have endeavored to organize diverse projects within RMIT and up to the national scale, namely <span className='text-primary font-bold'>Marketing Challengers</span> and <span className='text-primary font-bold'>The Logisticom</span>.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;