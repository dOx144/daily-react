import User from "../components/twprac/User";

const Twprac = () => {
  return ( 
    <div className="max-w-screen-md mx-auto space-y-4">

{/* content */}

<div>
  <h2 className="font-bold md:text-xl transition-all">This is Content</h2>
</div>

<div>
  <h2>Users</h2>
  {/* usercontainer */}
  <div className="bg-slate-200 w-full p-2 flex flex-wrap items-center justify-center gap-2">
  <User/>
  <User/>
  <User/>
  <User/>
  </div>

</div>

    </div>

  );
}
 
export default Twprac;