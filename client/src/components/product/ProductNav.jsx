import { Link } from "react-router-dom";

const ProductNav = () => {

  const prodNavs = [{name:"home",link:"/home"},
                    {name:"store",link:"/store"},
                    {name:"about",link:"/contact"},
                    {name:"contact",link:"/contact"}]

  
  return ( 
    <nav className="p-2 flex gap-2 *:ring-2 *:p-2 *:rounded-xl *:min-w-[100px]">
      {prodNavs.map((x,i)=>
        <Link className="active:bg-green-500 active:text-white active:ring-green-400 text-center hover:font-medium" key={i} to={x.link}>
          {x.name.toUpperCase()}
        </Link>
      )}
    </nav>
   );
}
 

// const prodNavs = [
//   { name: "home", link: "/home" },
//   { name: "store", link: "/store" },
//   { name: "about", link: "/about" },
//   { name: "contact", link: "/contact" }
// ];

// return (
//   <nav className="bg-white flex gap-2">
//     {prodNavs.map(x => (
//       <Link key={x.name} to={x.link}>
//         {x.name.toUpperCase()}
//       </Link>
//     ))}
//   </nav>
// );
// }
export default ProductNav;
