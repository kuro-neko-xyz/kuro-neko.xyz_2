import pressStart2p from "../../assets/fonts/PressStart2P_Regular.json";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { extend, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { CatmullRomCurve3, Vector3, type Mesh } from "three";
import { CurveModifier, type CurveModifierRef } from "@react-three/drei";

extend({ TextGeometry });

const Sky = () => {
  const ref = useRef(null) as React.RefObject<Mesh | null>;
  const curveRef = useRef<CurveModifierRef>(null);

  const handlePos = useMemo(
    () => [
      new Vector3(31, 0, 0),
      new Vector3(0.707106781 * 31, 0, -0.707106781 * 31),
      new Vector3(0, 0, -31),
      new Vector3(-0.707106781 * 31, 0, -0.707106781 * 31),
      new Vector3(-31, 0, 0),
    ],
    []
  );

  const curve = useMemo(
    () => new CatmullRomCurve3([...handlePos], true, "centripetal"),
    [handlePos]
  );

  useFrame(() => {
    if (curveRef.current) {
      curveRef.current.moveAlongCurve(0.002);
    }
  });

  const font = new FontLoader().parse(pressStart2p);

  return (
    <CurveModifier ref={curveRef} curve={curve}>
      <mesh ref={ref} rotation={[0, 0, 0]}>
        <textGeometry
          args={[
            "nakadashi means creampie",
            { font, size: -1, height: 1, depth: 0 },
          ]}
        />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </CurveModifier>
  );
};

export default Sky;
