import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderProps } from "./types";
import { useAuth } from "../../config/auth";
import { CartModal } from "../Cart/CartModal";

export const Header: React.FC<HeaderProps> = (props) => {
  const { pathname } = useRouter();
  const { user, logout } = useAuth();
  const [showCart, setShowCart] = React.useState(false);
  const toggleCart = () => setShowCart(!showCart);

  return (
    <header>
      <div className="siteHeader">
        <div className="cart-container">
          <CartModal visible={showCart} />
        </div>
        <div className="siteHeader__section">
          <div className="siteHeader__item siteHeaderLogo">
            <Link href="/">
              <a className={pathname === "/" ? "is-active" : ""}>LOGO</a>
            </Link>
          </div>
        </div>
        <div className="siteHeader__section">
          {user ? (
            <>
              <div className="siteHeader__item siteHeaderButton">{user.data.attributes.email}</div>
              <>
                <button className="siteHeader__item siteHeaderButton" onClick={toggleCart}>
                  CART
                </button>
              </>
              <button className="siteHeader__item siteHeaderButton" onClick={logout}>
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <div className="siteHeader__item siteHeaderButton">
                <Link href="/authenticate/login">
                  <a>LOG IN</a>
                </Link>
              </div>
              <div className="siteHeader__item siteHeaderButton">
                <Link href="/authenticate/signup">
                  <a>SIGN UP</a>
                </Link>
              </div>
            </>
          )}
        </div>
        <style jsx>{`
          .siteHeader {
            height: 50px;
            position: relative;
            background-color: pink;
            /**
             * Lay out the children of this container with
             * flexbox, which is horizontal by default.
            */
            display: flex;

            /**
             * Make the container put as much space as possible
             * between its children, with the children at either
             * end laying flush against the container's edges.
            */
            justify-content: space-between;

            padding: 10px;
            // background-color: #56727c;
          }

          .siteHeader__section {
            /**
             * Lay out the children of this container with
             * flexbox.
            */
            display: flex;

            /**
             * Align the children in the center, along
             * the main axis. By default the children will
             * align along their top edges.
            */
            align-items: center;
          }

          .siteHeader__item {
            padding: 5px 15px;
            font-size: 12px;
          }

          .siteHeader__item + .siteHeader__item {
            margin-left: 5px;
          }

          .siteHeader__item.is-site-header-item-selected {
            color: #ffffff;
            background-color: #415f69;
            border-radius: 4px;
          }

          .siteHeaderLogo {
            font-size: 20px;
            line-height: 0;
            color: white;
          }

          .siteHeaderButton {
            cursor: pointer;
            color: #d9e9ef;
          }
          .cart-container {
            position: absolute;
            right: 30px;
            top: 70px;
            background-color: lime;
          }
        `}</style>
      </div>
    </header>
  );
};
