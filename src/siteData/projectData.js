// versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
// more about the project - wire frames, figma designs, etc.
import FinancialTrackerVideo from "../Assets/videos/GoldenGooseFianceDemo.mp4";
import HangryVideo from "../Assets/videos/HangryDemo.mp4";
import StudyAppImg from "../Assets/videos/StudyBuddiesDemo.mp4";
import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import OverlandBaseball from "../Assets/videos/overlandBaseball.mp4";

export const featuredProjectsData = [
  // Overland baseball
  {
    name: "Overland Baseball",
    description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    longDescription: "long desc",
    videoDemo: OverlandBaseball,
    link: "https://overlandbaseball.com/",
    repo: "https://github.com/ChristianBega/Overland-Baseball-Website",
    technology: ["React", "Material UI"],
  },
  // Blog site
  {
    name: "Blog Site",
    description:
      "A MERN full stack blog site web application which allows users a way to create a blog post, leave comments, and update their profile.",
    longDescription: "Coming soon....",
    // videoDemo: HangryVideo,
    link: "deployed",
    repo: "https://github.com/ChristianBega/Blog-Site",
    technology: ["React", "MongoDB", "Tailwind"],
  },
  // Golden Goose
  {
    name: "Golden Goose Finance",
    description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
    longDescription:
      "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
    videoDemo: FinancialTrackerVideo,
    link: "https://golden-goose-finance.herokuapp.com/",
    repo: "https://github.com/ChristianBega/Golden-Goose-Finance",
    technology: ["React", "Javascript", "MongoDB", "Express", "Node", "Material UI", "Mongoose ODM", "JSON web tokens"],
  },
];

export const allProjectData = [
  // Weather dashboard
  {
    name: "React Weather Dashboard",
    description: "A weather dashboard web application that retrieves and displays daily weather forecast.",
    longDescription:
      "This weather dashboard is a React single-page application that utilizes 3rd Party APIs to fetch and retrieve weather forecast data. The Open Weather API allows users to search for a city and retrieve weather forecast data. The Google Maps API then takes the city's coordinates and displays a map of that city. The overall goal of this project was to create a simple and user-friendly application that allowed users to quickly and easily search for a city and view its current weather conditions.",
    videoDemo: WeatherDashboardVideo,
    link: "https://reactweatherdashboard.netlify.app/",
    repo: "https://github.com/ChristianBega/Weather-Dashboard",
    technology: ["React", "Javascript", "3rd Party API", "Tailwind", "Local Storage"],
  },
  // Study Buddies
  {
    name: "Study Buddies",
    description: "A full stack application that serves as a study productivity aid to help manage and access coding resources.",
    longDescription:
      "Study Buddies is a full stack web application that gives users an efficient and convenient way to manage and access their coding resources. The backend API, built with a MySQL relational database, allows users to perform Create, Read, Update, and Delete (CRUD) operations on their resources. Our goal with Study Buddies is to help users maximize their study productivity by creating a single reference for all their coding resources.",
    videoDemo: StudyAppImg,
    link: "https://studybuddiezzz.herokuapp.com/",
    repo: "https://github.com/JerimiahK/studyBuddies",
    technology: ["Handle Bars", "Javascript", "mySQL", "Express", "Node", "Boot Strap"],
  },
  // Hangry
  {
    name: "Hangry",
    description: "A food recipe application that provides users with recipes personalized by their dietary and nutritional search filters. ",
    // React- based,
    longDescription:
      "Hangry is a mobile-first web application that uses the Edamam Food Search Recipe 3rd party API to give users tailored recipe recommendations based on their dietary and nutritional preferences. Every recipe comes with comprehensive nutritional data, allowing users to make informed food choices.",
    videoDemo: HangryVideo,
    link: "https://mandiebot.github.io/Hangry/",
    repo: "https://github.com/ChristianBega/Hangry",
    technology: ["Javascript", "3rd Party API", "Boot Strap"],
  },
  ...featuredProjectsData,
];
