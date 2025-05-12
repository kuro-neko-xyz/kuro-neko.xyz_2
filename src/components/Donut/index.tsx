import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface BoxProps {
  position: [number, number, number];
}

const Donut = (props: BoxProps) => {
  const ref = useRef(null) as React.RefObject<Mesh | null>;

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    }
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const gltf = useLoader(GLTFLoader, "/src/assets/models/donut.gltf");

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 15 : 10}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Donut;
