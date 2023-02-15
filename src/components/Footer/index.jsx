import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import React from "react";
import Socials from "../Socials";

const StyledGrid = styled(Grid)({
  backgroundColor: "var(--dark-header-bg)",
  padding: "1rem 2rem",
  alignItems: "center",
  rowGap: "1rem",
});

function Footer() {
  return (
    <StyledGrid container spacing={2}>
      <Grid xs={12} md={4}>
        <Typography variant="h6" component="h1" textAlign="center">
          <Link to="/">Chris Bega</Link>
        </Typography>
      </Grid>
      <Grid xs={6} md={4}>
        <Typography variant="h6" component="h1" textAlign="center">
          <Link to="/contact">Contact me</Link>
        </Typography>
      </Grid>
      <Grid xs={6} md={4}>
        <Socials checked={true} />
      </Grid>
    </StyledGrid>
  );
}

export default Footer;
