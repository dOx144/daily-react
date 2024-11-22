import { useState } from "react"

const Time = () => {
  const [curHour, setCurHour] = useState(null)
  const [curMin, setcurMin] = useState(null)
  const [curSec, setcurSec] = useState(null)

  // checking am or pm
  function checkAmPm(x){
    if(x<12){
      return 'AM'
    }
    return "PM"
  }

  // setInterval for time update
  setInterval(() => {
    const temp = new Date()
    const curSec = temp.getSeconds()
    setCurHour(temp.getHours().toString().padStart(2, '0'))
    setcurMin(temp.getMinutes().toString().padStart(2, '0'))
    setcurSec(temp.getSeconds().toString().padStart(2, '0'))
    checkAmPm(temp.getHours())
  }, 1000);

  return(
    <div className="flex gap-1 font-semibold text-slate-500">
      <p className="text-sm self-end">Time :</p>
      <p>{curHour}</p>:
      <p>{curMin}</p>:
      <p>{curSec}</p>
      <p>
       {checkAmPm()}
      </p>
    </div>
  )
}
 
export default Time;