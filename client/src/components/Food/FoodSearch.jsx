import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const FoodSearch = ({foodSearch,setFoodSearch}) => {

  const [searchUrl, setSearchUrl] = useState(null)
  const {data, isLoading, Error} = useFetch(searchUrl)
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if(!foodSearch){
        console.log('Your search Query is empty. Enter names to Search items !!');
      }

    setSearchUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodSearch}`)
    console.log(data)
    console.log(`User Querires for: ${foodSearch}`);
  }


  return ( 
    <form onSubmit={(e)=>handleSubmit(e)} className="flex items-center justify-center gap-2 *:ring-2 ">
      <input type="search" className=" w-full max-w-screen-sm rounded-md p-2 text-xl focus:ring-white focus:shadow-lg focus:shadow-green-200 bg-slate-200 outline-none text-slate-800" 
      placeholder="Search the food " 
      value={foodSearch}
      onChange={e=>setFoodSearch(e.target.value)}/>
      <button type="submit" className="p-2 px-5  rounded-md ">🔍</button>
    </form>
   );
}
 
export default FoodSearch;