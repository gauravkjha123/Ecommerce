import CardStyle from "../style/card.Style.module.css";
import deleteImg from "../assets/images/delete.png";
import editImg from "../assets/images/edit.png";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteAlbum } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const Card = ({ title = "Hello world", id }) => {
  const dispatch = useDispatch();
  const deleteAlbumFn = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteAlbum({ id: id }));
  };
  return (
    <>
      <div className={CardStyle.CardContainer}>
      <div className={CardStyle.productNameImgContainer}>
      <img src="https://dummyjson.com/image/i/products/3/1.jpg"/>
      <div className={CardStyle.productNameContainer}>
      <p>I Phone</p>
      <p>5000</p>
      </div>
      </div>
      <div className={CardStyle.productDescContainer}>
        <p>An apple mobile which is nothing like apple</p>
        </div>
        <div className={CardStyle.productActionContainer}>
          <div className={CardStyle.addToCartBtn}><p>Add To Cart</p></div>
          <img src={editImg} className={CardStyle.img} />
          <img src={deleteImg} className={CardStyle.img}/>
        </div>
      </div>
    </>
  );
};
