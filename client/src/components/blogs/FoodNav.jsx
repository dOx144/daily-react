const FoodNav = () => {

  const foodNavs = [
    {text:'recipes',
     link:'/food/recipes'
    },
    {text:'contact',
      link:'/food/contact'
    },
    {text:'about-us',
      link:'/food/about-us'
    }]

  return ( 
    <ul className="flex ring-1 items-center justify-center gap-4 w-full max-w-screen-lg mx-auto">
    {foodNavs.map((el,i)=>(
      <li key={el + i} className="font-semibold p-2 ring-1 rounded-xl w-full max-w-24">
      {el.text}
     </li>
    ))}
  </ul>
  );
}
 
export default FoodNav;