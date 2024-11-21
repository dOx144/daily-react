import GoButton from "../components/GoButton";
import { useEffect, useState } from "react";
import UserLocation from "../components/weather app/UserLocation";
import { useSearchParams } from "react-router-dom";

const Weather = () => {

  const [weatherData, setWeatherData] = useState(null)
  const [name, setname]=useState('')
  const [country, setCountry]=useState('')
  const [temp, setTemp]=useState('')
  const weatherUrl= 'https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=0011e5889505b2eb43a09d41aea8f65f'

  const kToC =(k)=>{
    if(typeof k !== 'number' || isNaN(k)){
      throw new Erro("Please provide a valid kelvin temperature as a number")
    }
    const c = k - 273.15

    return c.toFixed(2)
  }

  const fetchWeatherData = async() =>{
    try{
      const res = await fetch(weatherUrl)
      if(!res.ok){
        throw new Error(`Couldn't fetch the data: ${res.status} ${res.statusText}`)
      }
      const data = await res.json()
      console.log(data,data.name,data.main.temp,typeof(data));
      setWeatherData(data)
      setCountry(data.sys.country)
      setname(data.name)
      setTemp(kToC(data.main.temp))

    }catch(err){
      console.error(err.message)
    }
  }
  useEffect(()=>{
    fetchWeatherData()
  },[])

  return ( 
  
    <div className="max-w-screen-xl mx-auto mt-8 md:mt-24 p-4 md:p-8 space-y-8 md:space-y-16">
      <div className="flex flex-col sm:flex-row  justify-between items-center">
        <h2 className="text-4xl font-semibold">This is Weather page</h2>
        <GoButton link={'/'} name={'home'}/>
      </div>
      
      {/* content */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 sm:gap-3 gap-2">
        
        {/* main content */}
        <UserLocation name={name} country={country} temp={temp}/>
        <UserLocation space={2} name={name} country={country} temp={temp}/>
        <UserLocation space={2} name={name} country={country} temp={temp}/>
        <UserLocation name={name} country={country} temp={temp}/>


      </div>
    </div>

  );
}
 
export default Weather;