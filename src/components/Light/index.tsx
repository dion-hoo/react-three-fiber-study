import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper, DirectionalLight } from "three";

const Light = () => {
  const light = useRef<DirectionalLight>(new DirectionalLight("red"));

  useHelper(light, DirectionalLightHelper, 1, "blue");

  return (
    <>
      <pointLight color={"#1c9"} position={[10, 10, 10]} />
      <directionalLight ref={light} position={[-4, 5, 5]} castShadow />
    </>
  );
};

export default Light;
