import { PointLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";

const Scene = () => {
  const pointLight = useRef<any>(null);

  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");

  return (
    <pointLight
      ref={pointLight}
      color="#fff"
      position={[1, 3, 2]}
      intensity={1}
    />
  );
};

export default Scene;
