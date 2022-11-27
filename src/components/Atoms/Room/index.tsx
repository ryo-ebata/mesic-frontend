import * as React from "react";
import { useGLTF } from "@react-three/drei";

export type Props = {
  size: number;
};

export const Room: React.FC<Props> = ({ size }) => {
  const { scene } = useGLTF("assets/room.glb");

  return (
    <group dispose={null} rotation={[0, 3.95, 0]}>
      <primitive scale={[size, size, size]} object={scene} />
    </group>
  );
};
