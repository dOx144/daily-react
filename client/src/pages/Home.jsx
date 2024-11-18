import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddItem from '../components/AddItem';
import ItemContainer from '../components/ItemContainer';
import Cta from '../components/Cta';

const Home = () => {
  const nav = useNavigate();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', description: '' });

  return (
    <div className='flex flex-col min-h-screen items-center justify-center bg-gray-300 gap-5 xl:flex-row'>
      <div>
        <h2 className="text-xl font-bold">Revised To-do List</h2>
        <AddItem setItems={setItems} />
        <ItemContainer items={items} />
      </div>
      <Cta link='/product' goto={'product'} />
      <Cta link='/container' goto={'container'} />
      <Cta link='/twprac' goto={'TailwindPrac'} />
      <Cta link='/pageprac' goto={"Page Template"}/>

    </div>
  );
};

export default Home;
