import styles from "./style.module.css";
import { motion } from "framer-motion";
import { Header } from "../../Organisms/Header";
import { AssetGroup } from "../../Templates/AssetGroup";

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
      <Header />
      <motion.div
        className={styles.wrap}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 1.5,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <AssetGroup />
      </motion.div>
    </motion.div>
  );
};
