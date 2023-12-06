import "react-multi-carousel/lib/styles.css";
import productDeatilsPageStyle from "../style/ProductDetailPage.style.module.css";
import Carousel from "react-multi-carousel";
import { BackBtn } from "../components/backBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { showToastMessage } from "../notification/notify";

export const ProductDetaills = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  const [product, setProuct] = useState("");
  const fetchProduct = async () => {
    let product = localStorage.getItem(String(id));
    setProuct(JSON.parse(product));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <BackBtn />
      <div className={productDeatilsPageStyle.container}>
        <div className={productDeatilsPageStyle.crouselContainer}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {product?.images?.map((value) => <img src={value} />) ?? (
              <img src="" />
            )}
          </Carousel>
        </div>
        <div className={productDeatilsPageStyle.detailsContainer}>
          <p>{product.title}</p>
          <br />
          <p>
            <span className={productDeatilsPageStyle.detailKey}>Price</span>:
            {product.price}
          </p>
          <br />
          <p>
            <span className={productDeatilsPageStyle.detailKey}>Discount</span>:
            {product.discountPercentage}
          </p>
          <br />
          <p>
            <span className={productDeatilsPageStyle.detailKey}>Stocks</span>:
            {product.stock}
          </p>
          <br />
          <p> {product.description}</p>

          <div className={productDeatilsPageStyle.btnContainer}>
            <button onClick={()=>{
              dispatch(addToCart(product));
              showToastMessage("item Added to cart", "success");
            }} className={productDeatilsPageStyle.btn}>Add to Cart</button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
