// 3D Canvas Setup & Animation Logic
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-3d-overlay");
  const canvas = document.getElementById("intro-canvas");

  if (!canvas) return;

  // Scene, Camera, Renderer Setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lights for 3D Threaded Metallic Effect
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.5); // Neon Cyan Thread
  dirLight1.position.set(5, 10, 7);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xff007f, 1.5); // Magenta/Purple Thread
  dirLight2.position.set(-5, -5, -5);
  scene.add(dirLight2);

  camera.position.z = 10;

  // Font Loader & Mesh Creation
  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
    
    // Custom Multi-colored Wireframe/Thread Material
    const createMaterial = (colorHex) => new THREE.MeshStandardMaterial({
      color: colorHex,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8
    });

    const textOptions = {
      font: font,
      size: 2.2,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.05,
      bevelSegments: 5
    };

    // Geometries
    const geoD = new THREE.TextGeometry('D', textOptions);
    const geoA = new THREE.TextGeometry('A', textOptions);
    const geoF = new THREE.TextGeometry('F', textOptions);

    // Multi-color Material setup (Green, Cyan, Rose threads)
    const meshD = new THREE.Mesh(geoD, createMaterial(0x10b981)); // Emerald
    const meshA = new THREE.Mesh(geoA, createMaterial(0x06b6d4)); // Cyan
    const meshF = new THREE.Mesh(geoF, createMaterial(0xf43f5e)); // Rose

    // Grouping
    const group = new THREE.Group();
    group.add(meshD);
    group.add(meshA);
    group.add(meshF);
    scene.add(group);

    // Initial Positions Off-screen
    meshD.position.set(-15, 0, 0); // D from Left
    meshA.position.set(-0.7, 15, 0); // A from Top
    meshF.position.set(15, 0, 0);  // F from Right

    // Final Target Offsets
    geoD.center(); geoA.center(); geoF.center();
    meshD.position.x = -15; 
    meshA.position.y = 15;
    meshF.position.x = 15;

    // Timeline Animation (GSAP)
    const tl = gsap.timeline();

    // Entry Animations (Left, Top, Right)
    tl.to(meshD.position, { x: -2.2, duration: 1.2, ease: "back.out(1.7)" }, 0)
      .to(meshA.position, { y: 0, duration: 1.2, ease: "back.out(1.7)" }, 0)
      .to(meshF.position, { x: 2.2, duration: 1.2, ease: "back.out(1.7)" }, 0)
      
      // 3D Slight Rotation/Spin while staying
      .to(group.rotation, { y: Math.PI * 2, duration: 1.5, ease: "power2.inOut" }, ">")
      
      // 1.5 Seconds Stay & Auto-Scroll Down Screen Exit
      .to(overlay, { 
        yPercent: -100, 
        duration: 1.2, 
        delay: 1.5, 
        ease: "power4.inOut",
        onComplete: () => {
          overlay.style.display = "none"; // Hide Canvas completely after transition
        }
      });

    // Render Loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  });

  // Handle Light/Dark Mode Mesh Adjustments dynamically
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains("dark");
    overlay.className = `fixed inset-0 z-50 flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-slate-50'} transition-colors duration-500 overflow-hidden`;
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
});
