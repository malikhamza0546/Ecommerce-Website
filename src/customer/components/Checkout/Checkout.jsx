import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAdressFoam from "./DeliveryAdressFoam";
import OrderSummary from "./OrderSummary";
const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {

  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step"), 10); // Convert step param to number

  const [activeStep, setActiveStep] = React.useState(step || 0); // Default to 0 if step is not provided


  React.useEffect(() => {
    if (step >= 0 && step < steps.length) {
      setActiveStep(step);
    }
  }, [step]);

  

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%", margin: 3 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <div className="mt-10">
            <React.Fragment>
              {step === 2 ? <DeliveryAdressFoam /> : <OrderSummary />}
            </React.Fragment>
          </div>
        )}
      </Box>
    </div>
  );
}
