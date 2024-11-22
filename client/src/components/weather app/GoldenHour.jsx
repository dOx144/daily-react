import Time from "./Time";

const GoldenHour = ({space}) => {
  return ( 
    <div className={`${space && 'col-span-2'} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-2 rounded-xl hover:scale-105  transition-all  flex flex-col items-center`}>
     <div className="flex items-end justify-around">
      <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sun Rise</h2>
          <p className="ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">5:25</p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-semibold">Golden Hour</h2>
          <p className="ring-1 max-w-fit p-5 py-14 rounded-full self-center justify-self-center">5:25</p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sun Set</h2>
          <p className="ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">5:25</p>
        </div>
     </div>
     <Time/>
    </div>
   );
}
 
export default GoldenHour;