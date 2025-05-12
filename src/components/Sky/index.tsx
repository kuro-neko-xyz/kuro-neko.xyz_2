import pressStart2p from "../../assets/fonts/PressStart2P_Regular.json";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

extend({ TextGeometry });

const Sky = () => {
  const ref = useRef(null) as React.RefObject<Mesh | null>;

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.x -= delta;
    }
  });

  const font = new FontLoader().parse(pressStart2p);

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <textGeometry
        args={[
          "nakadashi means creampie",
          { font, size: 1, height: 1, depth: 0 },
        ]}
      />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};

export default Sky;
