import LineGraph from "./LineGraph";
import PieChart from "./PieChart";
const HeroWinRates = ({heroData}) => {

  const makeArr = (x,y) =>{
    let temp = [];
    for(let i=0; i < 9; i++){
      temp.push(x[`${i + 1}_${y}`])
    }
    return temp
  }

  const picks= makeArr(heroData,'pick')
  const wins = makeArr(heroData,'win')

  const pub_picks = heroData.pub_pick;
  const pub_wins = heroData.pub_win;
  // console.log(pub_picks);
  // console.log(pub_wins);

  const pro_picks = heroData.pro_pick;
  const pro_wins = heroData.pro_win;

  const turbo_picks = heroData.turbo_picks;
  const turbo_wins = heroData.turbo_wins;

  
  const getWr = (x, y) => {
    let wr = (y / x) * 100
    return wr.toFixed(2)
  }

  const pub_WR = getWr(pub_picks,pub_wins)
  const pub_LR = getWr(pub_picks, pub_picks-pub_wins)

  const turbo_WR = getWr(turbo_picks,turbo_wins)
  const turbo_LR = getWr(turbo_picks, turbo_picks-turbo_wins)

  const pro_WR = getWr(pro_picks,pro_wins)
  const pro_LR = getWr(pro_picks, pro_picks-pro_wins)

  const hero_WR = (x,y) => {
    return {
      labels: [
        'Win',
        'Loss',
      ],
      datasets: [{
        label: '',
        data: [x, y],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4
      }]
    }
  };

  const data = {
  labels: ['First-pick','Second-pick','Third-pick','Fourth-pick','Fifth-pick','Sixth-pick','Seventh-pick','Eight-pick'],
  datasets: [{
    label: 'Total picks',
    data: picks,
    backgroundColor: [
      'rgba(255, 99, 132, .4)',  // Light Red
      'rgba(255, 159, 64, .4)',  // Orange
      'rgba(255, 205, 86, .4)',  // Yellow
      'rgba(75, 192, 192, .4)',  // Teal
      'rgba(54, 162, 235, .4)',  // Light Blue
      'rgba(153, 102, 255, .4)', // Lavender
      'rgba(201, 203, 207, .4)'  // Light Gray
      ],
      borderColor: [
          'rgb(255, 99, 132)',  // Light Red
          'rgb(255, 159, 64)',  // Orange
          'rgb(255, 205, 86)',  // Yellow
          'rgb(75, 192, 192)',  // Teal
          'rgb(54, 162, 235)',  // Light Blue
          'rgb(153, 102, 255)', // Lavender
          'rgb(201, 203, 207)'  // Light Gray
      ],
      borderWidth:1
  },{
    label: 'Wins',
    data: wins,
    backgroundColor: [
      'rgba(255, 99, 132, .8)',
      'rgba(255, 159, 64, .8)',
      'rgba(255, 205, 86, .8)',
      'rgba(75, 192, 192, .8)',
      'rgba(54, 162, 235, .8)',
      'rgba(153, 102, 255, .8)',
      'rgba(201, 203, 207, .8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth:1
  },
]
};

  return ( 
    <div className=" md:col-span-3 order-2 p-2 cursor-default">
      <div>
        <p className="font-semibold text-2xl">
          {/* {heroData.localized_name + ' status' || 'Hero Status'} */}
          Games Status
          </p>  
        <p className="self-end text-slate-400 text-xs animate-pulse">({((turbo_wins + pub_wins + pro_wins)/(turbo_picks + pub_picks + pro_picks) * 100).toFixed(2)} % Winrate)</p>
      </div>
     <div className="flex w-full items-center justify-between flex-col gap-2">
        <div className="w-full">
         <LineGraph data={data}/>
        </div>
        
        <div className=" w-full grid grid-cols-3 gap-8">
          <div className="w-full h-full">
            <h2 className="font-semibold text-slate-300 ">Turbo Status</h2>
            <PieChart data={hero_WR(turbo_WR, turbo_LR)}/>
          </div>
          <div className="w-full h-full">
            <h2 className="font-semibold text-slate-300">Pub Status</h2>
            <PieChart data={hero_WR(pub_WR, pub_LR)}/>
          </div>
          <div className="w-full h-full">
            <h2 className="font-semibold text-slate-300">Pro Scene</h2>
            <PieChart data={hero_WR(pro_WR, pro_LR)}/>
          </div>
        </div>
     </div>
    </div>
  );
}
 
export default HeroWinRates;