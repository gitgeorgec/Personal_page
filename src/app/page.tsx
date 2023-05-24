import Image from "next/image";
import profile from "../../public/imgs/profile.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container m-auto">
      <nav className="fixed">
        <div className="container">
          <ul>
            <li>Project</li>
            <li>LinkedIN</li>
          </ul>
        </div>
      </nav>
      <section className="hero relative flex flex-col sm:flex-row-reverse sm:mt-20 ">
        <div className="sm:w-1/2 flex justify-center items-center">
          <Image
            src={profile}
            alt="personal-image"
            className="object-contain"
          />
        </div>
        <div className="sm:w-1/2 flex-shrink-0 flex justify-center items-center">
          <div>
            hello my name is George
            <br />
            tjdfisa
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
