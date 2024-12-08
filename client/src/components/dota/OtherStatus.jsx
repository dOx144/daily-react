import attack from "../../assets/dota/icon_damage.png";
import attack_time from "../../assets/dota/icon_attack_time.png"
import attack_range_logo from "../../assets/dota/icon_attack_range.png"
import porjectile_speed_logo from "../../assets/dota/icon_projectile_speed.png"

import magic_resist_damage_logo from "../../assets/dota/icon_magic_resist.png";
import armor_logo from "../../assets/dota/icon_armor.png";
import LogoImg from "./LogoImg";
import base_movement_logo from "../../assets/dota/icon_movement_speed.png";
import base_turn_rate_logo from '../../assets/dota/icon_turn_rate.png'
import baseVision from '../../assets/dota/icon_vision.png'

import HeroPrimary from "./HeroPrimary";

const OtherStatus = ({heroData}) => {
  
  const hero_primary = heroData.primary_attr

  const base_agi = heroData.base_agi
  const base_str = heroData.base_str
  const base_int = heroData.base_int

  let base_attack_min = heroData.base_attack_min 
  let base_attack_max = heroData.base_attack_max 

  const attack_rate = heroData.attack_rate
  const attack_range = heroData.attack_range
  const projectile_speed = heroData.projectile_speed
  
  const base_armor = heroData.base_armor + (base_agi * 0.17)
  const base_resist = heroData.base_mr + (base_int * 0.1)

  const base_movement = heroData.move_speed
  const base_vision_day = heroData.day_vision
  const base_vision_night = heroData.night_vision
  const base_turn_rate = heroData.turn_rate || 0.6

  switch(hero_primary){
    case 'str':
      base_attack_min += base_str
      base_attack_max += base_str
      break;

    case 'agi':
      base_attack_min += base_agi
      base_attack_max += base_agi
      break;

    case 'int':
      base_attack_min += base_int
      base_attack_max += base_int
      break;

    case 'all':
      base_attack_min +=  (base_str + base_int + base_agi) * 0.7
      base_attack_max +=  (base_str + base_int + base_agi) * 0.7
      break;

  }

  return ( 
    <div className="text-sm col-span-2 sm:col-span-1">
      <table className="border-separate border-spacing-1  border-slate-500 border-spacing-x-4 w-full text-left">

        {/* table title */}
        <thead>
          <tr >
            <th> Attack</th>
            <th>Defence</th>
            <th>Mobility</th>
          </tr>
        </thead>

        {/* table element */}
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-1">
                <LogoImg src={attack} msg={'Attack Damage'} />
                {Math.floor(base_attack_min)} - {Math.floor(base_attack_max)}
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
               <LogoImg src={armor_logo} msg={'Armor'} />
                {Math.floor(base_armor)}
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <LogoImg src={base_movement_logo} msg={'Movement speed'} />
                {base_movement}
              </div>
            </td>
          </tr>
          <tr>
            <td> 
              <div className="flex items-center gap-1">
                <LogoImg src={attack_time} msg={'Attack Time'}/>
                {attack_rate}
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <LogoImg src={magic_resist_damage_logo} msg={'Magic Resist'} />
                {base_resist.toFixed(0)}%
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1">
                <LogoImg src={base_turn_rate_logo} msg={'Turn rate'} />
                {base_turn_rate}
              </div>
            </td>
          </tr>
          <tr>
            <td>
             <div className="flex items-center gap-1">
              <LogoImg src={attack_range_logo} msg={"Attack Range"}/>  
              {attack_range}
             </div>
            </td>
            <td>
              {/* empty col */}
            </td>
            <td>
              <div className="flex items-center gap-1">
                <LogoImg src={baseVision} msg={'Vision'}/>
                <span title="Day Vision">{base_vision_day} </span> 
                / 
                <span title="Night Vision"> {base_vision_night}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td> 
              <div className="flex items-center gap-1">
                <LogoImg src={porjectile_speed_logo} msg={'Projectile Speed'}/>
                {projectile_speed}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   );
}
 
export default OtherStatus;