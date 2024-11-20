import {  useState } from 'react';
import {backOut, easeOut, motion} from 'framer-motion'
import {  useNavigate } from 'react-router-dom';
import AddItem from '../components/AddItem';
import ItemContainer from '../components/ItemContainer';
import Cta from '../components/Cta';
import Nopage from './Nopage';

const Home = () => {
  const nav = useNavigate();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', description: '' });

  return (
    <div className='flex bg-[#1C1C1E] text-white flex-col min-h-screen items-center justify-center gap-5 xl:flex-row'>
      {/* <div>
        <h2 className="text-xl font-bold">Revised To-do List</h2>
        <AddItem setItems={setItems} />
        <ItemContainer items={items} />
      </div> */}
      <Cta link='/blogs' goto={'blogs'} />
      <Cta link='/weather' goto={'weather'} />
      <Cta link='/food' goto={'food'} />
      <Cta link='/pokemon' goto={'pokemon'} />
      <motion.div initial={{ x: "100",rotate:180,scale:0 }}
  animate={{ x: "0",rotate:0,scale:1}} drag={{scale:1.1}} transition={{ease:easeOut, duration: .5}} className='size-40 bg-red-400 rounded-xl' ></motion.div>
    </div>
  );
};

export default Home;
