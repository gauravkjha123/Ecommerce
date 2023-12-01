import NavBarStyle from "../style/navbar.style.module.css";
import cartImg from "../assets/images/cart.png";
import userImg from "../assets/images/user.png";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAlbums } from "../redux/reducers/albumReducer";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const fetchAlbumsFromApi = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let albums = await res.json();
    dispatch(fetchAlbums(albums));
  };
  useEffect(() => {
    fetchAlbumsFromApi();
  }, []);
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
              <Link className={NavBarStyle.navlink}>Products </Link>
            </li>
            <li>
              <Link className={NavBarStyle.navlink}>Add a Product</Link>{" "}
            </li>
          </div>
          <div
            className={NavBarStyle.navMenuContainer}
            style={{ justifyContent: "space-between", width: "10%" }}
          >
            <li className={NavBarStyle.cartContainer}>
              <img className={NavBarStyle.img} src={cartImg} />
              <p className={NavBarStyle.cartCount}>2</p>{" "}
            </li>
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
