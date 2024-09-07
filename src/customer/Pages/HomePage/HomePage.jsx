import React from "react";
import MainCarousal from "../../components/HomeCarousal/MainCarousal";
import { HomeSectionCarousal } from "../../components/HomeSectionCarousal/HomeSectionCarousal";
const HomePage = () => {
  return (
    <div>
      <div className="relative" style={{ zIndex: -30 }}>
        <MainCarousal />
      </div>
      <div className="space-y-10 py-20 px-5 lg:px-10">
        <HomeSectionCarousal SectionName="Mens Kurta" />
        <HomeSectionCarousal SectionName="Womens Saree" />
        <HomeSectionCarousal SectionName="Mens T-Shirt" />
      </div>
    </div>
  );
};

export default HomePage;
