const WeatherWind = ({space}) => {
  return ( 
    <div className={`${space && 'col-span-2'} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 rounded-xl hover:scale-105  transition-all h-full`}>

        <div className="w-full">
          <h2 className="font-semibold text-2xl">Rain</h2>
          <p className="font-semibold text-slate-500
          ">Light Rain</p>
        </div>  
      <div className="min-h-full font-semibold text-slate-500 grid grid-cols-3 gap-5 ">
       
        <div className="min-w-full">
          <div className="flex w-full items-center justify-between">
            <h2>Wind</h2>
            <p className="text-slate-900">2.2 km/h</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <h2>Deg</h2>
            <p>2.2 km/h</p>
          </div>
        </div>
        <div className=" min-w-full ">
          <div className="flex w-full items-center justify-between">
            <h2>Humidity</h2>
            <p className="text-slate-900">75%</p>
          </div>
          <div className="flex w-full items-center justify-between">
            <h2>Rain</h2>
            <p className="text-slate-900">.5%</p>
          </div>
        </div>
      </div>

    </div>
   );
}
 
export default WeatherWind;