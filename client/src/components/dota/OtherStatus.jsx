import attack from "../../assets/dota/icon_damage.png";
import attack_time from "../../assets/dota/icon_attack_time.png"
import attack_range_logo from "../../assets/dota/icon_attack_range.png"
import porjectile_speed_logo from "../../assets/dota/icon_projectile_speed.png"
import LogoImg from "./LogoImg";

const OtherStatus = ({heroData}) => {
  
  const base_agi = heroData.base_agi
  const base_attack_min = heroData.base_attack_min + base_agi
  const base_attack_max = heroData.base_attack_max + base_agi

  const attack_rate = heroData.attack_rate
  const attack_range = heroData.attack_range
  const projectile_speed = heroData.projectile_speed

  return ( 
    <div className="text-sm">
      <table className="w-full text-left">
        <tr className="">
          <th> Attack</th>
          <th>Defence</th>
          <th>Mobility</th>
        </tr>
        <tr>
          <td className="flex items-center gap-1">
            <LogoImg src={attack} msg={'Attack Damage'}/>
            {base_attack_min} - {base_attack_max}
          </td>
          <td>3.8</td>
          <td>325</td>
        </tr>
        <tr>
          <td className="flex items-center gap-1"> 
            <LogoImg src={attack_time} msg={'Attack Time'}/>
            {attack_rate}</td>
          <td>25%</td>
          <td>0.6</td>
        </tr>
        <tr>
          <td className="flex items-center gap-1">
            <LogoImg src={attack_range_logo} msg={"Attack Range"}/>  
            {attack_range}
          </td>
          <td></td>
          <td>1800 / 800</td>
        </tr>
        <tr>
          <td className="flex items-center gap-1"> 
            <LogoImg src={porjectile_speed_logo} msg={'Projectile Speed'}/>
            {projectile_speed}</td>
        </tr>
      </table>
    </div>
   );
}
 
export default OtherStatus;