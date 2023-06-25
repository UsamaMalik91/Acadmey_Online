import React from 'react';
import Typed from 'react-typed'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footerr = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ACADEMY
        <Typed  strings={['...']} typeSpeed={100} backSpeed={150} loop showCursor='none'/>
        </h1>
        <Typed strings={['Online_Study, Online_Teaching , Online_Evaluation']} typeSpeed={800} backSpeed={650} loop  showCursor='none'/>
        <p className='py-4'>Elevate Your Education with Teaching Excellence: Dynamic Courses for Classes 9, 10, 11, and 12 - Empowering Students to Excel and Achieve Success</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Academy</h6>
        <ul>
            <li className='py-2 text-sm'>Courses</li>
            <li className='py-2 text-sm'>Teachers</li>
            <li className='py-2 text-sm'>Events</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Rules & Regulation</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>About Us</h6>
        <ul>
            <li className='py-2 text-sm'>Members</li>
            <li className='py-2 text-sm'>Students</li>
            <li className='py-2 text-sm'>Achievements</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Condition</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footerr;
