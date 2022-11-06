import { motion } from "framer-motion";
import { LpImageBlock } from "../../Molecules/ LpImageBlock";
import { ButtonForm } from "../../Molecules/LpButtonForm";

export type Props = {
  leftColor: string;
  rightColor: string;
  shadowColor: string;
  logoSrc: string;
};

export const Section: React.FC<Props> = ({
  leftColor,
  rightColor,
  shadowColor,
  logoSrc,
}) => {
  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        overflow: "hidden",
        objectFit: "cover",
        background: `linear-gradient(90deg, ${leftColor} 0%, ${leftColor} 50%, ${rightColor} 50%, ${rightColor} 100%)`,
        zIndex: "-1",
        display: "flex",
        justifyContent: "space-around",
        scrollSnapAlign: "start",
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
      <LpImageBlock logoSrc={logoSrc} />
      <ButtonForm
        leftColor={leftColor}
        rightColor={rightColor}
        shadowColor={shadowColor}
      />
    </motion.div>
  );
};
