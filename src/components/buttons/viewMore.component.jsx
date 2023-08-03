import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";

export default function ViewMore({ buttonType }) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/${buttonType}`, { replace: true }), [buttonType, navigate]);

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",
        display: "inline-block",
        "&:hover": {
          fontWeight: "600",
          transform: "scale(1.1)",
          transition: ".3s ease-in",
          boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
        },
      }}
    >
      <Button onClick={handleOnClick} size="medium">
        {buttonType === "contact" ? "Contact Me" : buttonType === "about-me" ? "Learn more about me" : "View All Projects"}
      </Button>
    </Box>
  );
}
