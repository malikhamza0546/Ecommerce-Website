import React, { useState } from "react";

export const HomeSectionCard = ({ items }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[12rem] mx-3 ">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={items?.imageUrl}
        />
      </div>
      <div className="p-4 flex flex-col items-start w-full">
        <h3 className="text-lg font-medium text-grey-900"> {items?.brand}</h3>
        <p className="mt-2 text-sm text-grey-500">Mens Solid Cotton</p>
      </div>
    </div>
  );
};
