const FoodSearch = () => {
  return ( 
    <form className="flex items-center justify-center gap-2 *:ring-2 ">
      <input type="search" className=" w-full max-w-screen-sm rounded-md p-2 text-xl focus:ring-white focus:shadow-lg focus:shadow-green-200 bg-slate-200 outline-none text-slate-800" placeholder="Search the food " />
      <button type="submit" className="p-2 px-5  rounded-md ">🔍</button>
    </form>
   );
}
 
export default FoodSearch;