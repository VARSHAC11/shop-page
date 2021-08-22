import Button from "@material-ui/core/Button";
import { useContext, useState } from "react";
import { Rating } from 'react-simple-star-rating';
import { ProductData } from "./Data";
import { Counter } from "../App";

// Products
export function Product() {
  return (
    <div className="cardContent">
      <div className="outer-box">
        {/* Inner Box */}
        {ProductData.map((product, index) => (
          <ProductDetails
            product={product}
            key={index} />
        ))}
      </div>
    </div>
  );
}
function ProductDetails(props) {

  const { cartItems, setCartItems } = useContext(Counter);
  const { img, productName, price, id, discountPrice, isDisabled } = props.product;
  const [but, setBut] = useState(true);
  const [rating, setRating] = useState(4); // initial rating value

  const addToCart = (productName, id) => {
    ProductData[id - 1].isDisabled = true;
    setCartItems([...cartItems, { name: productName, key: id },]);
    setBut(!but);
  };

  const handleRating = (rate) => {
    setRating(rate);

  };

  return (
    <div className="inner-box">
      {discountPrice ? (
        <div className="sale">
          {" "}
          <p>Sale </p>
        </div>
      ) : (
        ""
      )}
      <img className="content-img" src={img} alt="error" />
      <div className="content-body">
        <h5 className="productName">{productName}</h5>
        {productName === "Special Item" || productName === "Popular Item" ? (
          <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        ) : (
          ""
        )}
        <p className="price">
          <span className="strikeOut">{discountPrice}</span>
          {price}
        </p>
      </div>

      <Button
        className="buyButton"
        variant="outlined"
        onClick={() => addToCart(productName, id)}
        disabled={isDisabled}
      >
        Add to Cart
      </Button>

    </div>
  );
}