import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSearch from "../components/dota/HeroSearch";
import Loading from "../components/Loading";

const DotaHero = () => {
const {id} = useParams()
const [isLoading, setIsLoading] = useState(true)

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
    const heroData = data.find(hero => hero.localized_name === heroId);

    // Log the specific hero data
    console.log(heroData);
    setIsLoading(false)

  } catch (err) {
    console.error("Error:", err.message);
  }
};

useEffect(()=>{
  fetchUserHero(id)
},[])


  return ( 
    <div className="w-full  text-white overflow-hidden md:max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">
      <HeroSearch id={id}/>
      
      {isLoading ? <Loading/> : 
     
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold capitalize"> {id} </h2>
      </div>
      }
    </div>
   );
}
 
export default DotaHero;