import { useNavigate } from "react-router-dom"

const IntroCard = ({name, type, role, primary, id}) => {

  const nav = useNavigate()

  const colorSets = {
    agi:"#09BC8A",
    str:"#F03A47",
    int:"#276FBF",
    uni:"#A3320B"
  }

  const clgHero = () => {
    console.log('User clicked on ' , name);
    nav(`/dota/${name}`)
  }
  return ( 
    <div onClick={()=>clgHero(colorSets,primary)} className={`p-4 bg-[#f7f7f7] cursor-pointer hover:scale-[102%] transition-all shadow-2xl rounded-md text-black`}>
      <h2 className="text-3xl font-semibold lg:text-4xl min-w-fit font-Opensans">{name}</h2>
      <div className="-space-y-2 text-slate-600">
        <p className="flex items-center min-w-fit">
          <span className="text-sm basis-1/3 min-w-fit">Primary </span> 
          <span className="text-base font-semibold capitalize ">: {primary}</span>
        </p>
        <p className="flex items-center">
          <span className="text-sm basis-1/3">Attack Type </span> 
          <span className="text-base font-semibold capitalize ">: {type}</span>
        </p>
        <div className="flex items-end justify-start">
           <ul className="flex gap-2 font-semibold flex-wrap text-sm"><span className="text-slate-600">Pos:</span>{role.map((el, i)=>(
              <li key={el + i}>{el},</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default IntroCard;