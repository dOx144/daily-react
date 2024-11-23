import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";



const Socials = () => {


  const SocLinks = [
  {
    name:"Instagram",
    goto:'https://www.instagram.com/rashik_tamang',
    icon:<IoLogoInstagram />
  },
  {
    name:"Github",
    goto:'https://www.github.com/dox144',
    icon:<IoLogoGithub />
  },
  ]
  return ( 
    <div className="w-full bg-gray-800 rounded-xl max-w-screen-2xl mx-auto p-3 text-white flex flex-col items-center justify-center">
      <ul className="flex">
        {
          SocLinks.map((e, i)=>(
            <Link className="flex gap-2 items-center justify-start hover:ring-1 transition-all p-2" key={e + i} to={e.goto}><span>{e.icon}</span><span className="hidden sm:inline">{e.name}</span></Link>
          ))
        }
      </ul>
    </div>
   );
}
 
export default Socials;