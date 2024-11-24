import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {

  const {id} = useParams()
  return ( 
    <div>
      <h2 className="text-white">blog id : {id}</h2>
    </div>
   );
}
 
export default Blog;