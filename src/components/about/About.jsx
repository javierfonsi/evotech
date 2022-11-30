import React from "react";
import { motion } from "framer-motion";
//import BannerImage from "../common/drone-3.jpg";
import { Box, Card, CardContent, Typography } from "@mui/material";

const texts = [
  "Somos",
  "Una compañía colombiana, con experiencia en el terreno de RF, constituida por Ingenieros especializados en diferentes áreas con un objetivo común: Unir nuestro conocimiento y experiencia para proporcionar soluciones de ingeniería integrales, innovadoras y de alta calidad. Un equipo joven, unas directrices claras y unas perspectivas favorables, hacen de EVOTECH, una organización que se apoya en la convicción que la calidad y el servicio son el objetivo de todos y cada uno de los componentes de nuestra compañía. La preocupación por satisfacer en todo momento las necesidades de nuestros clientes, se ve reflejada en la amplia gama de soluciones profesionales ofrecidas por nuestra empresa en ingeniería civil, telecomunicaciones, eléctrica y electrónica.",
  "Acerca de nosotros",
  "Una empresa con presencia en Colombia, que nace el 2020 y ha venido construyendo procesos de ingeniería para sus clientes. Hoy contamos con un equipo de colaboradores para desarrollar soluciones innovadoras que sean de apoyo y motor para el crecimiento de nuestros clientes, nuestras gente y nuestros aliados."
]

const About = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `url(https://res.cloudinary.com/dzkp92nfz/image/upload/v1669776560/evotech/About_rajmo3.jpg)`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ with: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Box 
        sx={{
          maxWidth: 750,
          m: "auto",
          backgroundColor: "transparent",
          display:{ xs: "block", md:"flex" },
          alignContent:"space-around",
          pt:10,
          pb:10,
          height: {md:"80vh"}
        }}>

        <Card
          sx={{
            maxWidth: 350,
            m: "auto",
            backgroundColor: "transparent",
            color: "white" 
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {texts[0]}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", color: "white" }}
            >
            {texts[1]}
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 350,
            m: "auto",
            mt: 15,
            br: 6,
            backgroundColor: "transparent",
            color: "white" 
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
            {texts[2]}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: "justify", color: "white" }}
            >
            {texts[3]}
            </Typography>
          </CardContent>
        </Card>
      </Box>

    </motion.div>
  );
};

export default About;
