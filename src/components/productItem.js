import productItemStyle from "../style/productItem.Style.module.css";
import deleteImg from "../assets/images/delete.png";
import editImg from "../assets/images/edit.png";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";

export const ProductItem = ({ title = "Hello world", id }) => {
  const dispatch = useDispatch();
  const deleteAlbumFn = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteAlbum({ id: id }));
  };
  return (
    <>
      <div className={productItemStyle.CardContainer}>
      <div className={productItemStyle.productNameImgContainer}>
      <img src="https://dummyjson.com/image/i/products/3/1.jpg"/>
      <div className={productItemStyle.productNameContainer}>
      <p>I Phone</p>
      <p>5000</p>
      </div>
      </div>
      <div className={productItemStyle.productDescContainer}>
        <p>An apple mobile which is nothing like apple</p>
        </div>
        <div className={productItemStyle.productActionContainer}>
          <div className={productItemStyle.addToCartBtn}><p>Add To Cart</p></div>
          <img src={editImg} className={productItemStyle.img} />
          <img src={deleteImg} className={productItemStyle.img}/>
        </div>
      </div>
    </>
  );
};
