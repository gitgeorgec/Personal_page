"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Canvas, ThreeElements, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import logsReactSvg from "../../public/imgs/techs/reactjs.png";

function Box(props: ThreeElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null);

  const [hoverd, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // const texture = useLoader(TextureLoader, "/imgs/techs/logos-react.svg");
  const texture = useLoader(TextureLoader, "/imgs/techs/reactjs.png");

  useFrame((state, delta) => (mesh.current!.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[1, 20, 20]} /> */}
      {/* <icosahedronGeometry args={[1, 3]} /> */}
      <meshPhongMaterial map={texture} attach="material" />
    </mesh>
  );
}

export default function CanvasBox(props: { scrollY: number }) {
  const x = 2 * Math.cos((Math.PI / 2) * props.scrollY * 0.001);
  const z = 2 * Math.sin((Math.PI / 2) * props.scrollY * 0.001);
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[x, 0, z]} />
        <Box position={[0, 0, 0]} />
        <Box position={[-x, 0, -z]} />
      </Canvas>
      <Image src={logsReactSvg} alt="" />
    </>
  );
}
