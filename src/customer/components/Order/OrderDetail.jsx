import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { OrderTracker } from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import { mens_kurta } from "../../Data/MensKurta/MensKurta";
import { deepPurple } from "@mui/material/colors";
import { StarBorder } from "@mui/icons-material";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { useNavigate } from "react-router-dom";
const OrderDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text:lg py-7">
          <AddressCard />
        </h1>
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex flex-row  ">
                  <img
                    className="w-[8rem] h-[8rem] object-cover object-top"
                    src={mens_kurta[0].imageUrl}
                    alt=""
                  />
                  <div className="space-y-2 ml-5 flex flex-col items-start">
                    <p className="font-semibold">
                      Mens Slims Mid Rise Black Jaans
                    </p>

                    <p className="opacity-50 font-semibold">Color:Pink</p>
                    <p>Size:M</p>

                    <p>Seller:lineria</p>
                    <p>Rs: 10099</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarBorderPurple500OutlinedIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default OrderDetail;
