import Herobase from "./HeroBase";

const NextHero = ({nextHero, setLogo, nav}) => {

  return ( 
    <div className="ring-2 ring-slate-800 hover:ring-2 hover:ring-slate-500 shadow-xl hover:shadow-slate-700 transition-all p-2 group md:col-span-1 rounded-md w-full">
      {!nextHero && heroData.localized_name}
      <div className="flex flex-col group space-y-4 justify-between w-full h-full">
       <div className="space-y-1">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">{nextHero?.localized_name}</h2>
          <div className="flex flex-col items-start gap-1 text-xs opacity-70 group-hover:opacity-95">
            <div className="flex gap-1">
              <span>Primary: </span>
              <p className="text-slate-100">{nextHero?.primary_attr}</p>
              <img className="size-4" src={setLogo(nextHero?.primary_attr)} alt="Primary Attribute Logo" />
            </div>
            <div>
              <p>Attack type: <span className="font-semibold">{nextHero.attack_type}</span></p>
            </div>
          </div>
       </div>
       <Herobase heroData={nextHero}/>
        <button onClick={()=>{
          nav(`/dota/${nextHero.localized_name}`)
          setTimeout(() => {
            window.location.reload()
          }, 300);
        }} className="w-full group-hover:ring-2 group-hover:ring-slate-300 group-hover:font-semibold active:scale-95 ring-2 px-5 py-2 rounded-md transition-all">
          Next
        </button>
      </div>
    </div>
   );
}
 
export default NextHero;