import CardStyle from "../style/cartItem.style.module.css";
import increamentImg from "../assets/images/increament.png";
import decreamentImg from "../assets/images/decreament.png";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers/cartReducer";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={CardStyle.CardContainer}>
        <div className={CardStyle.productImgContainer}>
          <img src={product.thumbnail} />
        </div>
        <div className={CardStyle.productDetailsContainer}>
          <p>{product.name}</p>
          <br />
          <p>
            <span className={CardStyle.detailKey}>Price: </span>Rs{" "}
            {product.price}{" "}
          </p>
          <div className={CardStyle.cartActionContainer}>
            <img
              onClick={() => dispatch(addToCart(product))}
              className={CardStyle.img}
              src={increamentImg}
            />
            <div className={CardStyle.productItemCount}>
              <p>{product.cartCount}</p>
            </div>
            <img
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
              className={CardStyle.img}
              src={decreamentImg}
            />
          </div>
        </div>
      </div>
    </>
  );
};
