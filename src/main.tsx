import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Donut from "./components/Donut";
import Sky from "./components/Sky";
import Camera from "./components/Camera";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Sky />
      <Donut position={[0, 0, 0]} />
      <Camera />
    </Canvas>
  </StrictMode>
);
