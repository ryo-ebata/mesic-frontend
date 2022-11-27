export const assets = {
  room: "assets/room.glb",
  desk: "assets/desk.glb",
  chair: "assets/chair.glb",
  steak: "assets/steak.glb",
};

export type Assets = keyof typeof assets;

export const getAsset = (key: Assets) => assets[key];
