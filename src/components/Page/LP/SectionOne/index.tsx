import { useEffect } from "react";
import { makeThree } from "../../../../servises/LP/three";
import { motion } from "framer-motion";
import styles from "./style.module.css";

export const LP = () => {
  let canvas: HTMLElement;

  useEffect(() => {
    if (canvas) return;

    // canvasを取得
    canvas = document.getElementById("canvas")!;

    makeThree(canvas);
  }, []);
  return (
    <div>
      <motion.div
        className={styles.wrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src="/img/lp/blob__left.svg"
          alt=""
          className={`${styles.blob} ${styles.blobLeft}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: [0, 1],
          }}
          transition={{
            duration: 1,
          }}
        />
        <motion.img
          src="/img/lp/blob__right.svg"
          alt=""
          className={`${styles.blob} ${styles.blobRight}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        />
      </motion.div>
      <motion.canvas
        id="canvas"
        className={styles.canvas}
        animate={{
          scale: [0, 1],
        }}
        transition={{
          duration: 0.5,
        }}
      ></motion.canvas>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
      <h2>MESIC</h2>
    </div>
  );
};
