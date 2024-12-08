import { Link, useNavigate } from "react-router-dom";

const GoButton = ({link,name}) => {
  const nav = useNavigate()

  const goNav = () => {
    setTimeout(() => {
      nav(link)
      window.location.reload()
    }, 300);
  }

  return ( 
    <button className="px-5 py-2 ring-1 hover:bg-[#d9d9e5] hover:text-black hover:ring-0 hover:scale-110 rounded-md capitalize " onClick={goNav}>{name}</button>
   );
}
 
export default GoButton;