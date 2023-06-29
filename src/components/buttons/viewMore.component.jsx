import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";

export default function ViewMore({ buttonType }) {
  // console.log(buttonType);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(`/${buttonType}`, { replace: true }), [navigate]);

  return (
    <Button onClick={handleOnClick} size="medium" sx={{ marginY: 5 }}>
      {buttonType === "contact" ? "Contact Me" : buttonType === "about-me" ? "Learn more about me" : "View All Projects"}
    </Button>
  );
}
