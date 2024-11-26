import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSearch from "../components/dota/HeroSearch";
import Loading from "../components/Loading";
import allLogo from "../assets/dota/hero_universal.png";
import intLogo from '../assets/dota/hero_intelligence.png';
import agiLogo from "../assets/dota/hero_agility.png";
import strLogo from "../assets/dota/hero_strength.png";
import NoHero from "../components/dota/NoHero";
import Socials from "../components/Socials";


const DotaHero = () => {
const {id} = useParams()
const [isLoading, setIsLoading] = useState(true)
const [heroData, setHeroData] = useState(null)
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

    // Filter data for the specific hero
    const heroData = data.find(x => x.localized_name === heroId);

    if(heroData===undefined){
      setNotHero(true)
    }
    // Log the specific hero data
    console.log(heroData);

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
      <h2 className="text-2xl md:text-5xl font-semibold">Dotapedia</h2>
      <HeroSearch id={id}/>
      
      {isLoading ? (
            <Loading />
          ) : notHero ? (
            <NoHero name={id} />
          ) : (
              <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                <div className="w-full ring-1 p-2 space-y-2">
                    {/* Hero Primary Attribute */}
                    <div className="text-sm text-slate-400 font-semibold capitalize">
                      <div className="flex items-center gap-1">
                        <span>Primary:</span>
                        <p className="text-slate-100">{heroData?.primary_attr}</p>
                        <img className="size-6" src={setLogo(heroData?.primary_attr)} alt="Primary Attribute Logo" />
                      </div>
                    </div>

                    {/* Hero Name */}
                   <div className="space-y-1">
                    <p className="text-4xl lg:text-5xl font-semibold">{heroData?.localized_name}</p>
                    <p className="text-sm font-bold text-slate-200">{heroData?.attack_type} - {heroData?.roles.map(e=>`${e}, `)}</p>
                   </div>

                     {/* Hero Attributes */}
                     <div>
                      <h2 className="font-semibold text-lg">Attributes</h2>
                      <div className="flex max-w-44 items-center gap-1">
                        <img className="size-5" src={strLogo} alt="Str_icon" />
                        <div className="flex items-center justify-between w-full">
                          <p>Str</p>
                          <div className="flex items-center gap-2">
                            <p>
                              {heroData.base_str}
                            </p>
                            <p className="text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.str_gain} per lvl</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex max-w-44 items-center gap-1">
                        <img className="size-5" src={agiLogo} alt="Agi_icon" />
                        <div className="flex items-center justify-between w-full">
                          <p>Agi</p>
                          <div className="flex items-center gap-2">
                            <p>
                              {heroData.base_agi}
                            </p>
                            <p className="text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.agi_gain} per lvl</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex max-w-44 items-center gap-1">
                        <img className="size-5" src={intLogo} alt="Int_icon" />
                        <div className="flex items-center justify-between w-full">
                          <p>Int</p>
                          <div className="flex items-center gap-2">
                            <p> 
                              {heroData.base_int}
                            </p>
                            <p className="text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.int_gain} per lvl</p>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
                <div className="ring-1 p-2 md:basis-1/4">
                  <h2>Temp box</h2>
                </div>
            </div>
            )}

            <Socials/>
    </div>
   );
}
 
export default DotaHero;