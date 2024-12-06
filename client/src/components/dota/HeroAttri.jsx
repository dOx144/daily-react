const HeroAttri = ({strLogo, agiLogo, intLogo, heroData}) => {
  return ( 
    <div className="">
    <h2 className="font-semibold text-lg">Attributes</h2>
    <div className="flex max-w-44 items-center gap-1">
      <img className="size-5" src={strLogo} alt="Str_icon" />
      <div className="flex items-center justify-between w-full">
        <p>Str</p>
        <div className="flex items-center gap-2">
          <p>
            {heroData.base_str}
          </p>
          <p className="min-w-20 text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.str_gain} per lvl</p>
        </div>
      </div>
    </div>
    <div className="flex max-w-44 items-center gap-1">
      <img className="size-5" src={agiLogo} alt="Agi_icon" />
      <div className="flex items-center justify-between w-full">
        <p>Agi</p>
        <div className="flex items-center gap-2">
          <p>
            {heroData.base_agi}
          </p>
          <p className="min-w-20 text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.agi_gain} per lvl</p>
        </div>
      </div>
    </div>
    <div className="flex max-w-44 items-center gap-1">
      <img className="size-5" src={intLogo} alt="Int_icon" />
      <div className="flex items-center justify-between w-full">
        <p>Int</p>
        <div className="flex items-center gap-2">
          <p> 
            {heroData.base_int}
          </p>
          <p className="min-w-20 text-xs translate-y-1 animate-pulse text-slate-300">+{heroData.int_gain} per lvl</p>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default HeroAttri;