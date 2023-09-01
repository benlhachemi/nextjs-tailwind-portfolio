'use client';

//imports
import Navbar from '@/components/navbar';
import { FiChevronDown } from 'react-icons/fi';
import Hero from '@/components/hero';
import Header from '@/components/header';
import heartAnimation from '@/animations/heart.json';
import Lottie from 'lottie-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      {/* SECTION 1 - NAVBAR HEADER HERO */}
      <div className="min-h-screen space-y-8 lg:space-y-16 relative">
        <Navbar />
        <Header />
        <Hero />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" />
      </div>

      {/* SECTION 2  - SKILLS */}
      <div className="space-y-8 lg:space-y-12 relative">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap'>
          <span className='text-gray-500'>some of the</span> 
          <span className='font-medium'>technologies I have</span>
          <span className='font-medium'>used and </span>
          <Lottie
            animationData={heartAnimation}
            loop={true}
            className="w-12 lg:w-24"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 w-full pt-10">
          <div className="col-span-1 w-full h-fit my-auto">
            <Image alt="nextjs-13" src="/images/nextjs-13.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="tailwindcss" src="/images/tailwindcss.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="nestjs" src="/images/nestjs.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="graphql" src="/images/graphql.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="mongodb" src="/images/mongodb.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="redis" src="/images/redis.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="nginx" src="/images/nginx.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
          <div className="col-span-1 w-full items-center h-fit my-auto">
            <Image alt="docker" src="/images/docker.png" className='cursor-pointer hover:scale-105 transition-all' width={250} height={250} />
          </div>
        </div>
      </div>

      {/* SECTION 3  - PROJECTS */}
      <div className="mt-20 lg:mt-56 space-y-8 lg:space-y-10 relative">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap'>
          <span className='text-gray-500'>Selected</span> 
          <span className='font-medium'>Works</span>
        </div>

        <div className='space-y-20 lg:space-y-32 w-5/6 mx-auto'>
          {/* WORK 1 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/work-1.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-end space-y-8'>
              <h1 className='uppercase font-medium'>real estate template</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur </span>
                <span className='font-semibold'>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Design</h6>
              <button className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>View on Github</button>
            </div>
          </div>

          {/* WORK 2 */}
          <div className="flex w-full justify-end">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6  border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0'>
              <div className='col-span-1 w-full h-full flex flex-col justify-end space-y-8'>
                <h1 className='uppercase font-medium'>real estate template</h1>
                <p className='text-3xl font-light leading-relaxed'>
                  <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur </span>
                  <span className='font-semibold'>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
                </p>
                <h6 className='font-light text-gray-400'>Website Design</h6>
                <button className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>View on Github</button>
              </div>
              <div className='col-span-1 w-full'>
                <Image 
                  src="/images/work-1.png" 
                  className='rounded-3xl shadow-lg cursor-pointer' 
                  alt="work" 
                  width={1200} 
                  height={1200} 
                />
              </div>
            </div>
          </div>

          {/* WORK 3 */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-5/6 border-gray-500 border-b lg:border-b-0 pb-12 lg:pb-0'>
            <div className='col-span-1 w-full'>
              <Image 
                src="/images/work-1.png" 
                className='rounded-3xl shadow-lg cursor-pointer' 
                alt="work" 
                width={1200} 
                height={1200} 
              />
            </div>
            <div className='col-span-1 w-full h-full flex flex-col justify-end space-y-8'>
              <h1 className='uppercase font-medium'>real estate template</h1>
              <p className='text-3xl font-light leading-relaxed'>
                <span className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur </span>
                <span className='font-semibold'>adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
              </p>
              <h6 className='font-light text-gray-400'>Website Design</h6>
              <button className='justify-start w-fit px-6 py-2 rounded-full shadow-lg border-gray-200 border-2 hover:bg-gray-200 hover:text-black'>View on Github</button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4  - ABOUT ME */}
      <div className="space-y-12 mt-20 lg:mt-56">
        <div className='text-3xl lg:text-5xl font-light flex gap-2 flex-wrap uppercase'>
          <span className='text-gray-500'>a bit</span> 
          <span className='font-medium'>about me</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 py-20">
          <div className="col-span-1 text-3xl font-light leading-relaxed h-full items-center">
            <span className='text-gray-500'>I am a Full Stack developer who is passionate about writing </span>
            <span className='font-bold'>code and try to find solutions for daily basis problems using code, I also love Soccer and Gaming. </span>
          </div>

          <div className='col-span-1 relative h-56 mt-10 lg:h-96 lg:ml-20 lg:-mt-14'>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic1.png)] lg:animate-card bg-cover h-full w-44 lg:w-72 lg:-top-10 lg:-left-10 -rotate-3"></div>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic2.png)] lg:animate-card2 bg-cover h-full w-44 lg:w-72 left-24 -top-5 lg:-top-32 lg:left-48"></div>
            <div className="absolute rounded-3xl shadow-xl bg-[url(/images/pic3.png)] lg:animate-card3 bg-cover h-full w-44 lg:w-72 left-44 top-6 lg:top-10 lg:left-72 rotate-6"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
