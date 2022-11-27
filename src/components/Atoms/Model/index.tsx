import * as React from "react";
import { useGLTF } from "@react-three/drei";
import { getAsset, Assets } from "../../../utils/Asset";

export type Props = {
  size: number;
  rotate: [number, number, number];
  position: [number, number, number];
  asset: Assets;
};

export const Model: React.FC<Props> = ({
  size,
  rotate = [0, 0, 0],
  position = [0, 0, 0],
  asset,
}) => {
  const { scene } = useGLTF(getAsset(asset));

  return (
    <group
      dispose={null}
      rotation={[rotate[0] ?? 0, rotate[1] ?? 0, rotate[2] ?? 0]}
      position={[position[0] ?? 0, position[1] ?? 0, position[2] ?? 0]}
    >
      <primitive scale={[size, size, size]} object={scene} />
    </group>
  );
};
