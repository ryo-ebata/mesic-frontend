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
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const box = new THREE.Mesh(boxGeometry, material);
  box.position.z = -5;
  box.rotation.set(10, 10, 10);
  scene.add(box);

  const sphire = new THREE.SphereGeometry(10, 100, 100);
  const ball = new THREE.Mesh(sphire, material);
  ball.position.z = -5;
  ball.rotation.set(10, 10, 10);
  scene.add(ball);

  // ライト
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0xffffff, 0.2);
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
    end: 20,
    function() {
      camera.lookAt(box.position);
      camera.position.set(0, 1, 0);
      box.position.z = lerp(1, 5, scaleParcent(0, 20));
    },
  });

  animationScripts.push({
    start: 20,
    end: 40,
    function() {
      box.position.x = lerp(1, 10, scaleParcent(20, 40));
      box.position.z = lerp(5, 10, scaleParcent(20, 40));
    },
  });

  animationScripts.push({
    start: 40,
    end: 60,
    function() {
      box.position.x = lerp(10, 15, scaleParcent(40, 60));
      box.position.y = lerp(1, 15, scaleParcent(40, 60));
      camera.position.z = lerp(10, 15, scaleParcent(40, 60));
    },
  });

  animationScripts.push({
    start: 60,
    end: 80,
    function() {
      camera.position.z = lerp(30, 40, scaleParcent(60, 80));
    },
  });

  animationScripts.push({
    start: 80,
    end: 101,
    function() {
      camera.position.z = lerp(50, 60, scaleParcent(80, 101));
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
    console.log(scrollParcent);
  };
  tick();
};
