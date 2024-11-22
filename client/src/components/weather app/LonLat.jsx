const LonLat = ({space, lat, lon}) => {
  return ( 
    <div className={`${space && 'col-span-2'} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 py-6 rounded-xl hover:scale-105  transition-all h-full duration-[5s]`}>
   
      <div className="h-full flex flex-col justify-end text-slate-500 ">
      <p className="font-semibold ">Latitude : <span className="text-slate-700 font-semibold text-xl">{lat}</span></p>
      <p className="font-semibold ">Longitude : <span className="text-slate-700 font-semibold text-xl">{lon}</span></p>
      </div>
    </div>
   );
}
 
export default LonLat;