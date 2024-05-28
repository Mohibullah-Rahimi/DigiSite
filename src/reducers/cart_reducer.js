export const cart_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    // Load products into state
    const { products } = state;
    return { ...state, products: [...action.payload] };
  }

  if (action.type === "ADD_TO_CART") {
    // Add a product to the cart
    const { cart, products } = state;
    const id = Number(action.payload);
    const copyOfCart = [...cart];

    // Find the product by id
    let product = products.find((item) => item.id === id);

    // Check if cart is empty
    if (!cart.length) {
      // If cart is empty, add the product
      copyOfCart.push({
        product: {
          details: { ...product },
          quantity: 1,
        },
      });
    } else {
      // If cart is not empty, check if the product already exists
      const index = copyOfCart.findIndex((item) => item.product.details.id === id);
      if (index > -1) {
        // If product exists, update its quantity
        copyOfCart[index] = {
          product: {
            details: { ...product },
            quantity: copyOfCart[index].product.quantity + 1,
          },
        };
      } else {
        // If product does not exist, add it to the cart
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

  if (action.type === "DECREASE_COUNT") {
    // Decrease quantity of a product in the cart
    const { cart } = state;
    const id = Number(action.payload);
    let copyOfCart = [...cart];

    // Find the index of the product in the cart
    const productIndex = copyOfCart.findIndex((item) => item.product.details.id === id);

    // If product exists in cart
    if (productIndex > -1) {
      let count = copyOfCart[productIndex].product.quantity - 1;
      if (count < 1) {
        // If quantity becomes zero, remove the product from cart
        copyOfCart = copyOfCart.filter((item) => item.product.details.id !== id);
      } else {
        // If quantity is greater than zero, decrease its count
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
    // Update the total number of items in the cart
    const { cart } = state;
    const totalNumCartItems = cart.reduce((acc, curr) => acc + curr.product.quantity, 0);
    return { ...state, totalNumCartItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // Remove a product from the cart
    const { cart } = state;
    const id = Number(action.payload);
    const copyOfCart = cart.filter((item) => item.product.details.id !== id);
    return { ...state, cart: [...copyOfCart] };
  }

  if (action.type === "CLEAR_CART") {
    // Clear the cart
    return { ...state, cart: [] };
  }

  if (action.type === "CART_SUBTOTAL") {
    // Calculate the subtotal of the cart
    const { cart } = state;
    let subtotal = cart.reduce((acc, curr) => acc + curr.product.quantity * curr.product.details.price, 0);
    subtotal = Number(subtotal.toFixed(2));
    return { ...state, subtotal };
  }

  if (action.type === "CART_TOTAL") {
    // Calculate the total amount of the cart including shipping fee
    const { shipping_fee, subtotal } = state;
    let total = subtotal + shipping_fee;
    total = total.toFixed(2);
    return { ...state, cart_total: total };
  }

  if (action.type === "SAVE_EMAIL") {
    // Save user email
    return { ...state, user_email: action.payload };
  }

  // If there's no matching action, throw an error
  throw new Error(`No Matching "${action.type}" - action type`);
};
