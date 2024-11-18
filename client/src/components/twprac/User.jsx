const User = () => {
  return ( 
    <div className="w-full  md:w-fit md:flex gap-2 bg-emerald-300 transition-all">
      <div>
        <img className="object-cover md:h-48 md:w-48 w-full h-56" src="https://www.placeholder.com/155" alt="User_profile" />

      </div>
      <div className="p-4 item self-center">
        <h2 className="cursor-pointer font-semibold text-xl leading-tight ">Jake Dox</h2>
        <p className="text-sm text-slate-500">Tinchuli, Boudha</p>
      </div>
    </div>
   );
}
 
export default User;