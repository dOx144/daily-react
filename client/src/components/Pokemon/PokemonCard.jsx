import { useState } from "react";

const PokemonCard = ({name,desc}) => {


  const [isActive, setIsActive] = useState(false)

  return ( 
    <li className={`p-2 list-none ring-2 hover:bg-slate-400 hover:text-white hover:ring-0 rounded-xl hover:scale-110  bg-white transition-all`}>
      <h2 className="text-xl font-semibold capitalize font-mono">{name}</h2>
      {/* <div>
        <p className={`line-clamp-none`}>{desc} </p>
      </div> */}
    </li>
   );
}
 
export default PokemonCard;