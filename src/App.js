import "./App.css";
import { createContext, useState } from "react";
import { Product } from "./components/Product";
import { Navbar } from "./components/Navbar";

import { Main} from "./components/Main";

//Create Context
export const Counter = createContext(null);

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Counter.Provider
        value={{ cartItems: cartItems, setCartItems: setCartItems }}
      >
        <Navbar />
        <Main />
        <Product />
       
          
    <footer className="bottomFooter ">
      <p className="footerContent"> Copyright © VARSHA 2021 </p>
    </footer>


      </Counter.Provider>
    </div>
  );
}

export default App;