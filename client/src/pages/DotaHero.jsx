import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroSearch from "../components/dota/HeroSearch";
import Loading from "../components/Loading";
import allLogo from "../assets/dota/hero_universal.png";
import intLogo from '../assets/dota/hero_intelligence.png';
import agiLogo from "../assets/dota/hero_agility.png";
import strLogo from "../assets/dota/hero_strength.png";
import NoHero from "../components/dota/NoHero";
import Socials from "../components/Socials";
import NextHero from "../components/dota/NextHero";
import HeroAttri from "../components/dota/HeroAttri";
import HeroPrimary from "../components/dota/HeroPrimary";
import Herobase from "../components/dota/HeroBase";
import OtherStatus from "../components/dota/OtherStatus"
import GoButton from "../components/GoButton";



const DotaHero = () => {
  
const nav = useNavigate()
const { id } = useParams()
const [isLoading, setIsLoading] = useState(true)
const [heroData, setHeroData] = useState(null)
const [nextHero, setNextHero] = useState(null)
const [notHero, setNotHero] = useState(false)

function setLogo(x){
  if(x==='all'){
    return allLogo
  }
  if(x==='agi'){
    return agiLogo
  }
  if(x==='int'){
    return intLogo
  }
  if(x==='str'){
    return strLogo
  }
}

// const fetchUserHero = async() =>{
//   try{
//     const res = await fetch(import.meta.env.VITE_DOTA_ONE_HERO);

//     if(!res.ok){
//       throw new Error(`Couldn't fetch the data: ` , res.status, " MESSAGE !!!" , res.statusText)
//     }

//     const data = res.json()

//     console.log(data);

//   }catch(err){
//     console.log(err.message);
//   }
// }

  // gpt improvised 
const fetchUserHero = async (heroId) => {
  try {
    const res = await fetch(import.meta.env.VITE_DOTA_ONE_HERO);

    if (!res.ok) {
      throw new Error(
        `Couldn't fetch the data: ${res.status} MESSAGE: ${res.statusText}`
      );
    }

    const data = await res.json();
    // console.log(data);

    // Filter data for the specific hero
    const heroData = data.find(x => x.localized_name === heroId);

    // get next hero 
    let nextHeroId = data.indexOf(heroData) + 1;

    // console.log(nextHeroId);
    let nextHero = data[nextHeroId]

    if(heroId === "Kez"){
      nextHero = data[0]
    }

    setNextHero(nextHero)

    //finish get next hero 


    if(heroData===undefined){
      setNotHero(true)
    }
    // Log the specific hero data
    // console.log(heroData);

    setHeroData(heroData)
    setIsLoading(false)
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(()=>{
  fetchUserHero(id)
},[])


  return ( 
    <div className="w-full  text-white overflow-hidden md:max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">

      <div className="flex w-full items-center justify-between">
       <button onClick={()=>nav('/dota')} className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-50">Dotapedia</button>
        <GoButton link={'/'} name={"Go to Main"}/>
      </div>

      {/* hero search query */}
      <HeroSearch id={id}/>
      
      {isLoading ? (
            <Loading />
          ) : notHero ? (
            <NoHero name={id} />
          ) : (
              <div className="grid md:grid-cols-3 *:rounded-md">
                
                <div className="w-full ring-2 ring-slate-800 hover:ring-2 hover:ring-slate-500 shadow-xl hover:shadow-slate-700 p-2 space-y-2 transition-all md:col-span-2">

                    {/* Hero Name */}
                  <HeroPrimary heroData={heroData} setLogo={setLogo}/>

                  <div className="w-full space-y-2 grid grid-cols-1 md:grid-cols-2 cursor-default">

                      {/* Hero Attributes */}
                      <HeroAttri strLogo={strLogo} agiLogo={agiLogo} intLogo={intLogo} heroData={heroData}/>

                      {/* armor / attack status */}
                      <OtherStatus heroData={heroData}/>

                      {/* hero status */}
                      <Herobase heroData={heroData}/>
                  </div>

                </div>
                  {/* go to / next hero  */}
                <NextHero nextHero={nextHero} setLogo={setLogo} nav={nav}/>

            </div>
            )}

            <Socials/>
    </div>
   );
}
 
export default DotaHero;