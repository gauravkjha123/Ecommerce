import productListStyle from "../style/ProductDetailPage.style.module.css";
import { ProductItem } from "../components/productItem";
import { useSelector } from "react-redux";
import { albumSelector } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const ProductListPage = () => {
  const { albums } = useSelector(albumSelector);
  
  return (
    <div className={productListStyle.container}>
      <div className={productListStyle.btnContainer}>
        <NavLink to="/add" className={productListStyle.btn}>Add Album</NavLink>
      </div>
      <div className={productListStyle.listContainer}>
        {albums.map((value, index) => (
          <ProductItem key={index} title={value.title} id={value.id} />
        ))}
      </div>
    </div>
  );
};
