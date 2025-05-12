import { Canvas } from "@react-three/fiber";
import Donut from "../Donut";
import Sky from "../Sky";
import Camera from "../Camera";
import Screen from "../Screen";

interface AppProps {
  cursor: {
    x: number;
    y: number;
  };
}

const App = ({ cursor }: AppProps) => {
  return (
    <>
      <Canvas>
        {/* <ambientLight intensity={Math.PI / 2} /> */}
        <spotLight
          position={[10, 10, 0]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Sky />
        <Donut position={[0, 0, 0]} />
        <Camera cursor={cursor} />
      </Canvas>
      <Screen />
    </>
  );
};

export default App;
