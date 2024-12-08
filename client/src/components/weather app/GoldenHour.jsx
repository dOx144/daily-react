import Time from "./Time";

const GoldenHour = ({space,rise,sSet}) => {


  class goldenHour {
    constructor(x,y) {
      this.goldenHour = 60 * 60
      this.first = x
      this.second = y
    }

    firstGolden(){
      const temp = new Date((this.first + this.goldenHour) * 1000)
      const tempHour = temp.getHours().toString().padStart(2,'0')
      const tempMin = temp.getMinutes().toString().padStart(2,'0')
  
      return (`${tempHour} : ${tempMin}`)
    }

    secondGolden(){
      const temp = new Date((this.second - this.goldenHour) * 1000)
      const tempHour = temp.getHours().toString().padStart(2,'0')
      const tempMin = temp.getMinutes().toString().padStart(2,'0')
  
      return (`${tempHour} : ${tempMin}`)
    }
  }

  const getGoldenHour = new goldenHour(rise,sSet)

  const firstGoldenHour = getGoldenHour.firstGolden()
  const secondGoldenHour = getGoldenHour.secondGolden()

  const giveTime = (x) =>{

    const temp = new Date(x * 1000)

    const tempHour = temp.getHours().toString().padStart(2,'0')
    const tempMin = temp.getMinutes().toString().padStart(2,'0')

    return (`${tempHour} : ${tempMin}`)
  }


  return ( 

    <div className={`col-span-2 md:col-span-1 hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 py-6 rounded-xl md:hover:scale-105  transition-all h-full hover:ring-2 hover:ring-slate-900`}>

      <div className="flex justify-between items-center">
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sunrise</h2>
          <p className="hover:shadow-md hover:shadow-[#B0BEC5] hover:ring-[#FFD700] transition-all ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">{giveTime(rise)}</p>
        </div>
        <div className="space-y-4 text-center flex items-center justify-center flex-col">
          <h2 className="font-semibold">Golden Hour</h2>
          <div className="hover:shadow-md hover:shadow-[#5D4037] hover:ring-[#E97451] transition-all ring-1 max-w-fit p-4 py-14 rounded-full self-center justify-selfdivcenter">
            <p title="First Golden Hour" className="hover:ring-1 p-1 transition-all rounded-md">{firstGoldenHour}</p>
            <p title="Second Golden Hour" className="hover:ring-1 p-1 transition-all rounded-md">{secondGoldenHour}</p>
          </div>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="font-semibold text-slate-500">Sunset</h2>
          <p className="hover:shadow-md hover:shadow-[#37474F] hover:ring-[#FFCC99] transition-all ring-1 max-w-fit p-5 py-10 rounded-full self-center justify-self-center">{giveTime(sSet)}</p>
        </div>
      </div>

      <div className="hidden md:block">
      <Time/>
      </div>
    </div>
   );
}
 
export default GoldenHour;