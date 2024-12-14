import { useEffect, useState } from "react";
import HeroShowcase from "../components/dota/HeroShowcase";
import Socials from '../components/Socials';
import Loading from "../components/Loading";
import HeroSearch from "../components/dota/HeroSearch";
import allLogo from "../assets/dota/hero_universal.png";
import intLogo from '../assets/dota/hero_intelligence.png';
import agiLogo from "../assets/dota/hero_agility.png";
import strLogo from "../assets/dota/hero_strength.png";
import { useNavigate } from "react-router-dom";
import GoButton from "../components/GoButton";

const Dota = () => {
  
  const nav = useNavigate()
  const [heroes, setHeroes] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [heroId, setHeroId] = useState('')
  const [activeAttr, setActiveAttr] = useState({})

  const [filter, setFilter] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [changeMain, setChangeMain] = useState(true)


  const [attri, setAttri] = useState([
    {
      value:'agi',
      logo:agiLogo
    },
    {
      value:'str',
      logo:strLogo
    },
    {
      value:'int',
      logo:intLogo
    },
    {
      value:'uni',
      logo:allLogo
    }
  ])

  const getHeroes = async() =>{
    try{
    const res = await fetch(import.meta.env.VITE_DOTA_ALL_HEROES)

    if(!res.ok){
      throw new Error('There is an Error while fetching', res.status , ":" + res.statusText);
    }

    const data = await res.json()
    
    // console.log(data);
    setHeroes(data)
    setIsLoading(false)

    }catch(err){
      console.error(err.message)
    }
  }

  useEffect(()=>{
    getHeroes()
    document.title='Dota'
  },[])

  // later feature 
  // const checkActiveComplexity = (e) =>{
  //   setActiveAttri(prev=>[...prev,e.target.value])
  //   console.log(activeComplexity);
  // }

  const handleFilterChange = (filterValue) => {
    setChangeMain(false)
    setFilter(filterValue);
    if (filterValue === "") {
      setFilteredHeroes(heroes); // Reset to all heroes if no filter
    } else {
      const filtered = heroes.filter((hero) => hero.primary_attr === filterValue);
      setFilteredHeroes(filtered);
    }
  };
  
  const handleClick = (e) =>{
    console.log(e.currentTarget.value + " Clicked!");
    handleFilterChange(e.currentTarget.value)
    // console.log(filteredHeroes);
  }
  return ( 
    <div className="w-full  text-white overflow-hidden md:max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">

        {/* hero title */}
      <div className="space-y-4">

        <div className="flex w-full items-center justify-between">
          <button onClick={()=>nav('/dota')} className="text-5xl md:text-6xl font-semibold text-slate-50 font-Audiowide">Dotapedia</button>
            <GoButton link={'/'} name={"Go to Main"}/>
        </div>

        <p className="font-semibold text-slate-300">From versatile tacticians to relentless warriors and elusive tricksters, Dota 2's hero roster offers boundless variety. Claim your favorite hero's glory and dominate the battlefield with unmatched skill and game-changing ultimates</p>
      </div>

      {/* main content */}
      <div className="space-y-4">
        
      {/* query / search */}
      <HeroSearch/>

      {/* filter section  */}
        <div className="">
          <h2 className="font-Opensans text-slate-300">Filter Attributes:</h2>

          <div className="flex gap-2 *:size-8 ">
            <button onClick={e=>handleClick(e)} value={'agi'} className="opacity-75 hover:opacity-100 active:opacity-100">
              <img src={agiLogo} alt="attribute_logo" title='Agility'/>
            </button>
            <button onClick={handleClick} value={'str'} className="opacity-75 hover:opacity-100 active:opacity-100">
              <img src={strLogo} alt="attribute_logo" title='Strength'/>
            </button>
            <button onClick={handleClick} value={'int'} className="opacity-75 hover:opacity-100 active:opacity-100">
              <img src={intLogo} alt="attribute_logo" title='Intelligence'/>
            </button>
            <button onClick={handleClick} value={'all'} className="opacity-75 hover:opacity-100 active:opacity-100">
              <img src={allLogo} alt="attribute_logo" title='Universals'/>
            </button>
          </div>
        </div>

      {/* {loading} */}
      {isLoading && <Loading/>}

      {/* hero showcase */}
      <HeroShowcase heroes={filteredHeroes}/>

      {changeMain && 
      <HeroShowcase heroes={heroes}/>
      }

      </div>

      <Socials/>
    </div>
   );
}
 
export default Dota;