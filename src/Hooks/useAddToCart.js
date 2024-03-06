export const useAddToCart = (selectedProduct, cart, setCart, productQuantity) => {
    let index = -1;
    const exist = cart.find(
        (cartProduct) => cartProduct._id === selectedProduct._id
    );
    if (exist) {
        selectedProduct.quantity = exist.quantity + 1;
        cart.forEach((product, i) => {
            if (product._id === selectedProduct._id) {
                index = i;
            }
        });
        cart.splice(index, 1, selectedProduct);

        setCart([...cart]);
    } else {
        selectedProduct["quantity"] = productQuantity ? productQuantity : 1;

        setCart([...cart, selectedProduct]);
    }
    addToDb(selectedProduct._id);
    setCartOpen(true);

    return;

}