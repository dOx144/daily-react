import Cta from "../components/Cta";

const Nopage = () => {
  return ( 
    <div className=" space-y-4 min-h-screen flex items-center flex-col justify-center">
      <h2 className="text-xl font-bold text-yellow-400">Sorry the page you requested doesn't exist. 💀</h2>
      <Cta link={'/'} goto={'Main Page'}/>
    </div>
   );
}
 
export default Nopage;