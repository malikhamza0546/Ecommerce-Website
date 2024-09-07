import { Avatar, Rating, Grid, Box } from "@mui/material";
import React from "react";

export const ProductReviewCard = () => {
  return (
    <div className="border my-5 p-5">
      <Grid container gap={2} spacing={3}>
        <Grid item xs={1}>
          <Box className="flex items-center justify-center">
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div>
            <div className="space-x-4">
              <div className="flex flex-col items-start justify-start ">
                <p className="font-semibold text-lg">Raam</p>
                <p class="text-gray-500">April 5, 2023</p>
                <Rating value={4.5} name="half-rating" readOnly></Rating>
                <p className="align-left">Hello The Product is very Good</p>
              </div>
            </div>
            {/* <Rating value={4.5} name="half-rating"></Rating> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
