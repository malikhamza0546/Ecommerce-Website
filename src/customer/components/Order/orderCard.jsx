import React from "react";
import { mens_kurta } from "../../Data/MensKurta/MensKurta";
import { Grid } from "@mui/material";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  // Updated component name to capitalize it
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/account/order/${4}`);
      }}
      className="p-5 shadow-lg hover:shadow-2xl border "
    >
      <Grid
        container
        className=""
        spacing={6}
        sx={{ justifyContent: "space-between" }}
      >
        <Grid item className="" xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={mens_kurta[0].imageUrl}
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2 text-left">Men Slim Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold text-left">
                Size: M
              </p>
              <p className="opacity-50 text-xs font-semibold text-left">
                Color: Black
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <FiberManualRecordOutlinedIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2"
                />
                <span>Delivered on March 03</span>{" "}
              </p>
              <p className="text-xs">Your Item has been deliver</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on March 03</span>{" "}
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
