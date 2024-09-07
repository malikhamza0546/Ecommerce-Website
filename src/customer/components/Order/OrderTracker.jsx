import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const OrderTracker = ({ activeStep }) => {
  const steps = ["Placed", "Order Confirmed", "Shipped", "Shipped", "Shipped"];

  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ color: "#9155FD" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
