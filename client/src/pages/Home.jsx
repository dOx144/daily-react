import Cta from '../components/Cta';
import Socials from '../components/Socials';
import dotaLogo from '../assets/dota_footer_logo.png'
import weatherLogo from '../assets/weatherlogo.jpg'

const Home = () => {

  return (
    <div className=' flex flex-col p-4 h-screen items-center justify-between'>
      <div className='flex text-white flex-col  items-center justify-center gap-5 xl:flex-row h-full'>
        {/* <Cta link='/blogs' goto={'blogs'} /> */}
          <div >
            <Cta link='/weather' goto={'weather'} img={weatherLogo} />
          </div>      

          {/* <Cta link='/food' goto={'food'} /> */}
          <div >
            <Cta link='/dota' img={dotaLogo}/>
          </div>  
      </div>
      <Socials/>
    </div>
  );
};

export default Home;
