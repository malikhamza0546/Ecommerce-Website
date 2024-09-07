import React, { useState, useRef } from "react";
import { HomeSectionCard } from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Button } from "@headlessui/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { mens_kurta } from "../../Data/MensKurta/MensKurta";

export const HomeSectionCarousal = ({ SectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.8 },
  };

  const items = mens_kurta
    .slice(0, 10)
    .map((items) => <HomeSectionCard key={items.id} items={items} />);

  const slidePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.slidePrev(); // Move the carousel to the previous slide
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideForward = () => {
    if (activeIndex < items.length - 1) {
      carouselRef.current.slideNext(); // Move the carousel to the next slide
      setActiveIndex(activeIndex + 1);
    }
  };

  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  return (
    <div className="relative px-4 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-grey-800 py-5 text-left">
        {SectionName}
      </h2>
      <div className="relative p-5 border border-grey">
        <AliceCarousel
          ref={carouselRef} // Reference to the carousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          paddingRight={30}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex} // Correct event handler
        />

        {/* Next Button */}
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideForward}
            variant="contained"
            className="z-50 bg-white flex justify-center items-center"
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              style={{ transform: "rotate(180deg)", color: "black" }}
            />
          </Button>
        )}

        {/* Previous Button */}
        {activeIndex > 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 bg-white flex justify-center items-center"
            style={{
              position: "absolute",
              top: "50%",
              left: "-20px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              style={{ transform: "rotate(0deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};
