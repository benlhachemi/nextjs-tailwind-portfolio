'use client';

//imports
import handAnimation from '@/animations/hand.json';
import computerAnimation from '@/animations/computer.json';
import heartAnimation from '@/animations/heart.json';
import lifeAnimation from '@/animations/life.json';
import avatarAnimation from '@/animations/avatar.json';
import Lottie from 'lottie-react';

export default function Header() {
  return (
    <div className="w-fit mx-auto py-4 lg:py-6 block lg:flex gap-2 z-50 relative bg-black bg-opacity-10 rounded-3xl shadow-lg">
      <Lottie
        className="w-44 mx-auto 2xl:w-full xl:w-56"
        animationData={avatarAnimation}
        loop={true}
      />

      <div className="px-8 lg:px-10 min-h-fit mx-auto text-center items-center justify-center flex">
        <div className="w-full h-fit space-y-10">
          <h2 className="font-medium w-full text-2xl justify-center lg:justify-start mx-auto lg:mx-0 flex gap-2 flex-wrap">
            <span>Hi I'm </span>
            <Lottie animationData={handAnimation} loop={true} className="w-8" />
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400">
              Souhail Benlhachemi
            </span>
          </h2>

          <div className="space-y-2 w-full">
            <h2 className="font-extralight text-lg flex gap-2 items-center w-full mx-auto justify-center lg:justify-start lg:mx-0">
              <span>a programmer</span>
              <Lottie
                animationData={computerAnimation}
                loop={true}
                className="w-6"
              />
              <span>who</span>
            </h2>
            <h2 className="font-semibold text-2xl lg:text-3xl flex flex-wrap gap-2 mx-auto justify-center lg:justify-start lg:mx-0">
              <span>just</span>
              <Lottie
                animationData={heartAnimation}
                loop={true}
                className="w-14"
              />
              <span>to code and</span>
            </h2>
            <h2 className="font-semibold text-2xl lg:text-3xl flex flex-wrap gap-2 mx-auto justify-center lg:justify-start lg:mx-0">
              <span>bring ideas</span>
              <span>to life</span>
              <Lottie
                animationData={lifeAnimation}
                loop={true}
                className="w-14"
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
