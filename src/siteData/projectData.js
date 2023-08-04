// versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
// more about the project - wire frames, figma designs, etc.
import FinancialTrackerVideo from "../Assets/videos/GoldenGooseFianceDemo.mp4";
import FinancialTrackerImage from "../Assets/images/FinaicalTracker.png";

import HangryVideo from "../Assets/videos/HangryDemo.mp4";
import HangryImage from "../Assets/images/Hangry.PNG";

import StudyAppVideo from "../Assets/videos/StudyBuddiesDemo.mp4";
import StudyAppImage from "../Assets/images/StudyBuddyApp.png";

import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import WeatherDashboardImage from "../Assets/images/WeatherDashboard.PNG";

import OverlandBaseball from "../Assets/videos/overlandBaseball.mp4";
import OverlandBaseballImage from "../Assets/images/overlandBaseball.png";

import BlogSiteVideo from "../Assets/videos/blogSite.mp4";
import BlogSiteImage from "../Assets/images/blogSite.png";

export const featuredProjectsData = [
  // Overland baseball
  {
    name: "Overland Baseball",
    description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    longDescription:
      "Overland Baseball's website is a single page React application that provides it's users a convenient way to access and browse different team information. The application is built with React and Material UI to provide a polished and functional front end. Additionally the website features working forms using Email Js, image sliders, and timelines.",
    videoDemo: OverlandBaseball,
    imageDemo: OverlandBaseballImage,
    link: "https://overlandbaseball.com/",
    repo: "https://github.com/ChristianBega/Overland-Baseball-Website",
    technology: ["React", "Material UI", "Framer motion", "Email Js", "React Form Hook"],
    role: [
      "Developed application from ground up starting with creating wire frames, designing site layout and, and creating logic and functionality for the website.",
      "Worked directly with client to determine user criteria, implemented and revised new features for user needs, and delivered a functional user friendly web application.",
      "Need to add role coming soon...",
    ],
    // learnings: [""],
  },
  // Blog site
  {
    name: "Blog Site",
    description:
      "A MERN full stack blog site web application which allows users a way to create a blog post, leave comments, and update their profile.",
    longDescription:
      "Coding Circle is a MERN full-stack blog web application that offers users a way to create an account, leave posts and comments, and share their thoughts and learnings. The application's front end uses React and Daisy UI. And is supported by Firebase auth and a backend built with Express, Node, and MongoDB.",
    videoDemo: BlogSiteVideo,
    imageDemo: BlogSiteImage,
    link: "deployed",
    repo: "https://github.com/ChristianBega/Blog-Site",
    technology: ["React", "MongoDB", "Tailwind", "Daisy UI", "Express", "Node", "MongoDb", "Firebase Auth"],
    role: [
      "Built project from scratch which included creating wire frames and database schemas which helped provided clarity and direction for the application.",
      "Handled user authentication with Firebase, and established a working communication with the MongoDB NoSQL database.",
      "Confirmed the applications features were tested and identify and rectified any bugs and issues, ensuring a smooth user experience.",
    ],
  },
  // Golden Goose
  {
    name: "Golden Goose Finance",
    description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
    longDescription:
      "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
    videoDemo: FinancialTrackerVideo,
    imageDemo: FinancialTrackerImage,
    link: "https://golden-goose-finance.herokuapp.com/",
    repo: "https://github.com/ChristianBega/Golden-Goose-Finance",
    technology: ["React", "Javascript", "MongoDB", "Express", "Node", "Material UI", "Mongoose ODM", "JSON web tokens"],
    role: [
      "Provided assistance to back-end development by designing models, resolvers, and typeDefs for REST API.",
      "Led the integration of the REST API to a React Js front-end. Utilized GraphQL queries and mutations to read and update data.",
      "Need to add role coming soon...",
    ],
  },
];

export const allProjectData = [
  // Weather dashboard
  {
    name: "Weather Dashboard",
    description: "A weather dashboard web application that retrieves and displays daily weather forecast.",
    longDescription:
      "This weather dashboard is a React single-page application that utilizes 3rd Party APIs to fetch and retrieve weather forecast data. The Open Weather API allows users to search for a city and retrieve weather forecast data. The Google Maps API then takes the city's coordinates and displays a map of that city. The overall goal of this project was to create a simple and user-friendly application that allowed users to quickly and easily search for a city and view its current weather conditions.",
    videoDemo: WeatherDashboardVideo,
    imageDemo: WeatherDashboardImage,

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
    videoDemo: StudyAppVideo,
    imageDemo: StudyAppImage,

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
    imageDemo: HangryImage,

    link: "https://mandiebot.github.io/Hangry/",
    repo: "https://github.com/ChristianBega/Hangry",
    technology: ["Javascript", "3rd Party API", "Boot Strap"],
  },
  ...featuredProjectsData,
];
