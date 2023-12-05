import CardStyle from "../style/cartItem.style.module.css";
import increamentImg from "../assets/images/increament.png";
import decreamentImg from "../assets/images/decreament.png";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";

export const CartItem = ({ img ,name,price,productCartCount }) => {

  return (
    <>
      <div className={CardStyle.CardContainer}>
      <div className={CardStyle.productImgContainer}>
      <img src="https://dummyjson.com/image/i/products/3/1.jpg"/>
      </div>
      <div className={CardStyle.productDetailsContainer}>
        <p>OPPOF19</p><br/>
        <p><span className={CardStyle.detailKey}>Price: </span>Rs280 </p>
        <div className={CardStyle.cartActionContainer}>
            <img className={CardStyle.img}  src={increamentImg}/>
            <div className={CardStyle.productItemCount}>
            <p>2</p>
            </div>
            <img className={CardStyle.img} src={decreamentImg}/>
        </div>
        </div>
        <div className={CardStyle.cancelBtn}>
            <span>Cancel</span>
        </div>
      </div>
    </>
  );
};
