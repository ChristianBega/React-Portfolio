// versionHistory : [{}] - pull in github api data to show commit history to show recent improvements.
// more about the project - wire frames, figma designs, etc.
//? figmas/wireframs : [{}, {}, {}]
import FinancialTrackerVideo from "../Assets/videos/GoldenGooseFianceDemo.mp4";
import FinancialTrackerImage from "../Assets/images/FinaicalTracker.png";

import HangryVideo from "../Assets/videos/HangryDemo.mp4";
import HangryImage from "../Assets/images/Hangry.PNG";

import StudyAppVideo from "../Assets/videos/StudyBuddiesDemo.mp4";
import StudyAppImage from "../Assets/images/StudyBuddyApp.png";

import WeatherDashboardVideo from "../Assets/videos/WeatherDashboardDemo-Mobile.mp4";
import WeatherDashboardImage from "../Assets/images/WeatherDashboard.PNG";

import OverlandBaseballVideo from "../Assets/videos/overlandBaseball.mp4";
import OverlandBaseballImage from "../Assets/images/overlandBaseball.png";

import BlogSiteVideo from "../Assets/videos/blogSite.mp4";
import BlogSiteImage from "../Assets/images/blogSite.png";

import TeamProfileGeneratorImage from "../Assets/images/team-profile-generator.png";
// need video

import SocialNetworkImage from "../Assets/images/social-network.png";
// need video

import RockPaperScissorsImage from "../Assets/images/rock-paper-scissors.png";
import RockPaperScissorsVideo from "../Assets/videos/rock-paper-scissors.mp4";

import ReadMeGeneratorImage from "../Assets/images/readme-generator.png";
// need video

const createProject = (name, projectTag, description, longDescription, videoDemo, imageDemo, link, repo, technology, role, learnings) => {
  return { name, projectTag, description, longDescription, videoDemo, imageDemo, link, repo, technology, role, learnings };
};

export const featuredProjectsData = [
  // Overland
  createProject(
    "Overland Baseball",
    "front-end",
    "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    "Overland Baseball's website is a single page React application that provides it's users a convenient way to access and browse different team information. The application is built with React and Material UI to provide a polished and functional front end. Additionally the website features working forms using Email Js, image sliders, and timelines.",
    OverlandBaseballVideo,
    OverlandBaseballImage,
    "https://overlandbaseball.com/",
    "https://github.com/ChristianBega/Overland-Baseball-Website",
    ["React", "Material UI", "Framer motion", "Email Js", "React Form Hook"],
    [
      "Developed application from ground up starting with creating wire frames, designing site layout and, and creating logic and functionality for the website.",
      "Designed website wireframe to clarify UI/UX layout and interconnect crucial website information.",
      "Collaborated with client to determine and establish clear user criteria, user stories, and additional user requirements for the website.",
      "Integrated 3rd Party APIs and dependencies to handle form validation and emailing services.",
    ],
    ""
  ),
  // Blog Site
  createProject(
    "Blog Site",
    "full-stack",
    "A MERN full stack blog site web application which allows users a way to create a blog post, leave comments, and update their profile.",
    "Coding Circle is a MERN full-stack blog web application that offers users a way to create an account, leave posts and comments, and share their thoughts and learnings. The application's front end uses React and Daisy UI, and is supported by a backend built with Express, Node, and MongoDB.",
    //! And is supported by Firebase auth and a backend built with Express, Node, and MongoDB. "Firebase Auth"
    BlogSiteVideo,
    BlogSiteImage,
    "https://deployed.com/",
    "https://github.com/ChristianBega/Blog-Site",
    ["React", "MongoDB", "Tailwind", "Daisy UI", "Express", "Node", "MongoDb", "JWT", "Bcrypt"],
    [
      //! "Handled user authentication with Firebase, and established a working communication with the MongoDB NoSQL database.",
      "Built project from scratch which included creating wire frames and database schemas which helped provided clarity and direction for the application.",
      "Successfully setup express server connection and established a working communication with the MongoDB NoSQL database.",
      "Constructed the backend GraphQL typeDefs & Resolvers and integrated them to the front end.",
      "Confirmed the applications features were tested and identify and rectified any bugs and issues, ensuring a smooth user experience.",
    ],
    ""
  ),

  // Golden Goose
  createProject(
    "Golden Goose Finance",
    "full-stack",
    "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
    "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
    FinancialTrackerVideo,
    FinancialTrackerImage,
    "https://golden-goose-finance.herokuapp.com/",
    "https://github.com/ChristianBega/Golden-Goose-Finance",
    ["React", "Javascript", "MongoDB", "Express", "Node", "Material UI", "Mongoose ODM", "Bcrypt", "JSON web tokens", "GraphQL", "GraphQL Apollo"],
    [
      "Assisted back-end development team by designing models, resolvers, and typeDefs for REST API.",
      "Led the integration of the REST API to a React Js front-end utilizing GraphQL queries and mutations to preform CRUD operations.",
      "Utilized GraphQL Apollo server & client to test and verify Rest API routes and appropriate end points are working as expected.",
    ],
    ""
  ),
];

export const allProjectData = [
  // Rock Paper Scissors
  createProject(
    "Rock Paper Scissors",
    "front-end",
    "This application is a Front End Mentor challenge which was to recreate the game rock, paper, scissors.",
    "This application allows users to play the classic game rock, paper, scissors against a computer bot. The game includes a rules modal for new users, options for the user to select their move, and game result notifications.",
    RockPaperScissorsVideo,
    RockPaperScissorsImage,
    "", //!
    "https://github.com/ChristianBega/30DaysOfReact/tree/main/rock-paper-scissors",
    ["React Js", "Context", "React-Router-Dom", "Styled Components", "SCSS"],
    [
      "Worked with Figma design file and translated design into a functional React application.",
      "Built application fully from scratch with custom styled components and scss and leveraged the styled components to pass props to dynamically update UI.",
      "Integrated react context and local storage to persist and store the user data.",
    ]
  ),
  // Readme generator
  createProject(
    "README Generator",
    "back-end",
    "This project is command line application that will generate a README file.",
    "This README Generator is a command line application designed to streamline the process of creating README files. The prompt powered by the Inquirer node library prompts users with questions that covers the various aspects such as title, description, installations, licenses, features, and more. ",
    "5",
    ReadMeGeneratorImage,
    "",
    "https://github.com/ChristianBega/Professional-README-Generator",
    ["Node Js", "Inquirer", "Node Fs"],
    ["Coming soon...", "Coming soon...", "Coming soon..."]
  ),
  // Study Buddies
  createProject(
    "Study Buddies",
    "full-stack",
    "A full stack application that serves as a study productivity aid to help manage and access coding resources.",
    "Study Buddies is a full stack web application that gives users an efficient and convenient way to manage and access their coding resources. The backend API, built with a MySQL relational database, allows users to perform Create, Read, Update, and Delete (CRUD) operations on their resources. Our goal with Study Buddies is to help users maximize their study productivity by creating a single reference for all their coding resources.",
    StudyAppVideo,
    StudyAppImage,
    "https://studybuddiezzz.herokuapp.com/",
    "https://github.com/JerimiahK/studyBuddies",
    ["Handle Bars", "Javascript", "mySQL", "Express", "Node", "Boot Strap"],
    ["1.", "2.", "3."]
  ),
  // Weather dashboard
  createProject(
    "Weather Dashboard",
    "front-end",
    "A weather dashboard web application that retrieves and displays daily weather forecast.",
    "This weather dashboard is a React single-page application that utilizes 3rd Party APIs to fetch and retrieve weather forecast data. The Open Weather API allows users to search for a city and retrieve weather forecast data. The Google Maps API then takes the city's coordinates and displays a map of that city. The overall goal of this project was to create a simple and user-friendly application that allowed users to quickly and easily search for a city and view its current weather conditions.",
    WeatherDashboardVideo,
    WeatherDashboardImage,
    "https://reactweatherdashboard.netlify.app/",
    "https://github.com/ChristianBega/Weather-Dashboard",
    ["React", "Javascript", "3rd Party API", "Tailwind", "Local Storage"],
    ["Coming soon...", "Coming soon...", "Coming soon..."]
  ),
  // Hangry
  createProject(
    "Hangry",
    "front-end",
    "A food recipe application that provides users with recipes personalized by their dietary and nutritional search filters. ",
    "Hangry is a mobile-first web application that uses the Edamam Food Search Recipe 3rd party API to give users tailored recipe recommendations based on their dietary and nutritional preferences. Every recipe comes with comprehensive nutritional data, allowing users to make informed food choices.",
    HangryVideo,
    HangryImage,
    "https://mandiebot.github.io/Hangry/",
    "https://github.com/ChristianBega/Hangry",
    ["Javascript", "3rd Party API", "Boot Strap"],
    ["Coming soon...", "Coming soon...", "Coming soon..."]
  ),
  // Social Network
  createProject(
    "Social Network",
    "back-end",
    "A social network API where users can share their thoughts, react to friend's thoughts, and create a friend list.",
    "This social network API offers users a way to share their thoughts, engage with their friend's content, and establish meaningful connections through friend lists. It's powered by Express routing to a MongoDb database.",
    "",
    SocialNetworkImage,
    "",
    "https://github.com/ChristianBega/Social-Network-Api",
    ["MongoDB", "Mongoose ODM", "Express Js"],
    ["Coming soon...", "Coming soon...", "Coming soon..."]
  ),
  // Team Profile Generator
  createProject(
    "Team Profile Generator",
    "back-end",
    "This project is command line application that will generate a team profile page.",
    "The Team profile generator application allows users to input information about employees, including their names, roles, IDs, contact information, and more. And then will generate a team profile page based of the user inputs received.",
    "5",
    TeamProfileGeneratorImage,
    "",
    "https://github.com/ChristianBega/Team-Profile-Generator",
    ["Node Js", "Inquirer", "Javascript"],
    ["Coming soon...", "Coming soon...", "Coming soon..."]
  ),
  ...featuredProjectsData,
];
