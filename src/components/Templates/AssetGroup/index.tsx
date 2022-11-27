import { Model } from "../../Atoms/Model";
import { Canvas } from "@react-three/fiber";
import { APP_NAME } from "../../../constants/Consts/App";
import { Text, OrbitControls } from "@react-three/drei";

export const AssetGroup = () => {
  return (
    <Canvas
      camera={{
        fov: 30,
        near: 0.1,
        far: 1000,
        position: [55, 50, 50],
      }}
    >
      <ambientLight />
      <pointLight position={[2, 50, 15]} />
      <OrbitControls enableRotate={true} enableZoom={false} />
      <Text
        position={[8, 2.5, 15]}
        font="/fonts/Raleway-Bold.ttf"
        fontSize={8}
        color={"#222"}
      >
        {APP_NAME}
      </Text>
      <Text
        position={[15, 5, 4]}
        rotation={[0, 1.6, 0]}
        font="/fonts/Raleway-SemiBold.ttf"
        fontSize={3}
        color={"#222"}
      >
        who are you
      </Text>
      <Text
        position={[15, 0, 3]}
        rotation={[0, 1.6, 0]}
        font="/fonts/Raleway-SemiBold.ttf"
        fontSize={3}
        color={"#222"}
      >
        going to
      </Text>
      <Text
        position={[15, -5, 0]}
        rotation={[0, 1.6, 0]}
        font="/fonts/Raleway-SemiBold.ttf"
        fontSize={3}
        color={"#222"}
      >
        eat with?
      </Text>
      <Text
        position={[-0.7, 10, -10]}
        rotation={[0, 3.17, 0]}
        font="/fonts/NotoSerifJP-Medium.otf"
        fontSize={1}
        color={"#222"}
      >
        同じお店を好きな人と、
      </Text>
      <Text
        position={[-0.7, 5, -10]}
        rotation={[0, 3.17, 0]}
        font="/fonts/NotoSerifJP-Medium.otf"
        fontSize={1}
        color={"#222"}
      >
        出会えるアプリ。
      </Text>
      <Text
        position={[-10, 10, 1]}
        rotation={[0, 4.7, 0]}
        font="/fonts/NotoSerifJP-Medium.otf"
        fontSize={1}
        color={"#222"}
      >
        チャットを通して、
      </Text>
      <Text
        position={[-10, 5, 1]}
        rotation={[0, 4.7, 0]}
        font="/fonts/NotoSerifJP-Medium.otf"
        fontSize={1}
        color={"#222"}
      >
        予約するだけ。
      </Text>
      <Model
        size={0.5}
        rotate={[0.4, 1.5, 0]}
        asset="steak"
        position={[0, 8, 0]}
      />
      <Model
        size={1.5}
        rotate={[0, 3.95, 0]}
        asset="room"
        position={[0, 0, 0]}
      />
      <Model size={1} rotate={[-0.5, 0, 0]} asset="desk" position={[0, 3, 0]} />
      <Model
        size={1}
        rotate={[0.3, 5, 0]}
        asset="chair"
        position={[-2, 4, 4]}
      />
    </Canvas>
  );
};
