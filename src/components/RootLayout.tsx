import Navbar from "./Navbar";
import TheFooter from "./TheFooter";

export const metadata = {
  title: "George Chang Profile",
  description:
    "George Chang's profile, includes he's working experiences and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-200 dark:bg-slate-800 dark:bg-gradient-to-b from-slate-800 to-slate-950`}
      >
        <main className="flex min-h-screen flex-col container max-w-5xl m-auto pt-10 pl-2 pr-2 text-cyan-950 dark:text-emerald-500">
          <Navbar>
            <ul className="flex mr-4 font-bold">
              {/* <Link href={"/projects"}>
                <li className="ml-2">Projects</li>
              </Link> */}
              <a
                href={"https://www.linkedin.com/in/chia-che-chang/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <li className="ml-2">Linkedin</li>
              </a>
            </ul>
          </Navbar>
          {children}
          <TheFooter />
        </main>
      </body>
    </html>
  );
}
