import productListStyle from "../style/productList.style.module.css";
import crossImg from "../assets/images/cross.png";
import { ProductItem } from "../components/productItem";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../redux/reducers/productReducer";
import { useState } from "react";
import { addToCart } from "../redux/reducers/cartReducer";
import { showToastMessage } from "../notification/notify";

export const ProductListPage = () => {
  const { products } = useSelector(productSelector);
  const dispatch = useDispatch();
  const [productList, setProductList] = useState(null);
  const [sorted, setSorted] = useState(false);
  if (products && products.length > 0 && !productList) {
    setProductList(products);
  }

  const handleAddToCart = (id) => {
    let product = products.filter((value) => value.id == id)[0];
    dispatch(addToCart(product));
    showToastMessage("item Added to cart", "success");
  };
  const sortProduct = () => {
    let temp = [...products];
    temp.sort((a, b) => a.price - b.price);
    setSorted(true);
    setProductList(temp);
  };
  const removesSorting = (e) => {
    e.stopPropagation();
    setSorted(false);
    setProductList(products);
  };
  return (
    <>
      <div className={productListStyle.container}>
        <div className={productListStyle.btnContainer}>
          <button onClick={sortProduct} className={productListStyle.btn}>
            Sort by Price{" "}
            {sorted ? (
              <img
                className={productListStyle.img}
                src={crossImg}
                onClick={removesSorting}
              />
            ) : (
              ""
            )}
          </button>
        </div>
        <div className={productListStyle.listContainer}>
          {productList?.map((value, index) => (
            <ProductItem
              key={index}
              title={value.title}
              id={value.id}
              thumbnail={value.thumbnail}
              price={value.price}
              addToCart={handleAddToCart}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
