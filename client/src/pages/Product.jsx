import Card from "../components/product/Card";
import ProductNav from "../components/product/ProductNav";

const Product = () => {
  return ( 
    <div className="bg-gray-100 max-w-screen-xl mx-auto flex flex-col items-center justify-center">
      <ProductNav/>
      <h2>Hello This is Product Page</h2>

      <div className="container flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center w-full p-4 ring-2 ">
      <Card/> 
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}
 
export default Product;