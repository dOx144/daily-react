import {  useState } from 'react';
import {backOut, easeOut, motion} from 'framer-motion'
import Cta from '../components/Cta';
import Socials from '../components/Socials';
import Weather from './Weather';

const Home = () => {

  return (
    <div className=' flex flex-col p-4 h-screen items-center justify-between'>
      <div className='flex text-white flex-col  items-center justify-center gap-5 xl:flex-row h-full'>
        {/* <Cta link='/blogs' goto={'blogs'} /> */}
          <div className='flex'>
            <Cta link='/weather' goto={'weather'} />
          </div>      

          {/* <Cta link='/food' goto={'food'} /> */}
          <div className='flex'>
            <Cta link='/dota' goto={'dota'} />
          </div>  
      </div>
      <Socials/>
    </div>
  );
};

export default Home;
