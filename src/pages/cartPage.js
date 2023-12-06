import cartPageStyle from "../style/cartPage.style.module.css";
import { CartItem } from "../components/cartItem";
import { PriceDetails } from "../components/priceDetails";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/reducers/cartReducer";

export const CartPage = () => {
  const {
    cart,
    totalAmount,
    totalItem,
    totalAmountWithDiscount,
    totalDiscount,
  } = useSelector(cartSelector);
  console.log(totalAmount, totalItem);
  return (
    <div className={cartPageStyle.container}>
      {cart.length > 0 ? (
        <>
          <div className={cartPageStyle.listContainer}>
            {cart.map((value, index) => (
              <CartItem key={index} product={value} />
            ))}
          </div>
          <PriceDetails
            totalAmount={totalAmount}
            totalItem={totalItem}
            totalAmountWithDiscount={totalAmountWithDiscount}
            totalDiscount={totalDiscount}
          />
        </>
      ) : (
        <div>
          <h4>Cart is emppty</h4>
        </div>
      )}
    </div>
  );
};
