import Image from "next/image";
import { AiFillHome } from 'react-icons/ai';
import { FaMicrophoneAlt } from 'react-icons/fa';
import { MdOutlineStairs } from 'react-icons/md';
import { BsFillStopwatchFill } from 'react-icons/bs';
import { CgMoreR } from 'react-icons/cg';
import { IconButton } from '@material-ui/core';
function Sidebar() {
  return (
    <section className="fixed top-0 left-0 bg-black z-40 flex flex-col items-center p-3 w-[80px] h-screen space-y-8">
      <Image src="https://rb.gy/xkacau" width={56} height={56} objectFit="contain"/>
      <div className="text-white space-y-7">
          <AiFillHome className="cursor-pointer"/>
          <FaMicrophoneAlt className="cursor-pointer text-slate-500"/>
          <MdOutlineStairs className="cursor-pointer text-slate-500"/>
          <BsFillStopwatchFill className="cursor-pointer text-slate-500"/>
          <CgMoreR className="cursor-pointer text-slate-500"/>
      </div>
    </section>
  );
}

export default Sidebar;
