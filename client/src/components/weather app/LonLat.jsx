const LonLat = ({space, lat, lon}) => {
  return ( 
    <div className={`col-span-2 md:col-span-1 hover:shadow-md w-full hover:shadow-yellow-500 order-2 md:-order-none text-black cursor-pointer bg-white space-y-4 ring-1 p-4 rounded-xl md:hover:scale-105  transition-all hover:ring-2 hover:ring-slate-900`}>

   
      <div className="h-full w-full flex flex-col justify-end text-slate-500">
      <p className="font-semibold "><span className="hidden md:inline">Latitude</span> <span className="md:hidden">Lat</span> : <span className="text-slate-700 font-semibold text-xl">{lat}</span></p>
      <p className="font-semibold "><span className="hidden md:inline">Longitude</span> <span className="md:hidden">Lon</span> : <span className="text-slate-700 font-semibold text-xl">{lon}</span></p>
      </div>
    </div>
   );
}
 
export default LonLat;