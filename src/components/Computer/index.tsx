import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useDispatch } from "react-redux";
import { TOGGLE_SCREEN } from "../../redux/constants";

interface BoxProps {
  position: [number, number, number];
  cursor: {
    x: number;
    y: number;
  };
}

const Computer = (props: BoxProps) => {
  const ref = useRef(null) as React.RefObject<Mesh | null>;

  const [hovered, hover] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: TOGGLE_SCREEN,
    });
  };

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (ref.current) {
      ref.current.lookAt(props.cursor.x, props.cursor.y, 1);
    }
  });

  const gltf = useLoader(GLTFLoader, "/src/assets/models/computer.gltf");

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => handleClick()}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Computer;
