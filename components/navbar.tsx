//imports
import { AiOutlineLine } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="lg:flex lg:justify-between z-50 relative">
      <h1 className="text-center text-2xl cursor-pointer font-black italic text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400">
        Website.dev
      </h1>
      <ul className="hidden lg:flex gap-12 items-center">
        <li className="relative">
          <a
            href="#"
            className="uppercase font-bold text-sm text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400"
          >
            home
          </a>
          <AiOutlineLine className="absolute left-2/4 -translate-x-2/4" />
        </li>
        <li className="">
          <a href="#" className="uppercase font-bold text-sm">
            work
          </a>
        </li>
        <li className="">
          <a href="#" className="uppercase font-bold text-sm ">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
