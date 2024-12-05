const Herobase = ({heroData}) => {
  return ( 
    <div className="font-semibold text-center cursor-default">
      <h2 className="">Base Status:</h2>
      <div className="w-full flex gap-2 flex-col *:rounded-md *:shadow-inner *:shadow-slate-600 *:transition-all text-slate-100">
       <div className="flex items-center justify-between px-2 bg-green-400 hover:scale-[102%] ">
        <p className="w-full text-center">{heroData.base_health} / {heroData.base_health}</p>
        <span className="text-sm text-green-800">+{heroData.base_health_regen}</span>
       </div>
      <div className="flex items-center justify-between px-2 bg-blue-400 hover:scale-[102%]">
       <p className="w-full text-center">{heroData.base_mana} / {heroData.base_mana}</p>
       <span className="text-sm text-blue-800">+{heroData.base_mana_regen}</span>
      </div>
      </div>
    </div>
   );
}
 
export default Herobase;