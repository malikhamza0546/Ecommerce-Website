import { IconButton, Button } from "@mui/material";
import React from "react";
import { mens_kurta } from "../../Data/MensKurta/MensKurta";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={mens_kurta[0].imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 text-left">Size: L,white</p>
          <p className="opacity-70 mt-2 text-left">Seller: Crishytio Fashion</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6 pt-6">
            <p className="font-semibold">199 RS</p>
            <p className="opacity-50 line-through">211 RS</p>
            <p className="text-green-600 font-semibold">211 RS</p>
          </div>
          <div>
            <Button sx={{ color: "RGB(145 85 253)", backgroundColor: "Pink" }}>
              Remove
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10  pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <DoNotDisturbOnOutlinedIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <ControlPointOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
