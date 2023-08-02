import { styled, Container } from "@mui/material";
import CardImage from "./cardImage.component";
import CardText from "./cardText.component";

const StyledProjectContainerMobile = styled(Container)({
  padding: "0 !important",
  display: "flex",
  flexDirection: "column",
  minHeight: "22rem",
  height: "100%",
  border: "2px solid rgba(81, 81, 81, .5)",
  borderRadius: "12px",
  maxWidth: "525px",
});

export default function MobileProjectCard({ project, isMobile }) {
  return (
    <>
      <StyledProjectContainerMobile>
        <CardImage project={project} isMobile={isMobile} />
        <CardText project={project} />
      </StyledProjectContainerMobile>
    </>
  );
}
