import React from "react";

const mockData = [
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
  {
    topic: "Programming",
    description: "Lorem Lorem Lorem",
  },
];

export default function AboutMe() {
  return (
    <div>
      {mockData.map((e) => (
        <div className="aboutMeCard">
          <h2>{e.topic}</h2>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}
