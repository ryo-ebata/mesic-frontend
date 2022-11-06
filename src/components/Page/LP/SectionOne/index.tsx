import { motion, AnimatePresence } from "framer-motion";
import { Three } from "../../../Organisms/Three";

export const LP = () => {
  return (
    <motion.div
      style={{
        width: "100vw",
        backgroundColor: "#000000",
        height: "100vh",
        margin: "0",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 1,
        time: [0, 1],
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Three />
      <div
        style={{
          position: "absolute",
          top: "50%",
          marginTop: "-5em",
        }}
      >
        <motion.div
          style={{
            borderRadius: "50%",
            backgroundColor: "#FFEF6C",
          }}
          animate={{
            x: ["-180px", "0px", "0px", "0px", "-180px"],
            width: ["100px", "100px", "500px", "500px", "0px"],
            height: ["100px", "100px", "100px", "100px", "100px"],
            borderRadius: ["50%", "50%", "0%", "0%", "0%"],
          }}
          transition={{
            duration: 3,
            time: [1, 1, 1, 1],
          }}
        >
          <motion.p
            style={{
              color: "#FFEF6C",
              fontSize: "80px",
              fontWeight: "bold",
            }}
            animate={{
              x: ["0px", "0px", "0px"],
              y: ["0px", "0px", "0px"],
              fontSize: ["80px", "80px", "80px"],
              opacity: [0, 0, 1],
            }}
            transition={{
              duration: 4,
              time: [1, 2, 1],
            }}
          >
            MesiCuu
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
