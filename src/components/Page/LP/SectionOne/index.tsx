import { Section } from "../../../Templates/Section";

export const LP = () => {
  return (
    <div
      style={{
        overflow: "auto",
        scrollSnapType: "y",
        height: "100vh",
      }}
    >
      <Section
        leftColor="#F95738"
        rightColor="#E7DB73"
        shadowColor="#35A7FF"
        logoSrc="/img/spaghetti.png"
      />
      <Section
        leftColor="#f2f2f2"
        rightColor="#CD5954"
        shadowColor="#465362"
        logoSrc="/img/gyoza.png"
      />
    </div>
  );
};
