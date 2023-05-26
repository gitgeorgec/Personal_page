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
    console.log(scrollY);
    setScrollY((val) => val + 10);
  }

  return (
    <div>
      <div className="fixed top-0 left-0" onClick={handleClick}>
        <ThreeBox scrollY={scrollY} />
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}
