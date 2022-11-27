import styles from "./style.module.css";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { Steak, Desk, Chair, Room } from "../../../Atoms";
import { motion } from "framer-motion";
import Link from "next/link";

export const LP = () => {
  return (
    <motion.div
      className={styles.wrap}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1],
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div className={styles.header}>
        <Link href="/restaurants" className={styles.link}>
          <div className={styles.button}>
            <p>MESICを使う</p>
          </div>
        </Link>
      </div>
      <motion.div
        className={styles.wrap}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1],
        }}
        exit={{
          opacity: 0,
        }}
      >
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
            font="/fonts/Raleway-Bold.ttf"
            fontSize={8}
            color={"#222"}
          >
            MESIC
          </Text>
          <Text
            position={[15, 5, 6]}
            rotation={[0, -80, 0]}
            font="/fonts/Raleway-SemiBold.ttf"
            fontSize={2.5}
            color={"#222"}
          >
            who are you
          </Text>
          <Text
            position={[15, 0, 1]}
            rotation={[0, -80, 0]}
            font="/fonts/Raleway-SemiBold.ttf"
            fontSize={3}
            color={"#222"}
          >
            going to
          </Text>
          <Text
            position={[15, -5, -2]}
            rotation={[0, -80, 0]}
            font="/fonts/Raleway-SemiBold.ttf"
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
      </motion.div>
    </motion.div>
  );
};
