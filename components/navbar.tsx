//imports
import { AiOutlineLine } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <h1 className="text-2xl cursor-pointer font-semibold italic text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400">
        Website.dev
      </h1>
      <ul className="flex gap-12 items-center">
        <li className="relative">
          <a
            href="#"
            className="uppercase font-semibold text-sm text-transparent bg-clip-text bg-gradient-to-bl from-green-400 to-blue-400"
          >
            home
          </a>
          <AiOutlineLine className="absolute left-2/4 -translate-x-2/4" />
        </li>
        <li className="">
          <a href="#" className="uppercase font-semibold text-sm">
            work
          </a>
        </li>
        <li className="">
          <a href="#" className="uppercase font-semibold text-sm ">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
