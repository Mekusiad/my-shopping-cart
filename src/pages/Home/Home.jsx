import { PRODUCTS } from "../../products";
import Product from "../../components/Product/Product";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Mauro's Shopping</h1>
      <div className="container-shopping">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
