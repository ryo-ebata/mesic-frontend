import * as React from "react";
import { useGLTF } from "@react-three/drei";

export type Props = {
  size: number;
};

export const Steak: React.FC<Props> = ({ size }) => {
  const { scene } = useGLTF("assets/steak.glb");

  return (
    <group dispose={null} position={[0, 8, 0]} rotation={[0.4, 1.5, 0]}>
      <primitive scale={[size, size, size]} object={scene} />
    </group>
  );
};
