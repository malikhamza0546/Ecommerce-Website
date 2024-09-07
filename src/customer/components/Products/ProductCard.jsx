import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCardStyling.css";
const ProductCard = ({ Items }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/product/${5}`);
      }}
      className="ProductCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={Items.imageUrl}
          alt=""
        ></img>
      </div>

      <div className="textPart bg-white p-3">
        <div className="flex flex-col items-start text-left">
          <p className="font-bold opacity-60 ">{Items.brand}</p>
          <p className="items-start">{Items.title}</p>
          <p>Mens White Top</p>
        </div>
        <div className="flex items-center  space-x-2">
          <p className="font-semibold">{Items.price}</p>
          <p className="line-through opacity-50">199</p>
          <p className="text-green-600 font-semibold">
            {Items.discountPersent} off{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
