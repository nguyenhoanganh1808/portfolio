import type { Education, ResearchPublication } from "./types";

export const education: Education[] = [
  // {
  //   degree: "Master of Computer Science",
  //   institution: "Stanford University",
  //   period: "2018 - 2020",
  //   description:
  //     "Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on neural network optimization techniques.",
  // },
  {
    degree: "Bachelor's Degree in Software Engineering",
    institution: "UIT - University of Information Technology",
    period: "2021 - 2025",
    description: ["GPA: 8.28/10. Degree grade: Good"],
  },
];

export const researchPublications: ResearchPublication[] = [
  {
    title:
      "Aerial Vehicle Detection at Night: A Synthesized Dataset and Performance Evaluation of State-of-the-Art Object Detection Models",
    publisher: "ResearchGate",
    date: "2024",
    summary:
      "This paper introduces a synthesized dataset for aerial vehicle detection at night and evaluates the performance of state-of-the-art object detection models.",
    url: "https://www.researchgate.net/publication/387595539_Aerial_Vehicle_Detection_at_Night_A_Synthesized_Dataset_and_Performance_Evaluation_of_State-of-the-Art_Object_Detection_Models",
    tags: [
      "Computer Vision",
      "Object Detection",
      "Deep Learning",
      "Aerial Imagery",
    ],
  },
];
