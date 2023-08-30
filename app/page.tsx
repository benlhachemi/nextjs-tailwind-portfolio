'use client';
//imports
import Navbar from '@/components/navbar';
import Avatar from '@/components/avatar';
import Lottie from 'lottie-react';
import handAnimation from '@/animations/hand.json';
import computerAnimation from '@/animations/computer.json';
import heartAnimation from '@/animations/heart.json';
import lifeAnimation from '@/animations/life.json';
import avatarAnimation from '@/animations/avatar.json';

export default function Home() {
  return (
    <div className="space-y-16">
      <Navbar />

      <div className="w-fit mx-auto flex gap-2 relative">
        <div className="relative">
          <div className="w-80 h-80 blur-2xl rounded-full bg-gray-800 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 absolute"></div>
          <Lottie className="" animationData={avatarAnimation} loop={true} />
        </div>

        <div className="px-10 min-h-fit items-center justify-center flex">
          <div className="w-full h-fit space-y-10">
            <h2 className="font-thin text-2xl flex gap-2 items-end flex-wrap w-fit">
              <span>Hi I'm </span>
              <Lottie
                animationData={handAnimation}
                loop={true}
                className="w-8"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400">
                Souhail Benlhachemi
              </span>
            </h2>

            <div className="space-y-2 w-fit">
              <h2 className="font-extralight text-lg flex gap-2 items-center">
                <span>a programmer</span>
                <Lottie
                  animationData={computerAnimation}
                  loop={true}
                  className="w-6"
                />
                <span>who</span>
              </h2>
              <h2 className="font-semibold text-3xl flex flex-wrap gap-2">
                <span>just</span>
                <Lottie
                  animationData={heartAnimation}
                  loop={true}
                  className="w-14"
                />
                <span>to code and</span>
              </h2>
              <h2 className="font-semibold text-3xl flex flex-wrap gap-2">
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
    </div>
  );
}
