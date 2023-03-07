import "./App.scss";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Experience from "./components/Experience";

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </Suspense>
  );
}

export default App;
