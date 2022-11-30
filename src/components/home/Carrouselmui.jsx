import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    //label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_1x850_mlh3ck.jpg",
  },
  {
    //label: 'Bird',
    imgPath:
      "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/rbh_2x850_nwxrmp.jpg",
  },
  {
    //label: 'Bali, Indonesia',
    imgPath:
      "https://res.cloudinary.com/dzkp92nfz/image/upload/v1669775635/evotech/home/scanner_h1x850_oa9nzc.jpg",
  },
];

function Carrouselmui() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 30,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/*<Typography>{images[activeStep].label}</Typography>*/}
        {/*<Typography>Somos una empresa de orientada hacia el area de técnología, especificamente telefonía movil y fija. </Typography>*/}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                //component="div"

                sx={{
                  height: 405,
                  display: "block",
                  //maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "cover",
                  //title: 'Nuestro foco principal son actividades des implementación, servicios de planeación y optimización de redes fijas y móviles.'
                }}
                backgroundImage={step.imgPath}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Typography sx={{
        fontSize: {xs:"1.4em", sm:"1.7em", md:"2.1em", lg:"2.6em"},
        color:"white",
        position:"absolute",
        top:"35%",
        left:{ xs:"5%", lg:"25%"},
        right:{ xs:"5%", sm:"10%"},
        tranform: "translate(-50%, -50%)",
        textShadow: "000px rgba(0,0,0,0.8)"

      }}>
        Nuestro foco principal son actividades de implementación, servicios de
        planeación, optimización de redes fijas y móviles.
      </Typography>
    </Box>
  );
}

export default Carrouselmui;
