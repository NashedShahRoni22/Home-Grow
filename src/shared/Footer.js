import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#212529] text-gray-400'>
            <hr />
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6'>
            <div>
                <h2 className='text-xl font-semibold text-[#71B002]'>About Us</h2>
                <p className='text-justify'>Home Grow is an initiative in agriculture sector with a new vision was incorporated in the year of 2019 to enter in international seed market by exporting and contract seed production as well as increase food production of country and upgrade the farmer’s income.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold text-[#71B002]'>Production</h2>
                <p className='text-justify'>Home Grow has more than 100 experienced contract seed growers and 5 confined farm for seed production. More than 200 acre of land is engaged for seed production.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold text-[#71B002]'>Export</h2>
                <p className='text-justify'>We produce seed production of different op and hybrid vegetables as contract basis for different countries like Hongkong, Pakistan, Malaysia, S. Korea, China etc.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold text-[#71B002]'>Contact Us</h2>
                <ul>
                    <li>Email: info@homegrowbd.com</li>
                    <li>Phone: 01731106046</li>
                    <li>Location: Gaziaron, Goshingga, Shreepur, Gazipur.</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className='text-center py-5 mt-5 text-lg'>
            <p>Copyright reserved by <span className='text-[#71B002]'>Home Grow 2022</span></p>
            <p>Design and Developed by <span className='text-[#71B002]'>NSR DevZone</span></p>
        </div>
        </div>
    );
};

export default Footer;