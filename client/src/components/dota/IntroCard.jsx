const IntroCard = ({name, type, role, primary}) => {
  const clgHero = () => {
    console.log('User Clicked' + name);
  }
  return ( 
    <div onClick={()=>clgHero()} className="p-4 bg-[#F0F2A6] cursor-pointer hover:scale-105 transition-all shadow-2xl rounded-md text-black">
      <h2 className="text-3xl font-semibold lg:text-4xl min-w-fit">{name}</h2>
      <div className="-space-y-2 text-slate-600">
        <p>
          <span className="text-sm">Primary attribute:</span> 
          <span className="text-base font-semibold capitalize ">{primary}</span>
        </p>
        <p>
          <span className="text-sm">Attack Type:</span> 
          <span className="text-base font-semibold capitalize ">{type}</span>
        </p>
        <div className="flex items-end justify-start gap-2 ">
          <p className="text-sm">Pos: </p>
          <ul className="flex gap-2 font-semibold">
            {role.map((el, i)=>(
              <li key={el + i}>{el},</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default IntroCard;