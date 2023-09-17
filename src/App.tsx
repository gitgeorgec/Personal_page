import React from "react";
import RootLayout from "./components/RootLayout";
import ExperienceBlock from "./components/ExperiencBlock";
const ThreePhoto = React.lazy(() => import("./components/ThreePhoto"));

const GarenaData = {
  company: "Garena",
  companyDesc: "leading game brand of south-east asia",
  title: "Senior Software Engineer(Frontend)",
  period: { start: "01/2021", end: "current" },
  works: [
    "Collaborated with a multinational team to successfully deliver cross-device projects, catering to millions of players worldwide in over 10 languages, utilizing Vue and Typescript.",
    "Enhanced team productivity by at least 15% through the development of shared components.",
    "Improved product robustness by conducting code reviews with colleagues and implementing end-to-end testing with Cypress.",
    "Built the game's official website using the server-side rendering framework (Nuxt3) to improve SEO and performance.",
    "Managed and upgraded the event management system.",
    "Played a pivotal role in estimating project timelines for upcoming team projects.",
  ],
  techStack: [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "vue",
    "nuxt",
    "sass",
    "webpack",
    "vite",
    "cypress",
  ].map((name) => ({
    path: `${import.meta.env.BASE_URL}imgs/techs/logos-${name}.svg`,
    name,
  })),
};
const LjitData = {
  company: "Ljit Information Technology",
  companyDesc: "A startup company provide entertainment",
  title: "Frontend Engineer",
  period: { start: "02/2019", end: "12/2020" },
  works: [
    `Use React, React-redux and Redux-observable for front-end development and collaborate with the back-end team to complete 4 projects through git-flow.`,
    `Upgraded React16 to React17, rewriting class base components to function base and hooks, reducing code size by 30% and increasing productivity`,
    `Increase project performance by refactoring code with better rendering practices.`,
    `Contribute to the company's internal UI library, making 30+pull requests and writing tests for components with jest.`,
  ],
  techStack: [
    "html5",
    "css3",
    "javascript",
    "react",
    "react-router",
    "sass",
    "webpack",
    "redux",
    "redux-observable",
    "jest",
    "ant-design",
  ].map((name) => ({
    path: `${import.meta.env.BASE_URL}/imgs/techs/logos-${name}.svg`,
    name,
  })),
};

export default function Home() {
  return (
    <RootLayout>
      <section className="hero relative overflow-hidden">
        <div
          className="absolute w-full overflow-hidden left-3"
          style={{
            transform: "rotateY(180deg)",
            height: "60vh",
            marginTop: "-12vh",
          }}
        >
          <ThreePhoto></ThreePhoto>
        </div>
        <div
          className="flex-shrink-0 w-1/2 flex justify-center items-center sm:relative sm:w-1/2 relative"
          style={{ height: "40vh", zIndex: 10 }}
        >
          <div className="absoulte text-base  sm:text-xl left-3">
            HELLO! I AM GEORGE
            <br />
            <div className="text-blue-800 dark:text-slate-400 sm:text-lg text-xs ">
              {/* <ShuffleText text="I am a passionate frontend engineer"></ShuffleText>
              <ShuffleText text="with 4 years experience"></ShuffleText>
              <ShuffleText text="dedicated to creating"></ShuffleText>
              <ShuffleText text="engaging digital experiences."></ShuffleText> */}
              I am a passionate frontend engineer with 4 years experience
              dedicated to creating engaging digital experiences.
            </div>
            {/* <ShuffleText text="Software Engineer"></ShuffleText> */}
          </div>
        </div>
      </section>
      <section className="experience-section">
        <h2 className="text-2xl uppercase">experiences</h2>
        <hr className="mt-4 mb-4" />
        <ExperienceBlock {...GarenaData} />
        <ExperienceBlock {...LjitData} />
      </section>
    </RootLayout>
  );
}
