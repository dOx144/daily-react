import { Link, useNavigate } from "react-router-dom";

const HeroCta = () => {

  const nav = useNavigate()

  return ( 
    <button onClick={()=>{}} className="hover:underline group min-w-fit  hover:cursor-pointer bg-red-600 shadow-2xl text-white py-3 px-5 rounded-3xl">Open Catalog <span className="group-hover:inline hidden">{'-->'}</span></button>
   );
}
 
export default HeroCta;