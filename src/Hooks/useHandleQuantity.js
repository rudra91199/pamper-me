import { addToDb } from "../Utilities/CartDb";

const useHandleQuantity = (id, cart, setCart, plusOrMinus) => {
  let index = -1;

  const updatedProduct = cart.find((product) => product._id === id);
  if (plusOrMinus == "minus")
    updatedProduct.quantity = Math.max(1, updatedProduct.quantity - 1);
  else {
    updatedProduct.quantity += 1;
  }
  // const filteredCart = cart.filter((product) => product._id !== id);
  // setCart([updatedProduct,...filteredCart ]);//! [a, ...[b,c]]=== [a,b,c]
  cart.forEach((product, i) => {
    if (product._id === id) {
      index = i;
    }
  });
  cart.splice(index, 1, updatedProduct);
  setCart([...cart]);
  addToDb(id, plusOrMinus);

 
  
  return;
};

export default useHandleQuantity;