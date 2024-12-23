const WeatherWind = ({space, main, mainType, speed, deg, humidity, prob}) => {
  return ( 
    <div className={`${space && `col-span-${space}`} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 rounded-xl md:hover:scale-105  transition-all h-full hover:ring-2 hover:ring-slate-900 `}>

        <div className="w-full">
          <p className="text-xs font-bold text-slate-500 ">Weather status</p>
          <div>
            <h2 className="font-semibold text-2xl md:text-4xl capitalize">{main}</h2>
            <p className="font-semibold text-slate-500
            ">{mainType}</p>
          </div>
        </div>  
      <div className="min-h-full font-semibold text-slate-500 flex justify-between gap-8 ">
       
        <div className="w-full *:bg-slate-100 *:p-1 *:rounded-md text-slate-800 space-y-1">
          <div className="flex w-full items-center justify-between">
            <h2>Wind</h2>
            <p className="text-slate-900">{speed} km/h</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <h2>Deg</h2>
            <p>{deg} km/h</p>
          </div>
        </div>

        <div className="w-full *:bg-slate-100 *:p-1 *:rounded-md text-slate-800 space-y-1" >
          <div className="flex w-full items-center justify-between">
            <h2>Humidity</h2>
            <p className="text-slate-900">{humidity}%</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <h2>Rain %</h2>
            <p className="text-slate-900">{prob}</p>
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default WeatherWind;