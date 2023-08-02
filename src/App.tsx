import "./App.scss";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Scene, Camera, Mesh, Light } from "./components";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#000"]} />
        <Scene />
        <Camera />

        <Suspense fallback={<div>Loading...</div>}>
          <Mesh />
          <Light />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
