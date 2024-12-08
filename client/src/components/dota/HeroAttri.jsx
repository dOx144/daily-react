import AttriElComp from "./AttriElComp"

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
    <div className="space-y-4 lg:space-y-0 lg:flex justify-between items-start ">
     <div className="w-full">
      <h2 className="font-semibold text-lg">Attributes</h2>
        {attriArr.map((el, i)=>(
          <AttriElComp key={el + i} logo={el.logo} gain={el.gain} base={el.base} name={el.name}/>
        ))}
     </div>
   </div>
   );
}
 
export default HeroAttri;