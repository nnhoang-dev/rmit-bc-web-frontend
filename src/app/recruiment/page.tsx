import OurDepartments from '@/components/Recruiment/OurDepartments';
import Recruiment from '@/components/Recruiment/Recruiment';
import React from 'react';

const RecruimentPage = () => {
    return (
        <div className="container mx-auto flex-col mt-10 p-2 text-base">
            <Recruiment />
            <OurDepartments />
        </div>
    );
};

export default RecruimentPage;