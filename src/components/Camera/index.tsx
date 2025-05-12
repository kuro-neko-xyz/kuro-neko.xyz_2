import { useThree, useFrame } from "@react-three/fiber";

const Camera = () => {
  const { camera, pointer } = useThree();

  return useFrame(() => {
    camera.lookAt(pointer.x, pointer.y, 0);
  });
};

export default Camera;
