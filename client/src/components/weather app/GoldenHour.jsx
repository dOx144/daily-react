import Time from "./Time";

const GoldenHour = ({space,rise,sSet}) => {

  const giveGoldenHour = (x)=>{
    const goldenHour = 60*60 
    const temp = new Date((x + goldenHour) * 1000)

    const tempHour = temp.getHours().toString().padStart(2,'0')
    const tempMin = temp.getMinutes().toString().padStart(2,'0')

    return (`${tempHour} : ${tempMin}`)
  }

  const giveTime = (x) =>{

    const temp = new Date(x * 1000)

    const tempHour = temp.getHours().toString().padStart(2,'0')
    const tempMin = temp.getMinutes().toString().padStart(2,'0')

    return (`${tempHour} : ${tempMin}`)
  }


  return ( 

    <div className={`${space && `col-span-${space}`} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 py-6 rounded-xl hover:scale-105  transition-all h-full`}>

      <div className="flex items-end justify-around">
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sunrise</h2>
          <p className=" hover:bg-[#FFD1DC] hover:font-semibold hover:text-white hover:shadow-md hover:shadow-[#B0BEC5] hover:ring-[#FFD700] transition-all ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">{giveTime(rise)}</p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-semibold">Golden Hour</h2>
          <div className=" hover:bg-[#FFBF00] hover:font-semibold hover:text-white hover:shadow-md hover:shadow-[#5D4037] hover:ring-[#E97451] transition-all ring-1 max-w-fit p-5 py-14 rounded-full self-center justify-selfdivcenter">
            <p>{giveGoldenHour(rise)}</p>
            {/* <p>{giveGoldenHour(sSet)}</p> */}
          </div>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sunset</h2>
          <p className=" hover:bg-[#FF00FF] hover:font-semibold hover:text-white hover:shadow-md hover:shadow-[#37474F] hover:ring-[#FFCC99] transition-all ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">{giveTime(sSet)}</p>
        </div>
      </div>

      <div className="hidden md:block">
      <Time/>
      </div>
    </div>
   );
}
 
export default GoldenHour;