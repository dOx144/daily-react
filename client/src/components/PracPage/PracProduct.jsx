const PracProduct = () => {
  return ( 
    <li className="w-full sm:w-64">
         <div className="w-full">
          <img className="w-full h-64 sm:w-64 object-cover" src="https://www.placeholder.com/155" alt="" />
         </div>
         <div className="p-4">
            <p className="text-slate-500 outline-dotted border-2 w-fit sm:w-full p-2">Price: <span className="text-black font-semibold text-xl">$5.00</span></p>
         </div>
    </li>
   );
}
 
export default PracProduct;