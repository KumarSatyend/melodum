import React, { useEffect, useState } from "react";
import CartItem from "../components/Common/CartItem";
import { fetchCarts } from "../reducks/carts/operations";
import { fetchItems } from "../reducks/items/operations";
import { getCarts } from "../reducks/carts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";
import { getItems } from "../reducks/items/selectors";

const Cart = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
  }, []);

  return (
    <>
      <div class="cart">
        <p>- My carts -</p>
      </div>
      <section class="items">
        <div class="product-one">
          {
            (carts,
            items &&
              carts.map((cart) => (
                <li>
                  <CartItem
                    cart={cart.item}
                    cartId={cart.id}
                    key={cart.item.id}
                    quantity={cart.quantity}
                  />
                </li>
              )))
          }
        </div>
      </section>
    </>
  );
};

export default Cart;
