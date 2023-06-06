"use client";
import { useEffect, useState } from "react";
import ThreeBox from "@/components/ThreeBox";

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    setScrollY((val) => val + 10);
  }

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen"
        onClick={handleClick}
        style={{ transform: "scale(0.5)" }}
      >
        <ThreeBox scrollY={scrollY} />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
