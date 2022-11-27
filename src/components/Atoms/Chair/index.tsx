import * as React from "react";
import { useGLTF } from "@react-three/drei";

export type Props = {
  size: number;
};

export const Chair: React.FC<Props> = ({ size }) => {
  const { scene } = useGLTF("assets/chair.glb");

  return (
    <group dispose={null} position={[-2, 4, 4]} rotation={[0.3, 5, 0]}>
      <primitive scale={[size, size, size]} object={scene} />
    </group>
  );
};
