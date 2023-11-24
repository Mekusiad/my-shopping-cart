import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShoppingContextProvider from "./ShoppingContext/ShoppingContext";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import ShopCart from "./pages/ShopCart/ShopCart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ShoppingContextProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShopCart />} />
          </Routes>
        </Router>
      </ShoppingContextProvider>
    </div>
  );
}

export default App;
