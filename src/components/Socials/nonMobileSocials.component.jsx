import { Box, Stack, styled } from "@mui/material";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Item = styled(Box)({
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.2)",
    transition: ".2s ease-in-out",
  },
});

export default function NonMobileSocials() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Stack direction="column" spacing="2rem" sx={{ position: "relative", justifyContent: "space-around", height: "50%", mt: 5, pr: 4 }}>
          <Item>
            <a href="https://github.com/ChristianBega" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
}
