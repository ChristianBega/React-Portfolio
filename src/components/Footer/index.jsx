import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
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
      <Grid xs={12}>
        <Socials checked={true} />
      </Grid>
    </StyledGrid>
  );
}

export default Footer;
