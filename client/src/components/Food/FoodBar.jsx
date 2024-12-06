import Socials from "../Socials";
import FoodItems from "./FoodItems";

const FoodBar = ({data}) => {
  return ( 
    <div className="space-y-4">
      
      {/* popular recipes */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold cursor-default">
          Popular Recipes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full ">
        <FoodItems data={data}/>
        <FoodItems data={data}/>
        <FoodItems data={data}/>
        <FoodItems data={data}/>
        </div>  
      </div>

      <Socials/>

    </div>
   );
}
 
export default FoodBar;