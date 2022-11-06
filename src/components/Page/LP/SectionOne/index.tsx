import { motion } from "framer-motion";
import Image from "next/image";

export const LP = () => {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        overflow: "hidden",
        objectFit: "cover",
        background:
          "linear-gradient(90deg, #F95738 0%, #F95738 50%, #E7DB73 50%, #E7DB73 100%)",
        zIndex: "-1",
        display: "flex",
        justifyContent: "space-around",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <div
        style={{
          margin: "auto",
          top: "0",
          bottom: "0",
        }}
      >
        <img
          src={"/img/spaghetti.png"}
          alt="ロゴ"
          style={{
            width: "500px",
            height: "500px",
            margin: "0",
          }}
        />
      </div>
      <div
        style={{
          margin: "auto",
          top: "0",
          bottom: "0",
        }}
      >
        <p
          style={{
            color: "#F95738",
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0",
          }}
        >
          誰かとご飯行くなら？
        </p>
        <h1
          style={{
            fontSize: "104px",
            color: "#F95738",
            textShadow: "#35A7FF 2px 2px 2px",
            margin: "0",
          }}
        >
          MesiCuu!
        </h1>
        <button
          style={{
            width: "100%",
            height: "100px",
            borderRadius: "8px",
            backgroundColor: "#F95738",
            color: "#E7DB73",
            fontWeight: "bold",
            fontSize: "32px",
            border: "none",
            boxShadow: "#35A7FF 2px 2px 2px",
            margin: "0",
          }}
        >
          今すぐ会員登録
        </button>
      </div>
    </motion.div>
  );
};
