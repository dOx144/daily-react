import FoodSearch from "./FoodSearch";

const FoodHero = () => {
  return ( 
    <div className="max-w-screen-lg min-h-[30vh] mx-auto space-y-4 text-center flex items-stretch justify-center flex-col ">
        <h1 className="text-2xl lg:text-4xl max-w-sm self-center">DISCOVER DELICIOUS RECIPES FOR EVERY OCCASION!</h1>
        <FoodSearch/>
      </div>
   );
}
 
export default FoodHero;