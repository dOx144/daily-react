import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSearch = ({id}) => {
  const [userQuery, setUserQuery] = useState('')
  const nav = useNavigate()

  function capitalizeWords(input) {
    if (input.includes('-')) {
      // Handle hyphenated words
      return input
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('-');
    } else {
      // Handle space-separated words
      return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
  }


  const getDotaHero = (e) =>{
   
    e.preventDefault()

    if(!userQuery){
      console.log('No inputs');
      return
    }
    console.log('User is Searching for:' + userQuery);
    nav(`/dota/${capitalizeWords(userQuery)}`)
    setUserQuery('')
    window.location.reload();
  }//

  return ( 
     <form onSubmit={e=>getDotaHero(e)} className="flex gap-2 items-center w-full lg:max-w-screen-md *:rounded-md">
     <input 
     type="search"
     name="search"
     placeholder={id ? id : "Anti-Mage"}
     value={userQuery}
     onChange={(e)=>setUserQuery(e.target.value)}
     className="flex-grow p-2 text-black active:outline-none focus-within:outline-none focus-within:shadow-md focus-within:shadow-yellow-400 capitalize" />
     <button 
     className="py-2 px-4 md:px-5 bg-yellow-400 font-bold outline-none"
     type="submit">Search</button>
   </form>
   );
}
 
export default HeroSearch;