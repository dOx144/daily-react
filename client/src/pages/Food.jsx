import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading"
import FoodHero from "../components/Food/FoodHero";
import FoodBar from "../components/Food/FoodBar";
import FoodSearch from "../components/Food/FoodSearch";
import { use } from "react";
import FoodItems from "../components/Food/FoodItems";

const Food = () => {
  const foodUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

  const [foodSearch, setFoodSearch] = useState('')

  const {data,isLoading, error} = useFetch(foodUrl)

  if(error) console.log(error);

  return (
    <div className="min-h-screen w-full text-white p-2">
      {isLoading ? <Loading/> :
      <div className="w-full max-w-screen-xl mx-auto">
          <FoodSearch foodSearch={foodSearch} setFoodSearch={setFoodSearch}/>
          <FoodItems data={data}/>
       </div>
      }
    </div>
  );
};
 
export default Food;