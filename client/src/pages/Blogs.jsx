import BlogNav from "../components/blogs/BlogNav";

const Blogs = () => {
  return ( 
    <div className="text-white after:w-full sm:max-w-screen-xl mx-auto sm:my-24 lg:my-32 space-y-8 p-4">

      {/* blogs nav */}
      <div>
        <BlogNav/>
      </div>


      {/* main body */}
      <div>

        <div className="ring-2 w-full">
          <div >
            <h2>First post</h2>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quas neque explicabo aliquid. Quos quod ea minima, aspernatur officia placeat?</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
 
export default Blogs;