import React, { useContext } from "react";
import {
  CountButton,
  ImageWrapper,
  RemoveButton,
  StyledArticle,
  StyledDetails,
} from "./style";
import { CartContext } from "../../Contexts/CartContext";

const CartProduct = ({ product }) => {
  const { handleAddToCart, decreaseCartCount, removeItemFromCart } = useContext(
    CartContext
  );

  return (
    <StyledArticle>
      <ImageWrapper>
        <img
          src={product.details.image}
          alt={product.details.title}
          style={{ maxWidth: "100%", height: "auto" }} // Apply image styles
        />
      </ImageWrapper>

      <StyledDetails>
        <span>{product.details.title}</span>

        <div>
          <CountButton onClick={() => decreaseCartCount(product.details.id)}>
            -
          </CountButton>
          <span>Qty. {product.quantity}</span>
          <CountButton onClick={() => handleAddToCart(product.details.id)}>
            +
          </CountButton>
        </div>

        <span>${product.details.price}</span>
      </StyledDetails>

      <RemoveButton onClick={() => removeItemFromCart(product.details.id)}>
        Remove Item
      </RemoveButton>
    </StyledArticle>
  );
};

export default CartProduct;
