import pressStart2p from "../../assets/fonts/PressStart2P_Regular.json";
import { Font, FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { CatmullRomCurve3, Vector3, type Mesh } from "three";
import { CurveModifier, type CurveModifierRef } from "@react-three/drei";

extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: {
      args: [
        string,
        { font: Font; size: number; height: number; depth: number }
      ];
    };
  }
}

const font = new FontLoader().parse(pressStart2p);

const radius = 35;

const handlePos: Vector3[] = [
  new Vector3(radius, -2.5, 0),
  new Vector3(0.707106781 * radius, -2.5, -0.707106781 * radius),
  new Vector3(0, -2.5, -radius),
  new Vector3(-0.707106781 * radius, -2.5, -0.707106781 * radius),
  new Vector3(-radius, -2.5, 0),
];

const Sky = () => {
  const ref = useRef(null) as React.RefObject<Mesh | null>;
  const curveRef = useRef<CurveModifierRef>(null);

  const curve = new CatmullRomCurve3(handlePos, true, "centripetal");

  useFrame(() => {
    if (curveRef.current) {
      curveRef.current.moveAlongCurve(0.002);
    }
  });

  return (
    <CurveModifier ref={curveRef} curve={curve}>
      <mesh ref={ref} rotation={[0, 0, 0]}>
        <textGeometry
          args={[
            "nakadashi means creampie",
            { font, size: -5, height: 1, depth: 0 },
          ]}
        />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </CurveModifier>
  );
};

export default Sky;
