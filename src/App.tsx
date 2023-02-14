import "./App.scss";

import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight color="red" />
        {/* <Box position={[1, 1, 1]} /> */}

        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default App;
