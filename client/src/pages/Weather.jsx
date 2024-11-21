import GoButton from "../components/GoButton";
import { useEffect, useState } from "react";
import UserLocation from "../components/weather app/UserLocation";


const Weather = () => {
  
  const [weatherData, setWeatherData] = useState(null)
  const [name, setname]=useState('')
  const [country, setCountry]=useState('')
  const [temp, setTemp]=useState('')
  const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=${import.meta.env.VITE_WEATHER_APP}`
  const [locQuery,setLocQuery] = useState('')

  // kelvin to degree
  const kToC =(k)=>{
    if(typeof k !== 'number' || isNaN(k)){
      throw new Erro("Please provide a valid kelvin temperature as a number")
    }
    const c = k - 273.15

    return c.toFixed(2)
  }

  // fetch weather data 
  const fetchWeatherData = async() =>{
    try{
      const res = await fetch(weatherUrl)
      if(!res.ok){
        throw new Error(`Couldn't fetch the data: ${res.status} ${res.statusText}`)
      }
      const data = await res.json()
      // console.log(data,data.name,data.main.temp,typeof(data));
      setWeatherData(data)
      setCountry(data.sys.country)
      setname(data.name)
      setTemp(kToC(data.main.temp))

    }catch(err){
      console.error(err.message)
    }
  }

  // useEffect 
  useEffect(()=>{
    fetchWeatherData()
  },[])

  function userSearch(){
    console.log(`User is Searching for the weather in  "${locQuery}"`);
  }


  return ( 
  
    <div className="w-full text-white md:max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">
      <div className="flex flex-col sm:flex-row  justify-between items-center">
        <h2 className="text-4xl lg:text-6xl font-semibold">Weather App</h2>
        <GoButton link={'/'} name={'home'}/>
      </div>
      
      {/* location query section */}
      <div className="flex w-grow gap-2 md:gap-4 items-center justify-between max-w-screen-sm">
        <input
         value={locQuery} 
         onChange={e=>setLocQuery(e.target.value)}
        className="ring-2 flex-grow p-3 rounded-xl font-semibold focus:ring-yellow-400 focus:outline-none text-yellow-500"
        type="search"
        placeholder="Enter Location / City" />
        <button 
        onClick={()=>userSearch()}
        className="ring-1 px-5 py-2 rounded-xl hover:bg-yellow-400 hover:text-white hover:ring-0 text-xl font-semibold transition-all active:scale-95"><span>🔍</span> Search</button>
      </div>

      {/* content */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 gap-2">
        
        {/* main content */}
        <UserLocation space={2} name={name} country={country} temp={temp}/>


      </div>
    </div>

  );
}
 
export default Weather;