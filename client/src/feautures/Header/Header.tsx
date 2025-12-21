import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

import { useStore } from "../../app/providers/StoreProvider";
import { observer } from "mobx-react-lite";

export const Header: React.FC = observer(() => {
  const { authStore } = useStore();
  return (
    <header className="header">
      <div className="header__logo">Travel Agency</div>
      <nav className="header__nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About us
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/shop" className="nav-link">
          Shop
        </NavLink>
        <NavLink to="/consultation" className="nav-link">
          Order online consultation
        </NavLink>
      </nav>
      <div>
        {authStore.user ? (
          authStore.user.email
        ) : (
          <NavLink to="/sign-in" className="nav-link">
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  );
});
