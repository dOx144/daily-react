import { useState } from "react";

const AddItem = ({ setItems }) => {
  const [item, setItem] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const{name,value}=e.target
    setItem(x=>({...x,[name]:value}))

  //   const { name, value } = e.target;  // Destructuring to get name and value from the input
  //   setItem((prevItem) => ({
  //    ...prevItem,  // Spread the previous state
  //    [name]: value // Update the field (title or description) dynamically
  //  }));
  };
  const clearITem = () =>{
    setItem({title: '', description: ''})
  }

 const handleSubmit = (e) =>{
  e.preventDefault();

  if (item.title && item.description !== ''){
      setItems((x) => [...x, item]); // Add the new item to
      clearITem()
    }else{
      return alert('Fill the fields')
    }
 }

  return (
    <form onSubmit={handleSubmit} className="ring-2 p-4 flex flex-col gap-2">
      <input
        value={item.title}
        onChange={handleChange}
        className="bg-white p-2 text-black rounded-md"
        type="text"
        name="title"      // 'name' is used for dynamic updates
        id="title"
        placeholder="Title"
      />
      <textarea
        value={item.description}
        onChange={handleChange}
        className="bg-white p-2 text-black min-h-[100px] resize-y max-h-[150px] rounded-md"
        name="description" // 'name' is used for dynamic updates
        placeholder="Description"
      ></textarea>
      <button type="submit" >Create</button>
    </form>
  );
};

export default AddItem;
