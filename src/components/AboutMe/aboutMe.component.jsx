import { Grid, Typography } from "@mui/material";
import ViewMore from "../buttons/viewMore.component";
import { aboutTextData } from "../../siteData/aboutMeData";

export default function AboutMe() {
  return (
    <Grid id="about-section" container sx={{ border: "1px solid red", justifyContent: "center", alignItems: "center", my: { xs: 5, md: 10 } }}>
      {/* Grid item - header */}
      <Grid textAlign="left" item xs={12} sx={{ my: { xs: 10, md: 15 } }}>
        <Typography typography="h2" component="h2" variant="h2">
          About Me
        </Typography>
      </Grid>

      {/* Grid item - bio */}
      <Grid item xs={12} md={8} textAlign="left">
        {aboutTextData.map((text) => (
          <Typography typography={{ xs: "bodyTextSm", md: "bodyTextLg" }} sx={{ maxWidth: "800px" }} mb={4}>
            {text.text}
          </Typography>
        ))}
        <ViewMore buttonType="about-me" />
      </Grid>
      <Grid item xs={12} md={4}>
        <p>Image</p>
      </Grid>
      <Grid item xs={12} md={12}>
        <p>My toolkit `emoji`</p>
      </Grid>
    </Grid>
  );
}
