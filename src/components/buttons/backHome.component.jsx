import { Button } from "@mui/material";
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
    <a href={buttonType !== "projectPage" && `#${BUTTON_TYPES_URL[buttonType]}`}>
      <Button sx={{ ml: { sx: 4, md: 0 } }} size="small" onClick={handleOnClick}>
        <AiOutlineArrowLeft fontSize="24px" />
      </Button>
    </a>
  );
}
