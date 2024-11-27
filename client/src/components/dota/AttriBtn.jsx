import { useState } from "react";

const AttriBtn = ({el, setActiveAttr, activeAttr}) => {
  const [isActive, setIsActive] = useState(false)

  function setActive(){
    setIsActive(!isActive)
  }

  return ( 
    <button 
      onClick={()=>setActive()}
    className={`size-4 md:size-5 relative p-1 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
        <img src={el.logo} alt={el.value + '-logo'} className="absolute top-0 left-0" />
    </button>
   );
}
 
export default AttriBtn;