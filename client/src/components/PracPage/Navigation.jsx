import { useState } from "react";

const Navigation = ({toggleLogin}) => {
  const [links,setLinks]=useState(["home","cakes","contacts","blog"])

  return ( 
        <div className=" sm:flex w-full items-center mt-8 justify-around mx-auto max-w-screen-lg">
          {/* company logo / main page  */}
          <h2 className="text-4xl font-bold font-mono">Cakkes</h2>
  
          {/* navigation */}
          <nav className="flex items-center justify-center gap-8 w-auto">
            {links.map((el,i)=>(
              <li className="font-semibold text-xl capitalize list-none" key={`${el}+${i}`}>{el}</li>
            ))}
          </nav>

          <div className="flex items-center justify-center gap-4 ">
            <p>🔍</p>
            <p>👜</p>
            <button className="ring-2 max-w-fit mx-auto px-5 py-2 rounded-3xl active:scale-95" onClick={toggleLogin}>Login</button>
          </div>
        </div>
   );
}
 
export default Navigation;