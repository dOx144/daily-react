const Herobase = ({heroData}) => {

  const base_str = heroData.base_str
  const base_int = heroData.base_int
  const base_health = heroData.base_health
  const base_mana = heroData.base_mana
  const base_health_regen = heroData.base_health_regen
  const base_mana_regen = heroData.base_mana_regen

  const hero_health = base_health + (base_str * 22)
  const hero_regen = base_health_regen + (base_str / 10 )
  const hero_mana = base_mana + (base_int * 12)
  const hero_mana_regen = base_mana_regen  + ( (base_int * 5) / 100)

  return ( 
    <div className="font-semibold text-center cursor-default col-span-2 lg:col-span-2">
      <h2 className="">Base Status:</h2>
      <div className="w-full flex gap-2 flex-col *:rounded-md *:shadow-inner *:shadow-slate-600 *:transition-all text-slate-100">
       <div className="flex items-center justify-between px-2 bg-green-400 hover:scale-[102%] ">
        <p title="Health" className="w-full text-center">{hero_health} / {hero_health}</p>
        <span title="Health Regen" className="text-sm text-green-800">+{hero_regen.toFixed(1)}</span>
       </div>
      <div className="flex items-center justify-between px-2 bg-blue-400 hover:scale-[102%]">
       <p title="Mana" className="w-full text-center">{hero_mana} / {hero_mana}</p>
       <span title="Mana Regen" className="text-sm text-blue-800">+{hero_mana_regen.toFixed(1)}</span>
      </div>
      </div>
    </div>
   );
}
 
export default Herobase;