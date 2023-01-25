import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import BottomNavigation from "@mui/material/BottomNavigation";
import { Typography } from "@mui/material";
import React from "react";
import Socials from "../Socials";
const StyledBottomNavigation = styled(BottomNavigation)({
  backgroundColor: "var(--another-gray)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingInline: "2rem",
});
function Footer({ checked }) {
  return (
    <>
      <StyledBottomNavigation>
        <Typography variant="h6" component="h1" sx={{ color: "red" }}>
          <Link to="/React-Portfolio">Chris Bega</Link>
        </Typography>
        <Socials checked={true} />
      </StyledBottomNavigation>
    </>
  );
}

export default Footer;
