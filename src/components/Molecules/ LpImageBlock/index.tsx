export type Props = {
  logoSrc: string;
};

export const LpImageBlock: React.FC<Props> = ({ logoSrc }) => {
  return (
    <div
      style={{
        margin: "auto",
        top: "0",
        bottom: "0",
      }}
    >
      <img
        src={logoSrc}
        alt="ロゴ"
        style={{
          width: "500px",
          height: "500px",
          margin: "0",
        }}
      />
    </div>
  );
};
