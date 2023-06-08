"use client";
import { useEffect, useRef, useState } from "react";
import setCanvasBg from "./app";

export default function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      setCanvasBg(ctx, canvas);
    }
  }, [canvasRef]);

  return (
    <div className="fixed -z-10 top-0 left-0 w-screen h-screen">
      <canvas ref={canvasRef}></canvas>;
    </div>
  );
}
