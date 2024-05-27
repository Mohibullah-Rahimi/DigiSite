import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import CartProduct from "../CartProduct/CartProduct";
import { ButtonContainer, StyledLink } from "../Cart/style";
import { SecondaryButton } from "../Button/style";
import OrderSummary from "../OrderSummary/OrderSummary";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  // Function to render cart products
  const renderCartProducts = () => {
    return cart.map((item, index) => (
      <CartProduct key={index} {...item} />
    ));
  };

  return (
    <>
      <section>
        {/* Render cart products */}
        {renderCartProducts()}
      </section>
      {/* Buttons container */}
      <ButtonContainer>
        {/* Clear Cart button */}
        <SecondaryButton onClick={clearCart}>Clear Cart</SecondaryButton>
        {/* Checkout button */}
        <StyledLink to="/checkout">Checkout</StyledLink>
      </ButtonContainer>
      {/* Order Summary component */}
      <OrderSummary />
    </>
  );
};

export default Cart;
