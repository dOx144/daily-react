import { useEffect, useState } from "react";
import PokemonCard from "../components/Pokemon/PokemonCard";
import PokemonList from "../components/Pokemon/PokemonList";
import GoButton from "../components/GoButton";


const Pokemon = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState([])
  const [pokemon, setPokemon] = useState(null)
  const [pokemonQuery, setPokemonQuery] = useState('')
  const [searching,setSearching] = useState(0)

  const pokemonUrl= 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
  const onePokeonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonQuery}`


  // const isSearching = () =>{
  //   setSearching(x => x+1)
  //  }

  // fetch all pokemons
 const fetchPokemon = async() =>{
  try{
    const res = await fetch(pokemonUrl)

    if(!res.ok){
      throw new error('Failed to fetch Pokemon list')
    }

    const data = await res.json()

    // console.log(data);
    setPokemons(data.results)
    // data.results.map(el=>{
    //   setPokemonName(prev=>[...prev,el.name])
    // })
    // console.log(pokemonName);
    
    // const results = data.results

    // results.map(el=>{console.log(el.name);})

  }catch(err){
    console.err(err.message
    )
  }
 }

//  fetch single pokemon
 const fetchOnePokemon = async() =>{
  try{
    const res = await fetch(onePokeonUrl)

    if(!res.ok){
      throw new Error(`Failed to fetch Pokémon: ${pokemonQuery}`)
    }

    const data = await res.json()
    setPokemon(data)
    console.log(data);

  }catch(err){
    console.log(err.message)
  }
 }

 const searchData = async(e) =>{
  e.preventDefault()
  if(!pokemonQuery.trim()){
    alert('Empty parameter')
    return
  }
  
  setPokemons((e) => {
    const checkExist = e.some((el) => el.name === pokemon.name); // Check if pokemon already exists
    if (!checkExist) {
      return [...e, pokemon]; // Add pokemon if it doesn't exist
    }
    alert("Pokemon already exists!"); // Optional: Notify the user
    return e; // Return the original array if pokemon exists
  });
  
  setPokemon('')
  setPokemonQuery('')
  // setPokemons((prev)=>[...prev,pokemon.name])
  // setPokemons(prev=>[...prev,pokemon.name])
  
  // isSearching(i)
  // console.log(i);
  // console.log(`User is adding ${pokemonQuery} to the list`);
 }

 useEffect(()=>{
  fetchPokemon()
 },[])

 useEffect(()=>{
  if(!pokemonQuery) return

  const debouncer = setTimeout(() => {
    fetchOnePokemon()
  }, (400));
  return ()=>clearTimeout(debouncer)
 },[pokemonQuery])


  return ( 
    <div className="px-4 text-white max-w-screen-xl mx-auto lg:my-32 sm:my-24 my-8 space-y-12">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between">
      <h2 className="text-2xl lg:text-5xl font-semibold transition-all">Welcome to Wikimon Page</h2>
      <GoButton link='/' name={'home'}/>
      </div>

      <form onSubmit={searchData} className="w-full space-x-4 flex  items-center justify-start">
        <input
          value={pokemonQuery} 
          onChange={(e)=>{setPokemonQuery(e.target.value)}}
          type="search" 
          name="search" 
          id="search" 
          className="text-black font-semibold outline outline-1 rounded-sm p-3 w-full md:max-w-screen-sm md:rounded-md text-xl" 
          placeholder="Search for pokemon" />

        <button 
          className="px-6 py-3 bg-green-500 font-semibold text-xl rounded-md hover:bg-green-400 hover:scale-110 text-white transition-all"
          aria-label="Search">
            Search</button>
      </form>

      <PokemonList pokemons={pokemons}/>

    </div>
  );
}
 
export default Pokemon;