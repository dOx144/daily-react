import AttriElComp from "./AttriElComp"
import OtherStatus from "./OtherStatus"

const HeroAttri = ({strLogo, agiLogo, intLogo, heroData}) => {

  const str_gain = heroData.str_gain
  const agi_gain = heroData.agi_gain
  const int_gain = heroData.int_gain

  const base_str = heroData.base_str
  const base_agi = heroData.base_agi
  const base_int = heroData.base_int

  const attriArr = [{logo:strLogo, gain:str_gain, base:base_str, name:'Strength'},
    {logo:agiLogo, gain:agi_gain, base:base_agi, name:'Agility'},
    {logo:intLogo, gain:int_gain, base:base_int, name:'Intelligence'}
  ]



  return ( 
    <div className="ring-1 space-y-4 md:space-y-0 md:flex justify-between items-start *:basis-1/2">
     <div>
      <h2 className="font-semibold text-lg">Attributes</h2>
        {attriArr.map(el=>(
          <AttriElComp  logo={el.logo} gain={el.gain} base={el.base} name={el.name}/>
        ))}
     </div>
     <div className="ring-1">
        <OtherStatus heroData={heroData}/>
     </div>
   </div>
   );
}
 
export default HeroAttri;