//imports
import Navbar from '@/components/navbar';
import { FiChevronDown } from 'react-icons/fi';
import Hero from '@/components/hero';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen space-y-8 lg:space-y-12 relative">
        <div className="absolute rounded-full w-72 h-72 lg:w-96 lg:h-96 scale-150 top-40 left-24 z-0 blur-3xl bg-slate-800 animate-blob"></div>
        <div className="absolute rounded-full w-72 h-72 lg:w-96 lg:h-96 scale-100 top-80 left-72 z-0 blur-3xl bg-slate-800 animate-circle"></div>
        <div className="absolute rounded-full w-72 h-72 lg:w-96 lg:h-96 scale-150 top-32 left-3/4 z-0 blur-2xl bg-slate-800 animate-circle2"></div>
        <Navbar />
        <Header />
        <Hero />
        <FiChevronDown className="mx-auto font-black text-6xl animate-bounce cursor-pointer mt-4" />
      </div>
    </div>
  );
}
