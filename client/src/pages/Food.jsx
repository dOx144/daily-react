import { useEffect, useState } from "react";
import FoodNav from "../components/blogs/FoodNav";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading"
import FoodSearch from "../components/Food/FoodSearch";
import FoodHero from "../components/Food/FoodHero";
import FoodBar from "../components/Food/FoodBar";

const Food = () => {
  const [meals, setMeals] = useState(null)

  const {data,isLoading, error} = useFetch("https://www.themealdb.com/api/json/v1/1/random.php")

  // setMeals(data?.meals[0])
  console.log(data?.meals[0]);

  if(error) console.log(error);

  return (
    <div className="min-h-screen w-full text-white p-2">
      {isLoading ? <Loading/> :
     <div className="w-full max-w-screen-xl mx-auto">
        <div>
        <FoodHero/>
        </div>     

       <FoodBar  data={data}/>

     </div>
      }
    </div>
  );
};
 
export default Food;