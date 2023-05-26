"use client";
import { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";

function Box(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null);

  const [hoverd, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (mesh.current!.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hoverd ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function ThreeBox(props: { scrollY: number }) {
  const x = 2 * Math.cos((Math.PI / 2) * props.scrollY * 0.01);
  const z = 2 * Math.sin((Math.PI / 2) * props.scrollY * 0.01);
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[x, 0, z]} />
      <Box position={[0, 0, 0]} />
      <Box position={[-x, 0, -z]} />
    </Canvas>
  );
}
