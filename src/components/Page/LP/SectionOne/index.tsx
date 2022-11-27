import styles from "./style.module.css";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { Steak, Desk, Chair, Room } from "../../../Atoms";
import { motion } from "framer-motion";

export const LP = () => {
  return (
    <motion.div className={styles.wrap}>
      <div className={styles.wrap}>
        <Canvas
          camera={{
            fov: 30,
            near: 0.1,
            far: 1000,
            position: [55, 50, 50],
          }}
        >
          <ambientLight />
          <pointLight position={[2, 50, 15]} />
          <OrbitControls enableRotate={true} enableZoom={false} />
          <Text
            position={[10, 1, 15]}
            font="/Roboto-Black.ttf"
            fontSize={10}
            color={"#222"}
          >
            MESIC
          </Text>
          <Text
            position={[15, 5, 6]}
            rotation={[0, -80, 0]}
            font="/Roboto-Black.ttf"
            fontSize={2.5}
            color={"#222"}
          >
            who are you
          </Text>
          <Text
            position={[15, 0, 1]}
            rotation={[0, -80, 0]}
            font="/Roboto-Black.ttf"
            fontSize={3}
            color={"#222"}
          >
            going to
          </Text>
          <Text
            position={[15, -5, -2]}
            rotation={[0, -80, 0]}
            font="/Roboto-Black.ttf"
            fontSize={3}
            color={"#222"}
          >
            eat with?
          </Text>
          <Steak size={0.5} />
          <Room size={1.5} />
          <Desk size={1} />
          <Chair size={1} />
        </Canvas>
      </div>
    </motion.div>
  );
};
