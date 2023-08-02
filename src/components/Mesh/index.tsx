import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh as Object3D } from "three";

const Mesh = () => {
  const mesh = useRef<Object3D>(new Object3D());
  let y = 0;

  // useFrame(() => {
  //   mesh.current?.rotation.set(0, y, 0);
  //   y += 0.01;
  // });

  return (
    <mesh receiveShadow castShadow ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        color="#19c"
        roughness={0}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </mesh>
  );
};

export default Mesh;
