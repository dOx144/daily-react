import {  useState } from 'react';
import {backOut, easeOut, motion} from 'framer-motion'
import Cta from '../components/Cta';
import Socials from '../components/Socials';

const Home = () => {

  return (
    <div className=' flex flex-col p-4 h-screen items-center justify-between'>
      <div className='flex bg-[#1C1C1E] text-white flex-col  items-center justify-center gap-5 xl:flex-row h-full'>
        {/* <Cta link='/blogs' goto={'blogs'} /> */}
        <Cta link='/weather' goto={'weather'} />
        {/* <Cta link='/food' goto={'food'} /> */}
        <Cta link='/dota' goto={'dota'} />
      </div>
      <Socials/>
    </div>
  );
};

export default Home;
