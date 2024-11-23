import BlogNav from "../components/blogs/BlogNav";

const Blogs = () => {
  return ( 
    <div className="text-white after:w-full sm:max-w-screen-xl mx-auto sm:my-24 lg:my-32 space-y-8 p-4">

      {/* blogs nav */}
      {/* <div>
        <BlogNav/>
      </div> */}


      {/* main body */}
      <div className="text-white w-full max-w-screen-2xl mx-auto text-center  flex min-h-screen justify-center items-center">
        <h2 className="ring-2 w-full p-4 shadow-2xl shadow-yellow-700 rounded-xl ">Waiting for the blog app design.</h2>
      </div>
    </div>

  );
}
 
export default Blogs;