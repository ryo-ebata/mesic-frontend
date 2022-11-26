import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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
  camera.position.z = 6;

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
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/coffee_cup.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/okonomi.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/pote.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/roko.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/sand.png") }),
    new THREE.MeshBasicMaterial({ map: loadPic.load("img/lp/tikin.png") }),
  ];

  // ボックスジオメトリー
  const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
  const box = new THREE.Mesh(boxGeometry, material);
  [box.position.x, box.position.y, box.position.z] = [0, 0, 0];
  box.rotation.set(0, 0, 0);
  scene.add(box);

  // console.log(THREE);
  // const loader = new THREE.GLTFLoader();
  // const url = "3d/test.glb";

  // // window size
  // const w_height = window.innerHeight;

  // let model = null;
  // loader.load(
  //   url,
  //   function (gltf) {
  //     model = gltf.scene;
  //     // model.name = "model_with_cloth";
  //     model.scale.set(100.0, 100.0, 100.0);
  //     model.position.set(0, (w_height / 3) * -1, 0);
  //     scene.add(gltf.scene);

  //     // model["test"] = 100;
  //   },
  //   function (error) {
  //     console.log("An error happened");
  //     console.log(error);
  //   }
  // );

  // ライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 1.0);
  pointLight.position.set(1, 2, 3);
  scene.add(pointLight);

  // ブラウザのリサイズ処理
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  // 線形補完関数
  // x から y までの移動
  const lerp = (x: number, y: number, a: number) => (1 - a) * x + a * y;

  // 特定のスクロール率で開始、終了。
  const scaleParcent = (start: number, end: number) =>
    (scrollParcent - start) / (end - start);

  // スクロールアニメーション関数定義
  const animationScripts: any[] = [];

  animationScripts.push({
    start: 0,
    end: 5,
    function() {
      camera.lookAt(box.position);
      box.position.z = lerp(0, -10, scaleParcent(0, 10));
    },
  });

  // animationScripts.push({
  //   start: 5,
  //   end: 10,
  //   function() {
  //     box.position.y = lerp(0, 10, scaleParcent(0, 10));
  //   },
  // });

  animationScripts.push({
    start: 10,
    end: 15,
    function() {
      box.position.z = lerp(-10, -15, scaleParcent(10, 15));
    },
  });

  // スクロール率に応じたアニメーションを実行する。
  const playScrollAnimation = () => {
    animationScripts.forEach((animation) => {
      if (scrollParcent >= animation.start && scrollParcent < animation.end) {
        animation.function();
      }
    });
  };

  let scrollParcent = 0;

  // 現在のスクロール率をパーセントで算出する。
  document.body.onscroll = () => {
    scrollParcent =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100;
  };

  // アニメーション
  const clock = new THREE.Clock();
  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    box.rotation.x = elapsedTime;
    box.rotation.y = elapsedTime;
    window.requestAnimationFrame(tick);

    playScrollAnimation();

    renderer.render(scene, camera);
  };
  tick();
};
