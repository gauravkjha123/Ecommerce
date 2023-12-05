import AlbumListStyle from "../style/albumList.style.module.css";
import { ProductItem } from "../components/productItem";
import { useSelector } from "react-redux";
import { albumSelector } from "../redux/reducers/albumReducer";
import { NavLink } from "react-router-dom";

export const ProductListPage = () => {
  const { albums } = useSelector(albumSelector);
  
  return (
    <div className={AlbumListStyle.container}>
      <div className={AlbumListStyle.btnContainer}>
        <NavLink to="/add" className={AlbumListStyle.btn}>Add Album</NavLink>
      </div>
      <div className={AlbumListStyle.listContainer}>
        {albums.map((value, index) => (
          <ProductItem key={index} title={value.title} id={value.id} />
        ))}
      </div>
    </div>
  );
};
