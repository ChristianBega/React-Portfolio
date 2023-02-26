import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PortfolioImage from "../../Assets/images/ImagePlaceHolder.png";

export default function HomeAbout() {
  return (
    <Grid container justifyContent="center" alignContent="center" spacing={{ sm: 0 }}>
      <Link to="/"></Link>
      <Grid item sx={12} md={6}>
        <Box
          component="img"
          sx={{
            width: { xs: "250px", md: "350px", lg: "425px" },
            height: { xs: "250px", md: "350px", lg: "425px" },
            borderRadius: "50%",
            // maxHeight: { xs: "250px", md: "500px" },
          }}
          src={PortfolioImage}
          alt="Christian Bega's Portfolio Image."
        ></Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography component="h2" sx={{ fontSize: { xs: "65px", md: "75px", lg: "80px" }, fontWeight: "700" }}>
          Hello,
        </Typography>
        <Typography component="span" sx={{ fontSize: { xs: "55px", md: "65px", lg: "75px" }, display: "block" }}>
          I'm Christian,
        </Typography>
        <Typography variant="p" component="p" mt={3} maxWidth={500} mx="auto" sx={{ fontSize: { md: "18px" } }}>
          A MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
      </Grid>
    </Grid>
  );
}
