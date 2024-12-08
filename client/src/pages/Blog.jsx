import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  
  useEffect(()=>{
    document.title = 'Blogs'
  },[])

  const {id} = useParams()
  return ( 
    <div>
      <h2 className="text-white">blog id : {id}</h2>
    </div>
   );
}
 
export default Blog;