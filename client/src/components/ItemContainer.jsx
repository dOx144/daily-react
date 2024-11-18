const ItemContainer = ({items}) => {
  return ( 
    <div className=" ring-2 p-4 flex gap-2 flex-col even:*:bg-green-500 odd:*:bg-slate-500">
      {
        items.map((e,index)=>(
          <div key={index} className="ring-2 p-2 min-w-44 rounded-xl hover:rounded-none transition-all hover:scale-110 hover:my-4">
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </div>
        ))
      }
    </div>
   );
}
 
export default ItemContainer;