import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

const CartItem = ({ cart, quantity, cartId }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cartId));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cartId));
  };

  useEffect(() => {
    console.log(cart.image);
    console.log(cart);
    console.log(carts);
  }, []);

  return (
    <>
      <section className="items">
        <div className="product-one">
          <img
            src={"	https://res.cloudinary.com/dzwcscgdr/" + cart.image}
            alt=""
          />

          <div class="name">{cart.name}</div>

          <div class="price">$ {cart.price}</div>
          <button>
            <div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{quantity}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default CartItem;
