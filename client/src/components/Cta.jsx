import { Link } from "react-router-dom";

const Cta = ({link, goto}) => {

  return ( 
    <Link className='ring-2 font-medium px-4 py-2 rounded-md hover:ring-yellow-300 hover:ring-4 active:scale-95 transition-all hover:bg-gray-700 hover:text-white capitalize w-44 min-w-fit' to={link}>go to {goto}</Link>
   );
}
 
export default Cta;