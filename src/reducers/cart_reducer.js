export const cart_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    const { products } = state;
    return { ...state, products: [...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    const { cart, products } = state;
    const id = Number(action.payload);
    const copyOfCart = [...cart];

    //get the index of the product that matches the id
    let product = products.find((item) => {
      return item.id === id;
    });

    //if cart is empty
    if (!cart.length) {
      copyOfCart.push({
        product: {
          details: { ...product },
          quantity: 1,
        },
      });
    }
    if (cart.length) {
      //check if it conains the item
      const index = copyOfCart.findIndex((item) => {
        return item.product.details.id === id;
      });
      //if a match update the quantity
      if (index > -1) {
        copyOfCart[index] = {
          product: {
            details: { ...product },
            quantity: copyOfCart[index].product.quantity + 1,
          },
        };
      }
      //if not a match, add new item
      if (index === -1) {
        copyOfCart.push({
          product: {
            details: { ...product },
            quantity: 1,
          },
        });
      }
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "REMOVE_ITEM") {
    const { cart } = state;
    const id = Number(action.payload);
    let copyOfCart = [...cart];

    //find the item in the cart
    const productIndex = copyOfCart.findIndex((item) => {
      return item.product.details.id === id;
    });

    const product = copyOfCart.find((item) => {
      return item.product.details.id === id;
    });

    //check the quantity
    if (productIndex > -1) {
      let count = copyOfCart[productIndex].product.quantity - 1;
      if (count < 1) {
        //remove item alltogether
        copyOfCart = copyOfCart.filter((item) => {
          return item.product.details.id !== id;
        });
      } else {
        copyOfCart[productIndex] = {
          product: {
            details: { ...copyOfCart[productIndex].product.details },
            quantity: count,
          },
        };
      }
    }

    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "UPDATE_CART_COUNT") {
    const { cart } = state;
    const total = cart.reduce((acc, curr) => {
      return acc + curr.product.quantity;
    }, 0);
    return { ...state, totalNumCartItems: total };
  }

  if (action.type === "REMOVE_CART") {
    const { cart } = state;
    const copyOfCart = [...cart];

    return { ...state };
  }

  //if theres no matching action, throw error
  throw new Error(`No Matching "${action.type}" - action type`);
};
