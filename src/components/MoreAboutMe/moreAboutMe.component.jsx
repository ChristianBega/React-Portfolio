import styled from "@emotion/styled";
// List, ListItem, Paper,
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

// const mockData = [
//   {
//     topicName: "My programming journey",
//     description: "",
//   },
//   {
//     topicName: "Front-end",
//     description: ["I creating SPA with react that are full mobile responsive...", "2", "3"],
//   },
//   {
//     topicName: "Back end skills",
//     description: ["2", "2", "3"],
//   },
//   {
//     topicName: "Algos",
//     description: ["2", "2", "3"],
//   },
// ];

// const StyledCard = styled(Paper)({
//   backgroundColor: "rgba(165, 165, 165, .3)",
//   minHeight: "160px",
//   borderRadius: ".6rem",
//   padding: "1.2rem 1rem",
// });
const StyledContainer = styled(Box)({
  display: "grid",
  gap: "1rem",
});

export default function MoreAboutMe() {
  return (
    <StyledContainer>
      <Typography typography="h1">Coming Soon</Typography>
      {/* {mockData.map((topic) => (
        <StyledCard className="aboutMeCard">
          <Typography component="h2" variant="h5">
            {topic.topicName}
          </Typography>
          <List>
            <ListItem>{topic.description}</ListItem>
          </List>
        </StyledCard>
      ))} */}
    </StyledContainer>
  );
}
