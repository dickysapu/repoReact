import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As an enthusiastic QA professional, I have experience in team collaboration and manual testing using
Jira and Postman for end-to-end and API projects. I'm currently expanding my skills in test
automation with Katalon, Cypress and jest . With a "learn by doing" approach, I'm committed to
adding value to projects. My combination of collaborative skills, manual testing experience, and a
passion for automation makes me a valuable contributor to development teams.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Mar, 2024 - Oct, 2024",
    role: "QA",
    company: "Dompet Kilat",
    description: `Provide test scenarios and procedures for upcoming features, Review and approve test results based on requirements from the product team, 
    Help maintain the quality of products with a focus on Lender App, and check the database to
ensure data consistency for the features being developed, Identify, analyze, and report defects found during testing, including API testing, styling, and
integration, Test new features in the staging environment before deployment to production and Create automation scripts for specific features in the Lender App.`,
    technologies: [
      "Jira",
      "Spreadsheet",
      "Postman",
      "DBEaver",
      "Cypress.io",
      "Katalon",
      "Jmeter",
      "Qase.io",
    ],
  },
  {
    year: "Sep, 2023 - Mar, 2024",
    role: "QA Intern",
    company: "Dompet Kilat",
    description: `Create test cases from features in development for use in staging, Communicate with QA and Product teams to understand task requirements, 
    Conduct API testing, styling, and integration in the development environment, Report any bugs found during testing and ensure thorough testing in the development phase to
prevent bug leaks in Staging and Production and Perform testing in staging to prevent bugs in Production.`,
    technologies: ["Jira", "Spreadsheet", "Postman", "DBEaver", "Jest"],
  },
  {
    year: "Oct, 2022 - Dec, 2022",
    role: "Internship",
    company: "OJK",
    description: `Perform on User Acceptance Test (UAT), Perform on System Integration Testing (SIT) and Create a daily testing report document.`,
    technologies: ["Spreadsheet"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "East Jakarta ",
  phoneNo: "+62 812 8771 6101 ",
  email: "sap.dicky19@gmail.com",
};
