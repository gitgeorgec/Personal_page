import Image from "next/image";
import profile from "../../public/imgs/profile.png";
import ExperienceBlock from "@/components/ExperiencBlock";

const GarenaData = {
  company: "Garena",
  companyDesc: "leading game brand of south-east asia",
  title: "Senior Software Engineer(Frontend)",
  period: { start: "01/2021", end: "current" },
  works: [
    `Collaborated with multinational team partners to complete 23 cross-device projects serving millions of players around the world in more than 10 languages using Vue and Typescript.`,
    `Save construction time by 60% and increase development experience satisfaction by upgrading(webpack -> vite) and maintaining the front-end template with colleagues.`,
    `Built the game's official website using the server-side rendering framework (Nuxt3) to improve SEO and performance.`,
    `Boost productivity at least 5% by contributing custom hooks and components to the team.`,
    `Enhanced product robustness by Conducting code reviews with colleagues and implementing end-to-end testing with Cypress.`,
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
  ].map((name) => ({ path: `/imgs/techs/logos-${name}.svg`, name })),
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
  ].map((name) => ({ path: `/imgs/techs/logos-${name}.svg`, name })),
};
export default function Home() {
  return (
    <>
      <section className="hero relative flex flex-col sm:flex-row sm:mt-20 justify-center mb-2">
        <div className="flex-shrink-0 w-1/2 flex justify-center items-center absolute sm:relative sm:w-1/2">
          <div className="absoulte text-xl sm:text-3xl">
            HELLO! I AM GEORGE
            <br />
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="ml-auto w-2/3 flex justify-center items-center sm:w-1/2">
          <Image
            src={profile}
            alt="personal-image"
            className="object-contain"
          />
        </div>
      </section>
      <section className="experience-section">
        <h2 className="text-2xl uppercase">experiences</h2>
        <hr className="mt-4 mb-4" />
        <ExperienceBlock {...GarenaData} />
        <ExperienceBlock {...LjitData} />
      </section>
    </>
  );
}
