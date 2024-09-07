import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarosualData } from "./MainCarousalData";

const items = MainCarosualData.map((item) => {
  return (
    <img
      src={item.Image}
      alt=""
      onClick={() => {}}
      role="Presentation"
      className="cursor-pointer"
      style={{
        width: "100%",
        height: "500px",
        objectFit: "cover",
        zIndex: "-50",
      }}
    />
  );
});

const MainCarousal = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCarousal;
