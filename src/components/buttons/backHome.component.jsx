import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router";

const BUTTON_TYPES_URL = {
  contact: "hero-container",
  projectCards: "featured-projects-section",
  projectPage: "project-cards",
  aboutMe: "about-section",
  back: "featured-projects-section",
};
export default function BackHome({ buttonType }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (buttonType === "projectPage") {
      return navigate(-1);
    } else {
      return navigate("/", { replace: true }, [navigate]);
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 16px 6px rgba(86, 79, 224, 0.6)",
        display: "inline-block",
        borderRadius: "50%",
        height: "45px",
        width: "45px",
        marginBlock: "2rem",
        "&:hover": {
          fontWeight: "600",
          transform: "scale(1.1)",
          transition: ".3s ease-in",
          boxShadow: "rgb(0, 0, 0, 0.3) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.2) -3px -3px 6px 1px inset !important",
        },
      }}
    >
      <a href={buttonType !== "projectPage" && `#${BUTTON_TYPES_URL[buttonType]}`}>
        <Button sx={{ ml: { sx: 4, md: 0 } }} size="small" onClick={handleOnClick}>
          <AiOutlineArrowLeft fontSize="24px" />
        </Button>
      </a>
    </Box>
  );
}
