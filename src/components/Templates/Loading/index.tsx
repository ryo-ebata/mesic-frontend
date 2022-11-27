import { getSvg } from "../../../utils/Svg";
import Image from "next/image";

export type Props = {};

export const Loading: React.FC<Props> = () => {
  const num = Math.floor(Math.random() * 10);
  const svg = num <= 5 ? num : num - 4;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "80vh",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={getSvg(svg)} alt="" width={300} height={300} />
        <p
          style={{
            fontSize: "20px",
          }}
        >
          Loading...
        </p>

        <p
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          店舗情報を検索しています。
        </p>
      </div>
    </div>
  );
};
