const AttriElComp = ({logo, base, gain, name}) => {
  return ( 
    <div className="flex max-w-44 items-center gap-1">
        <img className="size-5" src={logo} alt="Str_icon" />
        <div className="flex items-center justify-between w-full">
          <p className="capitalize">{name.slice(0,3)}</p>
          <div className="flex items-center gap-2">
            <p>
              {base}
            </p>
            <p title={`${name} Gain Per level`} className="min-w-16 text-left text-xs translate-y-1 animate-pulse text-slate-300">+{gain} per lvl</p>
          </div>
        </div>
      </div>
   );
}
 
export default AttriElComp;