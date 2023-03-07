const Experience = () => {
  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh scale={1.5} position-x={2} rotation-y={Math.PI * 1.5}>
        <boxGeometry />
        <meshBasicMaterial color="#1c9" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position-y={-1} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
