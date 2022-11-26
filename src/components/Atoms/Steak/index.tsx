import * as React from "react";
import { useGLTF } from "@react-three/drei";

export const Steak: React.FC = () => {
  const { scene } = useGLTF("assets/steak.glb");

  return (
    <group dispose={null}>
      <primitive scale={[1, 1, 1]} object={scene} />
    </group>
  );
};
