import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const StyledGrid = styled(Grid)({
  backgroundColor: "var(--dark-header-bg)",
  padding: "1rem 2rem",
  alignItems: "center",
  rowGap: "1rem",
});

function Footer() {
  return (
    <StyledGrid id="footer" container spacing={2}>
      <Grid xs={12}></Grid>
    </StyledGrid>
  );
}

export default Footer;
