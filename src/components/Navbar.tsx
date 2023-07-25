import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <nav className="fixed w-full bg-slate-100 left-0 top-0 z-50 bg-opacity-50 h-10 dark:bg-slate-800 dark:bg-opacity-50">
      <div className="container flex justify-between p-2 m-auto  max-w-5xl">
        <a href={"/"}>
          <div className="font-mono font-extrabold">GEORGE CHANG</div>
        </a>
        <div className="flex items-center">
          {children}
          <ToggleButton
            checked={isDark}
            onToggle={() => setIsDark(!isDark)}
          ></ToggleButton>
        </div>
      </div>
    </nav>
  );
}
