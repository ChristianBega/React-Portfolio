import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useCallback } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router";

import Resume from "../components/Resume";
export default function ResumePage() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/contact", { replace: true }), [navigate]);
  return (
    <Container sx={{ minHeight: "85vh", my: 5 }}>
      <Resume />
      <Box textAlign="center" marginTop={3}>
        <Button onClick={handleOnClick}>
          Contact me
          <AiOutlineArrowRight />
        </Button>
      </Box>
    </Container>
  );
}
