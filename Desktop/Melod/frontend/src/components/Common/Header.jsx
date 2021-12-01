import React, { useEffect, useState } from "react";
import cartimg from "../../assets/img/cart.png";
import logo from "../../assets/img/logooo.svg";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <div>
      <section class="nav">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h2>Melodum</h2>
        </div>
        <div class="melodum">
          {checkUser ? (
            <span class="logout" onClick={signOutButton}>
              Logout
            </span>
          ) : (
            <a href="/signin">Sign In</a>
          )}
          {checkUser && (
            <a href="/cart">
              <img src={cartimg} alt="" />
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
