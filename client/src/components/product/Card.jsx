import ItemDot from "./ItemDot";
import productItem from "../../assets/item.jpg"

const Card = () => {

  const itemSize = ['xs','s','m']

  return ( 
    <div className="p-2 ring-2 group max-w-[350px] flex flex-col gap-4 items-start ">
      {/* image section  */}
      <div className=" relative h-full w-full overflow-hidden">
        <div className="size-12 rounded-full bg-gray-600 absolute top-5 right-5 z-10 opacity-80 hover:opacity-90 hover:bg-green-500 transition-all"></div>
        <img className="w-full h-full object-cover" src={productItem} alt="#" />
      </div>

      {/* content section */}
      <div className="space-y-4">

        {/* heading */}
        <div className="flex ">
          <p className="brand opacity-75">H&M</p>
          <div className="rating font-bold flex items-center gap-2">
            <p >⭐ 4.0</p>
            <span className="text-xs opacity-75">{`(135)`}</span>
          </div>
        </div>

        {/* title & prices */}
        <div className="font-medium text-xl text-left">
          <h2>OverSized Fit Prinited Mesh T-Shirt</h2>

          {/* prices */}
          <div className="flex gap-2 ">
            <p className="text-red-600 font-bold">$255.00</p>
            <span className="hidden group-hover:block line-through opacity-75">$550.00</span>
          </div>
        </div>

        {/* description and variations */}
        <div className="hidden flex-col gap-4 group-hover:flex">

        {/* description */}
          <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eaque reiciendis reprehenderit quia. Debitis quis laboriosam quas minima cum ea consequatur impedit voluptas atque officiis.</p>

          {/* colors and size */}
          <div className="flex items-center justify-between *:min-w-[40%]">
            {/* colors */}
            <div className="flex items-start flex-col">
              <p>Colors</p>
              <div className="flex gap-2">
                <ItemDot color={`#ef4444`}/>
                <ItemDot color={`#f97316`}/>
                <ItemDot color={`#f59e0b`}/>
              </div>
            </div>

            {/* size */}
            <div className="flex items-start flex-col">
              <p>Size</p>
              <div className="flex gap-2 *:capitalize">
              {itemSize.map((el,i)=>(
                <ItemDot key={i} size={el}/>
              ))}
              </div>
            </div>
          </div>

          {/* buy and cart */}
          <div className="*:uppercase flex items-center justify-between *:w-full *:min-w-fit gap-2 font-bold">
            <button className="ATC p-2 ring-2
             rounded-md hover:scale-110 hover:rounded-none transition-all  bg-slate-600 text-white hover:mx-2">👜 add to cart</button>
            <button className="CTA p-2 ring-2
             rounded-md hover:scale-110 hover:rounded-none transition-all bg-white hover:mx-2 ">buy now</button>
          </div>

        </div>

      </div>
    </div>
   );
}
 
export default Card;