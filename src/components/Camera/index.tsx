import {
  OrbitControls,
  PerspectiveCamera,
  CameraShake,
} from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

const Camera = () => {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 1, 4), 0.05);
  });

  return (
    <>
      <PerspectiveCamera
        near={0.1}
        far={1000}
        fov={72}
        position={[0, -1, 13]}
      />
      <CameraShake
        maxYaw={0.01}
        maxPitch={0.01}
        maxRoll={0.01}
        yawFrequency={0.5}
        pitchFrequency={0.5}
        rollFrequency={0.4}
      />
      <OrbitControls makeDefault />
    </>
  );
};

export default Camera;
