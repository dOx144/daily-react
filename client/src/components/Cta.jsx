import { Link } from "react-router-dom";

const Cta = ({link, goto, img}) => {

  return ( 
    <Link className={`md:ring-2 list-none font-medium rounded-md  ring-green-300 transition-all
     hover:text-white hover:-translate-y-2 hover:-translate-x-2 hover:shadow-md hover:ring-[#7cfc00] hover:shadow-yellow-400 capitalize md:w-48 ${goto ? 'px-x': 'px-2'} md:h-14 min-w-fit w-full relative overflow-hidden grid grid-cols-1 place-items-center max-h-[12vh]`} to={link}>
      <img src={img} alt={goto + " logo"} />
      {goto &&
       <p className="text-xl text-black absolute">go to {goto}</p>
       }
    </Link>
   );
}
 
export default Cta;