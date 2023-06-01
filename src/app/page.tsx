import Image from "next/image";
import profile from "../../public/imgs/profile.png";
import ExperienceBlock from "@/components/ExperiencBlock";

export default function Home() {
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
      "javascript",
      "css3",
      "html5",
      "vue",
      "nuxt",
      "sass",
      "webpack",
      "vite",
    ].map((name) => ({ path: `/imgs/techs/logos-${name}.svg`, name })),
  };
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
        <div className="work-experience mb-8">
          <div className="text-xl font-bold border-l-4 border-cyan-800 pl-4">
            <h3 className="flex justify-between text-2xl ">
              Garena <span className=" font-normal">01/2021 - Present</span>
            </h3>
            <p>Senior Software Engineer(Frontend)</p>
          </div>
          <div className="mt-2 text-lg">
            <ul className="list-disc pl-8">
              <li>
                Collaborated with multinational team partners to complete 23
                cross-device projects serving millions of players around the
                world in more than 10 languages using Vue and Typescript.
              </li>
              <li>
                Save construction time by 60% and increase development
                experience satisfaction by upgrading(webpack -{">"} vite) and
                maintaining the front-end template with colleagues.
              </li>
              <li>
                Built the {"game's"} official website using the server-side
                rendering framework (Nuxt3) to improve SEO and performance.
              </li>
              <li>
                Boost productivity at least 5% by contributing custom hooks and
                components to the team.
              </li>
              <li>
                Enhanced product robustness by Conducting code reviews with
                colleagues and implementing end-to-end testing with Cypress.
              </li>
            </ul>
            <div className="tech-stacks"></div>
          </div>
        </div>
        <div className="work-experience mb-2">
          <div className="text-xl font-bold border-l-4 border-cyan-800 pl-4">
            <h3 className="flex justify-between text-2xl ">
              Ljit Information Technology{" "}
              <span className=" font-normal">02/2019 - 12/2020</span>
            </h3>
            <p>Frontend Engineer</p>
          </div>
          <div className="mt-2 text-lg">
            <ul className="list-disc pl-8">
              <li>
                Use React, React-redux and Redux-observable for front-end
                development and collaborate with the back-end team to complete 4
                projects through git-flow.
              </li>
              <li>
                Upgraded React16 to React17, rewriting class base components to
                function base and hooks, reducing code size by 30% and
                increasing productivity
              </li>
              <li>
                Increase project performance by refactoring code with better
                rendering practices.
              </li>
              <li>
                Contribute to the {`company's`} internal UI library, making 30+
                pull requests and writing tests for components with jest.
              </li>
            </ul>
          </div>
        </div>
        <ExperienceBlock {...GarenaData} />
        <ExperienceBlock {...GarenaData} />
      </section>
    </>
  );
}
