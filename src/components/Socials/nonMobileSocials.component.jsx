import { Box, Link, Stack, styled } from "@mui/material";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { socialIconVariants } from "../../FramerMotion/animation";

const Item = styled(Box)({
  textAlign: "center",
  zIndex: "2000",
});

const LinkItems = [
  {
    linkName: "git hub",
    linkUrl: "https://github.com/ChristianBega",
    linkIcon: <FaGithub />,
  },
  {
    linkName: "Linked In",
    linkUrl: "https://www.linkedin.com/in/christian-bega-4b63b3216/",
    linkIcon: <FaLinkedinIn />,
  },
  {
    linkName: "twitter",
    linkUrl: "https://twitter.com/ChristianBega4",
    linkIcon: <FaTwitter />,
  },
];

export default function NonMobileSocials() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <Stack direction="column" spacing="2rem" sx={{ position: "relative", justifyContent: "space-around", height: "50%", mt: 5, pr: 4 }}>
          {LinkItems.map(({ linkName, linkUrl, linkIcon }, index) => {
            return (
              <Item
                key={linkName + (index + 1)}
                component={motion.div}
                initial={socialIconVariants.hidden}
                variants={socialIconVariants}
                whileInView={socialIconVariants.visible}
                viewport={{
                  once: false,
                }}
                custom={index}
              >
                <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
                  {linkIcon}
                </Link>
              </Item>
            );
          })}
        </Stack>
      </IconContext.Provider>
    </div>
  );
}
