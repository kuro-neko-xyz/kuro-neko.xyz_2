import { useThree, useFrame } from "@react-three/fiber";

interface CameraProps {
  cursor: { x: number; y: number };
}

const Camera = ({ cursor }: CameraProps) => {
  const { camera } = useThree();

  return useFrame(() => {
    camera.lookAt(cursor.x, cursor.y, 0);
  });
};

export default Camera;
