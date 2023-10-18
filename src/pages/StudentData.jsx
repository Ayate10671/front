/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from '../components/Navebar'
import StData from '../components/Slider'


const StudentData = () => {
    return (
        <div>
        <Navbar/>
        <div className="flex flex-row-reverse"><StData/></div>
        
        </div>
    );
}

export default StudentData;
