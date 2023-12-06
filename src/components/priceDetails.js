import CardStyle from "../style/priceDetails.style.module.css";

export const PriceDetails = ({  totalAmount, totalItem, totalAmountWithDiscount,totalDiscount }) => {
  return (
    <>
      <div className={CardStyle.CardContainer}>
        <div>
          <h3>Price Details</h3>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Price({totalItem} item)</p>
          <p>{totalAmount}</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Discount</p>
          <p>{Math.floor(totalDiscount)}</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <p>Delivery Charges</p>
          <p style={{color:"green"}}>Free</p>
        </div>
        <div className={CardStyle.detailsKeyContainer}>
          <h4>Total Amount</h4>
          <p>{Math.floor(totalAmountWithDiscount)}</p>
        </div>
      </div>
    </>
  );
};
