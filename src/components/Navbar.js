import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState, useContext } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ProductData } from "./Data";
import { Counter } from "../App";

// NavBar
export function Navbar() {

  const { cartItems, setCartItems } = useContext(Counter);
  const [cartOpen, setCartOpen] = useState(false);

  // Remove From Cart
  const RemoveItems = (key) => {
    setCartItems(cartItems.filter((item) => item.key !== key));
    ProductData[key - 1].isDisabled = false;
  };
  return (
    <nav>
      <p style={{ fontSize: "1.4rem" }}>Start Bootstarp</p>
      <div>
        <Button variant="outlined" onClick={() => setCartOpen(!cartOpen)}>
          <ShoppingCartIcon></ShoppingCartIcon> Cart {cartItems.length}
        </Button>
        {cartOpen ? (
          <div className="cartProduct">
            {(cartItems.length===0) ? "Your Cart Is Empty" : cartItems.map((items, index) => (
              <div key={index} className="cartItems">
                <p>{items.name}</p>
                <IconButton
                  aria-label="delete"
                  onClick={() => RemoveItems(items.key)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}