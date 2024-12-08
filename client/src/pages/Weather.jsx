import GoButton from "../components/GoButton";
import { useEffect, useState } from "react";
import UserLocation from "../components/weather app/UserLocation";
import GoldenHour from "../components/weather app/GoldenHour";
import LonLat from "../components/weather app/LonLat";
import WeatherWind from "../components/weather app/WeatherWind";
import Socials from "../components/Socials";
import Loading from "../components/Loading";
import NoHero from "../components/dota/NoHero";
import { useParams } from "react-router-dom";

const Weather = () => {
  const {id} = useParams()
  const [weatherData, setWeatherData] = useState(null)
  const [name, setname]=useState('')
  const [country, setCountry]=useState('')
  const [temp, setTemp]=useState(null)
  const [kel, setKel] = useState(null)
  const [wetTime, setWetTime] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [notExist, setNotExist] = useState(false)
  const [cord, setCord] = useState({
    lat:null,
    lon:null
  })
  const [rain, setRain] = useState({
    weather:[],
    main:'',
    wind:''
  });
  // const [isErr,setIsErr] = useState(false)
  const [locQuery,setLocQuery] = useState('kathmandu')
  const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${locQuery}&appid=${import.meta.env.VITE_WEATHER_APP}`

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

        // if(res.status === 404){
          throw new Error("Please Enter Correct City name")
        // }

        // throw new Error(`Couldn't fetch the data: ${res.status} ${res.statusText}`)
      }
      const data = await res.json()
      
      // console.log(data);
      // console.log(data,data.name,data.main.temp,typeof(data));

      setWeatherData(data)
      setCountry(data.sys.country)
      setname(data.name)
      setTemp(kToC(data.main.temp))
      setKel(data.main.temp)
      setWetTime(data.sys)

      setCord(prev=>({
        ...prev,lat : data.coord.lat, lon:data.coord.lon
      }))

      setRain(prev => ({
        ...prev,
          weather:data?.weather || null,
          main:data?.main || null,
          wind:data?.wind || null,
      }));
      setIsLoading(false)
      setNotExist(false)

    }catch(err){
      console.error(err.message)
      setLocQuery('')
      setNotExist(true)
    }
  }

  // useEffect 
  useEffect(()=>{
    fetchWeatherData()
    setLocQuery('')
  },[])

  function userSearch(e){
    setIsLoading(true)
    if(locQuery.trim()==='')
      {
        alert('Please put the city name first!')
        return
      }
      
      // console.log(rain);
    e.preventDefault()
    fetchWeatherData()
    setIsLoading(false)
    console.log(`User is Searching for the weather in  "${locQuery}"   -{IG @rashik_tamang}-`);
  }


  return ( 
  
    <div className="w-full text-white overflow-hidden md:max-w-screen-xl mx-auto mt-8  p-4  space-y-8 md:space-y-16">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl lg:text-6xl font-semibold cursor-default">Weather App</h2>
        <GoButton link={'/'} name={'home'}/>
      </div>
      
      {/* location query section */}
      <form onSubmit={(e)=>userSearch(e)} className="flex w-grow gap-2 md:gap-4 items-center justify-between max-w-screen-lg lg:max-w-screen-md">
        <input
         value={locQuery} 
         onChange={e=>setLocQuery(e.target.value)}
        className="capitalize ring-2 flex-grow p-3 rounded-xl font-semibold focus:ring-yellow-400 focus:outline-none text-slate-800"
        type="search"
        placeholder="Enter Location / City" />
        <button type="submit"
        className="ring-1 px-5 py-2 rounded-xl hover:bg-yellow-400 hover:text-white hover:ring-0 text-xl font-semibold transition-all active:scale-95">🔍<span className="hidden md:inline"> Search</span></button>
      </form>

      {/* div when error */}
      {/* {isErr && (<div className="text-red-300 text-4xl">{isErr.message}</div>)} */}

      

      {isLoading ? <Loading/> : notExist ? <NoHero name={id}/> :

      (
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-1">

        {/* main content */}
        <UserLocation 
        space={true} 
        name={name}
        country={country}
        temp={temp}
        kel={kel}/>

        <GoldenHour
         rise={wetTime?.sunrise || 0} 
         sSet={wetTime?.sunset || 0} 
         space={false}/>

        <LonLat
        lat={cord.lat}
        lon={cord.lon}
        />
      
        <WeatherWind 
        space={2} 
        main = {rain.weather[0]?.main}
        mainType = {rain.weather[0]?.description}
        speed={rain.wind.speed}
        deg = {rain.wind.deg}
        humidity={rain.main.humidity}
        prob = {rain.main.rain_probability || "--Fixing--"}
        />  
      
      </div>)
      }
      <Socials/>
    </div>

  );
}
 
export default Weather;