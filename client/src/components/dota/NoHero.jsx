import { useNavigate } from "react-router-dom";
import Socials from "../Socials";

const NoHero = () => {
  const nav = useNavigate()
  const goBack = () =>{
    nav(-1)
  }
  return ( 
    <div className=" flex items-center justify-between flex-col min-h-[60vh]">
      <div className="w-full max-w-screen-lg text-center p-4 bg-slate-200 text-black rounded-md">
        <p>Please check the name and try again!! 😵</p>
        <button onClick={goBack} className="py-2 px-5 bg-purple-400 text-white rounded-md shadow-md shadow-purple-800 active:scale-95">Go Back</button>
      </div>
      <Socials/>
    </div>
   );
}
 
export default NoHero;