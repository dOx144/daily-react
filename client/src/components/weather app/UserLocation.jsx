import { useEffect, useState } from "react";
import Time from "./Time";

const UserLocation = ({space, pos, name, country, temp}) => {

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
    setCurHour(temp.getHours())
    setcurMin(temp.getMinutes())
    setcurSec(temp.getSeconds())
    checkAmPm(temp.getHours())
  }, 1000);

  // go get day and use it in switch
  const day = new Date().getDay()
  let today;

  switch (day) {
    case 0:
      today = 'Saturday';
      break;
    case 1:
      today = 'Sunday';
      break;
    case 2:
      today = 'Monday';
      break;
    case 3:
      today = 'Tuesday';
      break;
    case 4:
      today = 'Wednesday';
      break;
    case 5:
      today = 'Thursday'; 
      break;
    case 6:
      today = 'Friday';
      break;
    default:
      today = 'Invalid day'; // Handle unexpected `day` values
  }

  // function to set date
  function getTodayDate(){
    const todayDate = new Date()

    const year = todayDate.getFullYear()
    const month = todayDate.getMonth() + 1 
    const day = todayDate.getDay()

    const formatTodayDate = `${year}-${month.toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`
    
    return formatTodayDate
  }
  
  const todayDate =getTodayDate()
  


  return ( 

      <div className={`${space && 'col-span-2'} hover:shadow-md hover:shadow-yellow-500 text-black cursor-pointer bg-white min-w-fit space-y-4 ring-1 w-full p-4 rounded-xl hover:scale-105  transition-all`}>
        {/* location */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm">
            <span className="font-semibold text-xl text-yellow-400">
              {name}
            </span>
              ,{country}</h2>
          <button>🔍</button>
        </div>

        {/* temp status */}
        <p className={`${pos ? `text-${pos}xl` : 'text-5xl' } md:text-8xl transition-all`}><span>{temp}</span>°C</p>


        {/* extra information */}
        <div className="transition-all">
          <p className="font-semibold text-slate-600">{todayDate}</p>

          <div className="text-sm text-slate-500 flex items-center justify-between">
            <p>{today}</p>
            <div className="flex gap-1">
              <p>{curHour}</p>:
              <p>{curMin}</p>:
              <p>{curSec}</p>
              <p>
              {checkAmPm()}
              </p>
            </div>
          </div>

        </div>
      </div>

  );
}
 
export default UserLocation;