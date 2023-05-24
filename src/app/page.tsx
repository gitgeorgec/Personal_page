import Image from "next/image";
import profile from "../../public/imgs/profile.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container m-auto  pl-2 pr-2">
      <nav className="fixed">
        <div className="container">
          <ul>
            <li>Project</li>
            <li>LinkedIN</li>
          </ul>
        </div>
      </nav>
      <section className="hero relative flex flex-col sm:flex-row sm:mt-20 justify-center mb-2">
        <div className="flex-shrink-0 w-1/2 flex justify-center items-center absolute sm:relative sm:w-1/2">
          <div className="absoulte text-xl sm:text-3xl">
            HELLO I AM GEORGE
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
        <hr className="mt-2 mb-2" />
        <div className="text-xl border-l-4 border-cyan-800 pl-4">
          <h3>
            Garena <span>01/2021 - Present</span>
          </h3>
          <p>Senior Software Engineer(Frontend)</p>
        </div>
        <div className="mt-2 text-lg">
          <ul className="list-disc pl-8">
            <li>
              Use Vue and Typescript for front-end development, cooperate with
              multinational team partners to complete 23 cross-device projects,
              and serve millions of players around the world in more than 10
              languages.
            </li>
            <li>
              Upgrade and maintain the front-end template with colleagues, save
              construction time by 60%, increase the satisfaction of development
              experience by at least 20%.
            </li>
            <li>
              Use the server-side rendering framework (Nuxt3) to build the
              game&apos;s offcial website to improve SEO and performance.
            </li>
            <li>
              Boost productivity by contributing custom hooks and components to
              the team.
            </li>
            <li>
              Participate in code reviews to help junior engineers find blind
              spots in their code.
            </li>
            <li>
              Enhance product robustness by implementing end-to-end testing with
              cypress.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
