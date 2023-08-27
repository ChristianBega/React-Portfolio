import { Link as BrowserLink, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Link, List, ListItem, Typography, useMediaQuery, styled } from "@mui/material";

const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
const StyledListItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  "&:hover": {
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
    color: "Red",
  },
}));

const StyledLinkText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
}));

// Menu items (nav links)
const menuItemData = [
  { linkName: "Home", urlPath: "#hero-section", icon: "" },
  { linkName: "About", urlPath: "#about-section", icon: "" },
  { linkName: "Projects", urlPath: "#featured-projects-section", icon: "" },
  { linkName: "Contact", urlPath: "/contact", icon: "" },
];

// Get menu items
const getMenuItems = (handleClick) => (
  <StyledList>
    {menuItemData.map(({ urlPath, linkName, index }) => (
      <StyledListItem key={index}>
        {linkName === "Contact" ? (
          <BrowserLink onClick={() => handleClick()} style={{ textDecoration: "none" }} to={urlPath} key={linkName}>
            <StyledLinkText>{linkName}</StyledLinkText>
          </BrowserLink>
        ) : (
          <Link onClick={() => handleClick()} href={urlPath} key={linkName}>
            <StyledLinkText>{linkName}</StyledLinkText>
          </Link>
        )}
      </StyledListItem>
    ))}
  </StyledList>
);

export default function NavigationListItems({ handleClose }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    handleClose && handleClose();
  };
  return <>{getMenuItems(handleClick)}</>;
}
