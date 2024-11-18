const ItemDot = ({color = 'white' ,size}) => {
  return ( 
    <div className={`size-6 text-black font-bold text-xs flex items-center justify-center rounded-full ring-2 ring-slate-500`} style={{ backgroundColor: color }}>{size}</div>
   );
}
 
export default ItemDot;