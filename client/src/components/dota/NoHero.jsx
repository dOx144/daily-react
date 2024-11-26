import { useNavigate } from "react-router-dom";
import Socials from "../Socials";

const NoHero = ({name}) => {
  const nav = useNavigate()
  return ( 
    <div className=" flex items-center justify-between flex-col min-h-[60vh]">
      <div className="w-full max-w-screen-lg text-center p-4 bg-slate-200 text-black rounded-md">
        <h2><span className="font-bold text-lg">"{name}"</span> doesnt exists</h2>
        <p>Please check the hero name and try again!! 😵</p>
        <button onClick={()=>nav('/dota')} className="py-2 px-5 bg-purple-400 text-white rounded-md shadow-md shadow-purple-800 active:scale-95">Go Back</button>
      </div>
      <Socials/>
    </div>
   );
}
 
export default NoHero;