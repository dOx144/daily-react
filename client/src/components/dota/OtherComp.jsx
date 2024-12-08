import LogoImg from "./LogoImg";

const OtherComp = () => {
  return ( 
    <div className="flex items-center gap-1">
      <LogoImg src={attack} msg={'Attack Damage'} />
      {Math.floor(base_attack_min)} - {Math.floor(base_attack_max)}
    </div>
   );
}
 
export default OtherComp;