import React from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import Grow from "@mui/material/Grow";
const Item = styled(Box)({
  textAlign: "center",
});

export default function Socials({ checked }) {
  return (
    <>
      <IconContext.Provider value={{ size: "1.3rem" }}>
        <Grow in={checked} style={{ transformOrigin: "0 0 0" }} {...(checked ? { timeout: 3500 } : {})}>
          <Stack direction="row" spacing={5} sx={{ justifyContent: "center", mt: 5 }}>
            <Item>
              <a href="https://github.com/T3mpz" target="_blank">
                <FaGithub />
              </a>
            </Item>
            <Item>
              <a href="https://www.linkedin.com/in/christian-bega-4b63b3216/" target="_blank">
                <FaLinkedinIn />
              </a>
            </Item>
            <Item>
              <a href="https://twitter.com/ChristianBega4" target="_blank">
                <FaTwitter />
              </a>
            </Item>
          </Stack>
        </Grow>
      </IconContext.Provider>
    </>
  );
}
