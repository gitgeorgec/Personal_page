"use client";
import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
// import { SVGLoader, SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import { SVGLoader, SVGResult } from "three/examples/jsm/loaders/SVGLoader";
import type { Color, Shape } from "three";
import gsap from "gsap";

function ShapeMesh({
  shape,
  color,
  index,
}: {
  shape: Shape | Shape[];
  color: Color;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materailRef = useRef<THREE.MeshPhongMaterial>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    gsap.fromTo(
      meshRef.current.position,
      {
        x: "random(70, 140)",
        y: "random(340, 460)",
        duration: 0.5,
        delay: index * 0.002,
      },
      {
        x: 100,
        y: 400,
        delay: index * 0.002,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      materailRef?.current,
      {
        opacity: 0,
        duration: 0.5,
        delay: index * 0.002,
      },
      {
        opacity: 1,
        delay: index * 0.002,
        duration: 0.5,
      }
    );
  }, [index]);

  return (
    <mesh ref={meshRef} position={[100, 400, 0]} rotation={[0, 0, Math.PI]}>
      <meshPhongMaterial
        ref={materailRef}
        color={color}
        opacity={0}
        transparent={true}
      />
      <shapeGeometry args={[shape]} />
    </mesh>
  );
}

function Scene() {
  const data = useLoader(SVGLoader, "/imgs/photo.svg");

  const shapes = useMemo(
    () =>
      (data as SVGResult).paths.flatMap((g, index) =>
        g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))
      ),
    [data]
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[-100, -100, -100]} intensity={1} />
      {shapes.map((shape, index) => (
        <ShapeMesh {...shape} key={index} />
      ))}
    </>
  );
}

export default function CanvasBox() {
  return (
    <div className="h-screen">
      <Canvas
        flat
        linear
        camera={{ fov: 80, position: [0, 0, 800], near: 0.1, far: 20000 }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
