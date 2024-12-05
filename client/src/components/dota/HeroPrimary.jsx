const HeroPrimary = ({heroData, setLogo }) => {
  return ( 
    <div>
    {/* Hero Primary Attribute */}
       <div className="text-sm text-slate-400 font-semibold capitalize">
        <div className="flex items-center gap-1">
          <span>Primary:</span>
          <p className="text-slate-100">{heroData?.primary_attr}</p>
          <img className="size-6" src={setLogo(heroData?.primary_attr)} alt="Primary Attribute Logo" />
        </div>
       </div>
        <p className="text-4xl lg:text-5xl font-semibold">{heroData?.localized_name}</p>
        <p className="text-sm font-bold text-slate-200">{heroData?.attack_type} - {heroData?.roles.map(e=>`${e}, `)}</p>
    </div>
   );
}
 
export default HeroPrimary;