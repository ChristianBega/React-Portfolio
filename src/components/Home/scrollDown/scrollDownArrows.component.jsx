import React from "react";
import "./scrollDown.css";
import { Grid, IconButton } from "@mui/material";

export default function ScrollDownArrows() {
  return (
    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", maxHeight: "150px" }}>
      <IconButton href="#about-section">
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </IconButton>
    </Grid>
  );
}
