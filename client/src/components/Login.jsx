const Login = ({toggle}) => {
  return ( 

    <div className="absolute backdrop-blur-sm h-full w-full flex items-center justify-center overflow-hidden ">

      {/* login closing trigger overlay */}
      <button onClick={toggle} className="h-full w-screen absolute"> </button>

      <div className={`z-10 ring-2 p-10 h-screen sm:max-h-fit ring-slate-500 w-full max-w-[450px] sm:rounded-lg flex items-center justify-center bg-[#494949] text-white flex-col space-y-8`}>
        {/* translate-y-48 opacity-60 ${'translate-y-0 opacity-100'} transition-all duration-500 */}

        {/* header/ */}
        <div className="text-left w-full space-y-2 leading-3 sm:relative">
          <h2 className="text-2xl sm:text-4xl">Welcome to <span className="sm:block">E-commerce!</span></h2>
          <p className="text-slate-300">Login in to your account and explore all the amazing products.</p>
          <button className="absolute top-8 right-8 capitalize text-xl sm:top-0 sm:right-0 font-mono sm:text-2xl" onClick={toggle}>x</button>
        </div>
        
        {/* form */}
        <form className="w-full space-y-2" action="#">
        <div>
          {/* email */}
            <label className="text-base font-semibold text-slate-100" for="email">Email</label>
            <input className="p-2 text-xl w-full text-slate-600 font-semibold" type="email" name="email" id="email" placeholder="abcd@gmail.xyz" />
          </div>

          {/* password */}
          <div>
            <label className="text-base font-semibold text-slate-100" for="password">Password</label>
            <input className="p-2 text-xl w-full text-slate-600" type="password" name="password" id="password" placeholder="**********" />
          </div>

          {/* extra requirements */}
          <div className="w-full flex items-start justify-between ">
            <div className="flex items-center justify-center gap-1">
              <input type="checkbox" name="form-checkbox"/>
              <label htmlFor="form-checkbox">Remember me</label>
            </div>
            <button>forgot password?</button>
          </div>

          {/* submit */}
          <button className="w-full px-5 py-2 text-xl rounded-sm bg-[#FCAB10]" type="submit">Login</button>
        </form>
        <div className="w-full flex justify-center gap-2 items-center">
          <hr  className="w-full border-slate-500 rounded-lg"/>
          <p>Or</p>
          <hr  className="w-full border-slate-500 rounded-lg"/>
        </div>

        <div>Don't have an account yet? <a className="underline cursor-pointer" href="#">SignUp</a></div>

      </div>
    </div>

  );
}
 
export default Login;