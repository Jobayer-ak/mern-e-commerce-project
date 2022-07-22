import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { styled } from "@mui/system";

import { bannerData } from "../../constants/data";

const Image = styled("img")({
  width: "100%",
  height: 280,
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      itemClass="carousel-item-padding-40-px"
      dotListClass="custom-dot-list-style"
      containerClass="carousel-container"
    >
      {bannerData.map((data) => (
        <Image src={data.url} key={data.id} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
