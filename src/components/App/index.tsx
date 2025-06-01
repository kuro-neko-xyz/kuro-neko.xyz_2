import { Canvas } from "@react-three/fiber";
import Computer from "../Computer";
import Sky from "../Sky";
import Camera from "../Camera";
import Screen from "../Screen";
import { useSelector } from "react-redux";
import type { State } from "../../redux/models";

interface AppProps {
  cursor: {
    x: number;
    y: number;
  };
}

const App = ({ cursor }: AppProps) => {
  const showScreen = useSelector((state: State) => state.showScreen);

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
        <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
        <Sky />
        <Computer position={[0, 0, 0]} />
        <Camera cursor={cursor} />
      </Canvas>
      {showScreen && <Screen />}
    </>
  );
};

export default App;
