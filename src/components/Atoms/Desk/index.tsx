import * as React from "react";
import { useGLTF } from "@react-three/drei";

export type Props = {
  size: number;
};

export const Desk: React.FC<Props> = ({ size }) => {
  const { scene } = useGLTF("assets/desk.glb");

  return (
    <group dispose={null} position={[0, 3, 0]} rotation={[-0.5, 0, 0]}>
      <primitive scale={[size, size, size]} object={scene} />
    </group>
  );
};
