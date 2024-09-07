import Button from "@mui/material/Button";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
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
    </div>
  );
};

export default OrderSummary;
