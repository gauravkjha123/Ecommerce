import productItemStyle from "../style/productItem.Style.module.css";
import deleteImg from "../assets/images/delete.png";
import editImg from "../assets/images/edit.png";
import { showToastMessage } from "../notification/notify";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, deleteProduct, productSelector } from "../redux/reducers/productReducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProductItem = ({ title, id, price, thumbnail, description,addToCart }) => {
  const { products } = useSelector(productSelector);
  const [name, setname] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editProduct = () => {
    setname(title);
    setProductDescription(description);
    setProductPrice(price);
    setIsEdit(true);
  };

  const saveEditedProduct = async () => {
    if (!name) {
      return alert("Name can not be emppty");
    }
    if (!productPrice) {
      return alert("Price can not be emppty");
    }
    if (productPrice <= 0) {
      return alert("Price can not be Zero or less than Zero");
    }
    let res = await fetch(
      `https://my-json-server.typicode.com/gauravkjha123/Ecommerce/products/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: name,
          price: productPrice,
          description: productDescription,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );;
    let product = {
      id: id,
      title: name,
      price: productPrice,
      description: productDescription,
    };
    showToastMessage("Edit suceesful", "success");
    dispatch(updateProduct(product));
    setIsEdit(false);
  };

  const deleteAlbumFn = async (id) => {
    await fetch(
      `https://my-json-server.typicode.com/gauravkjha123/Ecommerce/products/${id}`,
      {
        method: "DELETE",
      }
    );
    dispatch(deleteProduct({ id: id }));
    showToastMessage("item deleted", "warning");
  };
  const navigateToProductDetails = (id) => {
    localStorage.setItem(String(id),JSON.stringify(products.filter((value)=>value.id==id)?.[0]))
    navigate(`product-details/${id}`)
  }
  return (
    <>
      <div className={productItemStyle.CardContainer}>
        <div className={productItemStyle.productNameImgContainer}>
          <img onClick={() => navigateToProductDetails(id)} style={{ cursor: "pointer" }} src={thumbnail} />
          <div className={productItemStyle.productNameContainer}>
            {!isEdit ? (
              <p>{title}</p>
            ) : (
              <div className={productItemStyle.inputContainer}>
                <input
                  required
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
            )}
            {!isEdit ? (
              <p>{price}</p>
            ) : (
              <div className={productItemStyle.inputContainer}>
                <input
                  type="number"
                  min={1}
                  required
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        <div className={productItemStyle.productDescContainer}>
          {!isEdit ? (
            <p>{description}</p>
          ) : (
            <div className={productItemStyle.inputContainer}>
              <textarea
                required
                style={{ padding: "10px", height: "100px" }}
                type="text"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
          )}
        </div>
        {!isEdit ? (
          <div className={productItemStyle.productActionContainer}>
            <div onClick={()=>(addToCart(id))} className={productItemStyle.addToCartBtn}>
              <p>Add To Cart</p>
            </div>
            <img
              src={editImg}
              onClick={() => editProduct()}
              className={productItemStyle.img}
            />
            <img
              onClick={() => deleteAlbumFn(id)}
              src={deleteImg}
              className={productItemStyle.img}
            />
          </div>
        ) : (
          <div className={productItemStyle.productActionContainer}>
            <div
              onClick={() => setIsEdit(false)}
              className={productItemStyle.cancelBtn}
            >
              <p>Cancel</p>
            </div>
            <div
              onClick={saveEditedProduct}
              className={productItemStyle.saveBtn}
            >
              <p>Save</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
