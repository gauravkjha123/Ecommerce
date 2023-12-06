import NavBarStyle from "../style/navbar.style.module.css";
import cartImg from "../assets/images/cart.png";
import userImg from "../assets/images/user.png";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cartReducer";

export const NavBar = () => {
  const { totalItem } = useSelector(cartSelector);
  return (
    <>
      <div className={NavBarStyle.navbar}>
        <ul className={NavBarStyle.navContainer}>
          <div className={NavBarStyle.navMenuContainer}>
            <li className={NavBarStyle.navBrandContainer}>
              <Link
                className={NavBarStyle.navlink}
                style={{ color: "brown" }}
                to="/"
              >
                E-Commerce
              </Link>
            </li>
            <li>
              <Link to="/" className={NavBarStyle.navlink}>
                Products{" "}
              </Link>
            </li>
            <li>
              <Link to="/add" className={NavBarStyle.navlink}>
                Add Product
              </Link>
            </li>
          </div>
          <div
            className={NavBarStyle.navMenuContainer}
            style={{ justifyContent: "space-between", width: "10%" }}
          >
            <Link to="/cart">
              <li className={NavBarStyle.cartContainer}>
                <img className={NavBarStyle.img} src={cartImg} />
                {totalItem ? (
                  <p className={NavBarStyle.cartCount}>{totalItem}</p>
                ) : (
                  ""
                )}
              </li>
            </Link>
            <li>
              <img className={NavBarStyle.img} src={userImg} />
            </li>
          </div>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
