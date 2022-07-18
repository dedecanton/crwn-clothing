import React, { memo } from "react";
import "./checkout-item.styles.scss";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = memo(({ cartItem }: CheckoutItemProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, quantity, price, imageUrl } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
});

export default CheckoutItem;
