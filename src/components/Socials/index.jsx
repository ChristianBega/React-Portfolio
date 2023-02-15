import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
const Item = styled(Box)({
  textAlign: "center",
});

export default function Socials() {
  return (
    <>
      <IconContext.Provider value={{ size: "1.3rem" }}>
        <Stack direction="row" spacing={5} sx={{ justifyContent: "center" }}>
          <Item>
            <a href="https://github.com/T3mpz" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </Item>
          <Item>
            <a href="https://www.linkedin.com/in/christian-bega-4b63b3216/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </Item>
          <Item>
            <a href="https://twitter.com/ChristianBega4" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </Item>
        </Stack>
      </IconContext.Provider>
    </>
  );
}
