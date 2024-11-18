import Navigation from "../components/PracPage/Navigation";
import Cta from "../components/Cta"
import PracProduct from "../components/PracPage/PracProduct";
import HeroCta from "../components/PracPage/HeroCta";
import Footer from "../components/PracPage/Footer";
import { useState } from "react";
import Login from "../components/Login";

const PracPage = () => {
  const lists = 5
  const [openLogin, setOpenLogin] = useState(false)


  const toggleLogin = () =>{
    setOpenLogin(!openLogin)
  }
  return ( 



    <div className="sm:space-y-8 space-y-4 flex flex-col">
      {/* login try */}

      {openLogin && <Login toggle={toggleLogin}/>}


      {/* header / navigation */}
      <Navigation toggleLogin={toggleLogin}/>


      <div>
          {/* hero */}
      <div className="text-center space-y-4 py-10 sm:py-20 sm:px-4 px-4 ">
        {/* hero title */}
        <h3 className="text-5xl font-semibold sm:text-7xl sm:leading-[5.25rem] px-4">Exquisite taste <br />for ture <br /> connoisserus</h3>

        {/* hero description */}
        <p className="text-slate-600 sm:max-w-screen-sm w-full mx-auto ">We offer you to expeirence true pleasure. And not only from the taste of your desserts, but also from exclusive dishes prepared by high-level chefs and, of course, unique drinks created by the beast bartenders!</p>
        
        {/* HERO CTA */}
        <div>
          <HeroCta/>
        </div>
      </div>

      {/* product title */}
      
      <ul className="flex items-center justify-center flex-wrap max-w-screen-xl mx-auto  gap-4 *:opacity-75 ">
      <PracProduct/>
      <PracProduct/>
      <PracProduct/>
      <PracProduct/>
      <PracProduct/>
      <PracProduct/>
      </ul>
      </div>



      <Footer/>

    </div>

   );
}
 
export default PracPage;