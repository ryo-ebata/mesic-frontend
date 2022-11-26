import styles from "./style.module.css";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Stage } from "@react-three/drei";
import { Steak } from "../../../Atoms/Steak";

export const LP = () => {
  return (
    <div className={styles.size}>
      <Canvas className={styles.size}>
        <PerspectiveCamera makeDefault />
        <OrbitControls />

        <Stage>
          <Steak />
        </Stage>
      </Canvas>
    </div>
  );
};
