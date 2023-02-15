import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineArrowRight } from "react-icons/ai";

const mockData = [
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Skills",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Hobbies",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Extra...",
    description: "Lorem Lorem Lorem",
  },
];
const StyledCard = styled(Paper)({
  backgroundColor: "#c4c4c4",
  minHeight: "160px",
  borderRadius: ".6rem",
  padding: "1.2rem 1rem",
  // display: "grid",
  // justifyContent: "center",
  // alignContent: "center",
  // "&:hover": {
  //   transform: "scale(110%)",
  //   transition: "ease-in-out",
  // },
});
const StyledContainer = styled(Box)({
  display: "grid",
  gap: "1rem",
});

export default function AboutMe() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", { replace: true }), [navigate]);
  return (
    <StyledContainer>
      {mockData.map((e) => (
        <StyledCard className="aboutMeCard">
          <Typography component="h2" variant="h5">
            {e.topic}
          </Typography>
          <p>{e.description}</p>
        </StyledCard>
      ))}
      <Box textAlign="center" marginTop={3}>
        <Button onClick={handleOnClick}>
          Continue to my projects <AiOutlineArrowRight />
        </Button>
      </Box>
    </StyledContainer>
  );
}
