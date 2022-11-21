import { useEffect, useRef } from "react";
import { makeThree } from "../../../../servises/LP/three";
import { motion } from "framer-motion";

export const LP = () => {
  let canvas: HTMLElement;

  useEffect(() => {
    if (canvas) return;

    // canvasを取得
    canvas = document.getElementById("canvas")!;

    makeThree(canvas);
  }, []);
  return (
    <motion.div
      style={{
        overflow: "hidden",
        width: "100vw",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src="/img/blobanimation.svg"
        alt=""
        style={{
          position: "absolute",
          width: "700px",
          top: "-300px",
          left: "-300px",
        }}
        initial={{
          opacity: 0,
          width: 10,
        }}
        animate={{
          opacity: 1,
          width: [0, 710, 700],
        }}
        transition={{
          duration: 2,
        }}
      />
      <motion.img
        src="/img/blobanimation.svg"
        alt=""
        style={{
          position: "absolute",
          width: "700px",
          bottom: "-300px",
          right: "-300px",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          width: [0, 710, 700],
        }}
        transition={{
          duration: 1,
        }}
      />
      <canvas id="canvas"></canvas>
    </motion.div>
  );
};
