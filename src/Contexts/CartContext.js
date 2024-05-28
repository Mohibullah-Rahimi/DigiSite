import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cart_reducer } from "../reducers/cart_reducer";
import { ProductsContext } from "./ProductsContext";

export const CartContext = createContext();

const initialState = {
    user_email: "",
    products: [],
    cart: [],
    totalNumCartItems: 0,
    subtotal: 0,
    cart_total: 0,
    shipping_fee: 5.99,
};

const CartContextProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [state, dispatch] = useReducer(cart_reducer, initialState);
    
    // Effect to load products into the cart
    useEffect(() => {
        dispatch({ type: "LOAD_PRODUCTS", payload: products });
    }, [products]);

    // Effect to update cart count, subtotal, and total when the cart changes
    useEffect(() => {
        dispatch({ type: "UPDATE_CART_COUNT" });
        dispatch({ type: "CART_SUBTOTAL" });
        dispatch({ type: "CART_TOTAL" });
    }, [state.cart]);

    // Function to handle adding an item to the cart
    const handleAddToCart = (id) => {
        dispatch({ type: "ADD_TO_CART", payload: id });
    }

    // Function to decrease the count of an item in the cart
    const decreaseCartCount = (id) => {
        dispatch({ type: "DECREASE_COUNT", payload: id });
    }

    // Function to remove an item from the cart
    const removeItemFromCart = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    // Function to clear the entire cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    // Function to recalculate the subtotal
    const getSubtotal = () => {
        dispatch({ type: "CART_SUBTOTAL" });
    }

    // Function to recalculate the total
    const getTotal = () => {
        dispatch({ type: "CART_TOTAL" });
    }

    // Function to save the user's email
    const saveEmail = (email) => {
        dispatch({ type: "SAVE_EMAIL", payload: email });
    }

    // Providing the context value with state and functions for manipulating the cart
    return (
      <CartContext.Provider
        value={{ ...state, handleAddToCart, decreaseCartCount, clearCart, removeItemFromCart, getSubtotal, getTotal, saveEmail }}>
        {children}
      </CartContext.Provider>
    );
}

export default CartContextProvider;
