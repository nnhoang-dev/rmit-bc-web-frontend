import OurDepartments from '@/components/Recruiment/OurDepartments';
import Recruiment from '@/components/Recruiment/Recruiment';
import React from 'react';

const RecruimentPage = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto flex-col mt-20 ">
                <Recruiment />
                <OurDepartments />
            </div>
        </div>
    );
};

export default RecruimentPage;