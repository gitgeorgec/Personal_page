import { useRef } from "react";

const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_1234567890";
export default function ShuffleText({ text }: { text: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  let count = 0;
  let start = 0;
  function handleShuffle(timestamp: number) {
    if (!start) start = timestamp;
    start = 0;
    if (count === text.length + 1) {
      count = 0;
      start = 0;
      return;
    }
    let shuffedText = "";

    for (let i = 0; i < text.length; i++) {
      if (count > i || text[i] === " ") {
        shuffedText += text[i];
      } else {
        shuffedText += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    if (textRef.current) {
      textRef.current.innerText = shuffedText;
    }

    count += 1;
    requestAnimationFrame(handleShuffle);
  }

  return (
    <p
      ref={textRef}
      onPointerEnter={() => requestAnimationFrame(handleShuffle)}
      className="font-mono "
    >
      {text}
    </p>
  );
}
