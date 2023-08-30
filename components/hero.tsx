'use client'

//imports
import Lottie from 'lottie-react';
import coolAnimation from '@/animations/cool.json';
import booksAnimation from '@/animations/books.json';

export default function Hero() {
  return (
    <div className='text-6xl font-light w-4/6 mx-auto text-center leading-relaxed flex relative z-50 gap-4 items-center flex-wrap justify-center'>
        <span className='text-gray-500'>I'm a</span>
        <span className='font-bold'>Full Stack Developer</span>
        <Lottie className="w-24" animationData={coolAnimation} loop={true} />
        <span className='text-gray-500'>and a</span>
        <span className='font-bold'>Software Engineer</span>
        <span className='text-gray-500'>Student</span>
        <Lottie className="w-24" animationData={booksAnimation} loop={true} />
    </div>
  )
}