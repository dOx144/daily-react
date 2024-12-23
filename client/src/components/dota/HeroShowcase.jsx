import IntroCard from "./IntroCard";

const HeroShowcase = ({heroes}) => {
  return ( 
  <div 
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-2 "
  // className="flex gap-2 *:min-w-[250px] *:min-h-[350px] p-2 will-change-scroll overflow-x-scroll"
  >
    {heroes.map(el=>(
      <IntroCard key={el.id } id={el.id} name={el.localized_name} type={el.attack_type} role={el.roles} primary={el.primary_attr}/>
    ))}
  </div>
   );
}
 
export default HeroShowcase;