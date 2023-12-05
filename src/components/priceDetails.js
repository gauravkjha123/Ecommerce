import CardStyle from "../style/priceDetails.style.module.css";
import increamentImg from "../assets/images/increament.png";
import decreamentImg from "../assets/images/decreament.png";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";

export const PriceDetails = ({ img, name, price, productCartCount }) => {
  return (
    <>
      <div className={CardStyle.CardContainer}>
        <div>
          <h3>Price Details</h3>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Price(4 item)</p>
          <p>2977</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Discount</p>
          <p>475</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Delivery Charges</p>
          <p>Free</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <h4>Total Amount</h4>
          <p>2502</p>
        </div>
      </div>
    </>
  );
};
