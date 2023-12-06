import UpdateAlbumStyle from "../style/UpdateAndAddAlbum.stype.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/reducers/productReducer";
import { Form } from "../components/form";
import { BackBtn } from "../components/backBtn";
import { showToastMessage } from "../notification/notify";

export const AddProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addProductFn = async (product) => {
    let res = await fetch(
      "https://my-json-server.typicode.com/gauravkjha123/Ecommerce/products",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    let newProduct = await res.json();
    dispatch(addProduct(newProduct));
    showToastMessage("Product Added Successful", "success");
    navigate("/");
  };

  return (
    <>
      <BackBtn />
      <div className={UpdateAlbumStyle.container}>
        <Form addProductFn={addProductFn} />
      </div>
    </>
  );
};
