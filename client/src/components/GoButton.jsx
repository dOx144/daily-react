import { Link } from "react-router-dom";

const GoButton = ({link,name}) => {
  return ( 
    <Link className="px-5 py-2 ring-1 hover:bg-[#1C1C1E] hover:text-white hover:ring-0 hover:scale-110 rounded-md capitalize " to={link}>{name}</Link>
   );
}
 
export default GoButton;