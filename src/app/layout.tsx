import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}  bg-slate-300 dark:bg-slate-800`}>
        <main className="flex min-h-screen flex-col container m-auto pt-10 pl-2 pr-2 text-cyan-900 dark:text-emerald-500">
          <nav className="fixed w-full bg-slate-800 left-0 top-0 z-50 bg-opacity-50 h-10">
            <div className="container flex justify-between p-2 m-auto">
              <Link href={"/"}>
                <div className="font-mono font-extrabold">GEORGE CHANG</div>
              </Link>
              <ul className="flex">
                <Link href={"/projects"}>
                  <li className="ml-2">Projects</li>
                </Link>
                <li className="ml-2">Linkedin</li>
              </ul>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
