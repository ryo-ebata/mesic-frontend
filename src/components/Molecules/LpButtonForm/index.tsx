export type Props = {
  leftColor: string;
  rightColor: string;
  shadowColor: string;
};

export const ButtonForm: React.FC<Props> = ({
  leftColor,
  rightColor,
  shadowColor,
}) => {
  return (
    <div
      style={{
        margin: "auto",
        top: "0",
        bottom: "0",
      }}
    >
      <p
        style={{
          color: leftColor,
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
          color: leftColor,
          textShadow: `${shadowColor} 2px 2px 2px`,
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
          backgroundColor: leftColor,
          color: rightColor,
          fontWeight: "bold",
          fontSize: "32px",
          border: "none",
          boxShadow: `${shadowColor} 2px 2px 2px`,
          margin: "0",
        }}
      >
        今すぐ会員登録
      </button>
    </div>
  );
};
