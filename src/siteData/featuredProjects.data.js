import FinancialTrackerVideo from "../Assets/videos/GoldenGooseFianceDemo.mp4";
import HangryVideo from "../Assets/videos/HangryDemo.mp4";

export const featuredProjectsData = [
  // Overland baseball
  {
    name: "Overland Baseball",
    description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    longDescription: "long desc",
    videoDemo: HangryVideo,
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
    videoDemo: HangryVideo,
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
// Overland High School’s baseball team. This application was built with React which offers a smooth and efficient user experience. Additionally, this application is fully responsive to ensure a platform that is easy to access on all devices.
