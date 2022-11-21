import * as THREE from "three";

export const makeThree = (canvas: HTMLElement) => {
  // シーン
  const scene = new THREE.Scene();

  // サイズ
  const sizes = {
    width: innerWidth,
    height: innerHeight,
  };

  // カメラ
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  );

  // レンダラー
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas || undefined,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // 画像を読み込む
  const loadPic = new THREE.TextureLoader();

  let material = [
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/coffee_cup.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/okonomi.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/pote.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/roko.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/sand.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/tikin.png") }),
  ];

  // ボックスジオメトリー
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  // const boxMaterial = new THREE.MeshStandardMaterial({
  //   color: "#ff9e3d",
  // });
  const box = new THREE.Mesh(boxGeometry, material);
  box.position.z = -4;
  box.rotation.set(10, 10, 10);
  scene.add(box);

  // ライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 0.2);
  pointLight.position.set(1, 2, 3);
  scene.add(pointLight);

  // アニメーション
  const clock = new THREE.Clock();
  let sec = 0;
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    box.rotation.x = elapsedTime;
    box.rotation.y = elapsedTime;
    window.requestAnimationFrame(tick);
    renderer.render(scene, camera);
  };
  tick();

  // ブラウザのリサイズ処理
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });
};
