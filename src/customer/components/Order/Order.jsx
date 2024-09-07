import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./orderCard"; // Notice the capitalization

const Order = () => {
  const orderStaus = [
    { label: "On the Way", value: "on_the_way" },
    { label: "Delivered", value: "Delivered" },
    { label: "Cancelled", value: "Cancelled" },
    { label: "Returned", value: "Returned" },
  ];

  return (
    <div className="lg:px-20 px:5">
      <Grid className="mt-5" container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg text-left">Filter</h1>
            <div className="space-y-4 ">
              <h1 className="font-semibold text-left">Order Status</h1>
              {orderStaus.map((option) => {
                return (
                  <div className="flex items-center" key={option.value}>
                    <input
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      id={option.value}
                    />
                    <label
                      className="ml-3 text-sm text-grey-600"
                      htmlFor={option.value}
                    >
                      {option.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 2, 3, 4].map((item) => {
              return <OrderCard />;
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
