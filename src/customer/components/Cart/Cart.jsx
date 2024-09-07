import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative my-5">
        <div className="col-span-2 ">
          {[1, 2, 3, 4].map(() => {
            return <CartItem />;
          })}
        </div>
        <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border px-5">
            <p className="uppercase font-bold opacity-60 pb-4 text-left">
              Price details
            </p>
            <hr />
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>4697</span>
            </div>
            <div className="flex justify-between pt-3 ">
              <span>Discount</span>
              <span className="text-green-600">234</span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-3  font-bold">
              <span className="bold">Total Amount</span>
              <span className="text-green-600">1012</span>
            </div>
          </div>
          <Button
            onClick={handleCheckout}
            variant="contained"
            className="w-full justify-end flex-end"
            sx={{
              px: "2 rem",
              py: "1 rem",
              bgcolor: "#9155fd",
              marginTop: "3rem",
            }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
