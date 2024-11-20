import { Link } from "react-router-dom";

const Cta = ({link, goto}) => {

  return ( 
    <Link className='ring-2 list-none font-medium px-4 py-2 rounded-md ring-[#7cfc00] hover:ring-0 hover:scale-110 active:scale-95 transition-all hover:bg-[#6F00FF] hover:text-white capitalize w-44 min-w-fit' to={link}>go to {goto}</Link>
   );
}
 
export default Cta;