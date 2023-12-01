import productDeatilsPageStyle from "../style/ProductDetailPage.style.module.css";
import Carousel from "react-multi-carousel";
import editImg from "../assets/images/user.png"
import cartImg from "../assets/images/cart.png"
import "react-multi-carousel/lib/styles.css";
import { Form } from "../components/form";
import { BackBtn } from "../components/backBtn";

export const ProductDetaills = () => {
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
        {/* <div className={productDeatilsPageStyle.container}> */}
        <div className={productDeatilsPageStyle.detailsContainer}>
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
        <img src={editImg} />
        <img src={cartImg} />
        <img src={editImg} />
        <img src={cartImg} />
        <img src={editImg} />
        <img src={cartImg} />
        <img src={editImg} />
        
      </Carousel>
      </div>
        {/* </div> */}
      ;
    </>
  );
};
