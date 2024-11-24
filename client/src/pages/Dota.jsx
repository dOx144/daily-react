import { useEffect, useState } from "react";
import HeroShowcase from "../components/dota/HeroShowcase";
import Socials from '../components/Socials';
import Loading from "../components/Loading";
import HeroSearch from "../components/dota/HeroSearch";

const Dota = () => {
  
  const [heroes, setHeroes] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [heroId, setHeroId] = useState('')
  const [attri, setAttri] = useState([
    {
      value:'agi',
    },
    {
      value:'str',
    },
    {
      value:'int',
    },
    {
      value:'uni',
    }
  ])
  const [activeAttri, setActiveAttri] = useState([])

  const [complexity, setComplexity] = useState([
    {
      value:'easy',
    },
    {
      value:'medium',
    },
    {
      value:'complex',
    }
  ])
  const [activeComplexity, setActiveComplexity] = useState([])


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
  },[])

  

  const checkActiveAttri = (e) =>{
    setActiveAttri(prev=>[...prev,e.target.value])
    console.log(activeAttri);
  }
  const checkActiveComplexity = (e) =>{
    setActiveAttri(prev=>[...prev,e.target.value])
    console.log(activeComplexity);
  }

  return ( 
    <div className="w-full  text-white overflow-hidden md:max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">

        {/* hero title */}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-50">Dotapedia</h2>
        <p className="font-semibold text-slate-200">From versatile tacticians to relentless warriors and elusive tricksters, Dota 2's hero roster offers boundless variety. Claim your favorite hero's glory and dominate the battlefield with unmatched skill and game-changing ultimates</p>
      </div>

      {/* main content */}
      <div className="space-y-4">
        
      {/* query / search */}
      <HeroSearch/>

      {/* filter section  */}
        <div className="">
          <h2 className="text-slate-200">Filter heroes:</h2>

          {/* filter by attributes */}
          <div className="flex items-center justify-between">
            <div className=" md:flex gap-2 items-center justify-center ">
              <h2 className="text-xl">Attributes</h2>
              <div className="flex gap-2 justify-between">
                {attri.map((el,i) => (
                  <input
                  key={el + i}
                  type="checkbox" 
                  value={el.value}
                  onClick={(e)=>checkActiveAttri(e)}
                  className="size-4 md:size-5 bg-red-400"
                    />
                ))}
              </div>
            </div>

            {/* filter by complexxity */}
            <div className=" md:flex gap-2 items-center justify-center ">
              <h2 className="text-xl">Complexxity</h2>
              <div className="flex gap-2 justify-between">
                {complexity.map((el,i) => (
                    <input
                    key={el + i}
                    type="checkbox" 
                    value={el.value}
                    onClick={(e)=>checkActiveComplexity(e)}
                    className="size-4 md:size-5 bg-red-400"
                      />
                  ))}
              </div>
            </div>
          </div>
        </div>

      {/* {loading} */}
      {isLoading && <Loading/>}

      {/* hero showcase */}
      <HeroShowcase heroes={heroes}/>

      </div>

      <Socials/>
    </div>
   );
}
 
export default Dota;