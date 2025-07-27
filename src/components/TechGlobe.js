import React, { useEffect, useRef } from 'react';
import '../styles/TechGlobe.css';

const defaultTechItems = [
  { name: 'HTML5', icon: 'https://img.icons8.com/color/48/html-5.png' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
  { name: 'PHP', icon: 'https://img.icons8.com/officel/48/php-logo.png' },
  { name: 'SQL', icon: 'https://img.icons8.com/ios-filled/50/4a90e2/sql.png' },
  { name: 'PostgreSQL', icon: 'https://img.icons8.com/color/48/postgreesql.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo.png' },
  { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwindcss.png' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
  // { name: 'Alpine.js', icon: 'https://alpinejs.dev/alpine_long.svg' }, 
  { name: 'Livewire', icon: 'https://laravel-livewire.com/img/favicon.png' }, 
  { name: 'Laravel', icon: 'https://img.icons8.com/ios-filled/50/ffffff/laravel.png' },
  { name: 'FilamentPHP', icon: 'https://avatars.githubusercontent.com/u/75367858' },
  { name: 'Ultralytics', icon: 'https://cdn.prod.website-files.com/646dd1f1a3703e451ba81ecc/64777c3e071ec953437e6950_logo.svg' },
  { name: 'ONNX', icon: 'https://onnx.ai/img/favicon.ico' },
  { name: 'TensorFlow Lite', icon: 'https://www.tensorflow.org/images/tf_logo_social.png' },
  { name: 'Java', icon: 'https://img.icons8.com/color/48/java-coffee-cup-logo.png' },
  { name: 'Kotlin', icon: 'https://img.icons8.com/color/48/kotlin.png' },
  { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
  { name: 'GitHub', icon: 'https://img.icons8.com/ios-glyphs/48/ffffff/github.png' },
  { name: 'Figma', icon: 'https://img.icons8.com/color/48/figma--v1.png' },
];

function TechGlobe({ techItems = defaultTechItems }) {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.innerHTML = '';

    let radius = Math.min(globe.clientWidth, globe.clientHeight) * 0.4; 
    const dampingFactor = 0.95; 
    let center = { x: globe.clientWidth / 2, y: globe.clientHeight / 2 };
    const positions = fibonacciSphere(techItems.length);
    const elements = [];
    let rotationMatrix = identityMatrix();
    let isDragging = false;
    let last3D = null;
    let autoRotateMatrix = null;
    let idleSpinAxis = randomAxis();
    let idleSpinSpeed = window.innerWidth < 768 ? 0.001 : 0.002; 
    let velocity = 0;
    let lastAxis = [0, 0, 1];
    let lastTime = null;
    let lastPointer = { x: 0, y: 0 };

 
    techItems.forEach((tech, i) => {
      const div = document.createElement('div');
      div.className = 'about-globe-tech-item';
      div.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><p>${tech.name}</p>`;
      div.style.pointerEvents = 'none';
      globe.appendChild(div);
      elements.push(div);
    });

    function identityMatrix() {
      return [1,0,0, 0,1,0, 0,0,1];
    }
    function normalize(v) {
      const len = Math.hypot(...v);
      return len === 0 ? [0, 0, 0] : v.map(c => c / len);
    }
    function cross(a, b) {
      return [
        a[1]*b[2] - a[2]*b[1],
        a[2]*b[0] - a[0]*b[2],
        a[0]*b[1] - a[1]*b[0]
      ];
    }
    function dot(a, b) {
      return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
    }
    function mat3MultiplyVec3(m, v) {
      return [
        m[0]*v[0] + m[1]*v[1] + m[2]*v[2],
        m[3]*v[0] + m[4]*v[1] + m[5]*v[2],
        m[6]*v[0] + m[7]*v[1] + m[8]*v[2]
      ];
    }
    function mat3Multiply(a, b) {
      let r = new Array(9);
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          r[row*3 + col] =
            a[row*3+0]*b[0*3+col] +
            a[row*3+1]*b[1*3+col] +
            a[row*3+2]*b[2*3+col];
        }
      }
      return r;
    }
    function createRotationMatrix(axis, angle) {
      const [x, y, z] = normalize(axis);
      const c = Math.cos(angle), s = Math.sin(angle), t = 1 - c;
      return [
        t*x*x + c,     t*x*y - s*z,   t*x*z + s*y,
        t*x*y + s*z,   t*y*y + c,     t*y*z - s*x,
        t*x*z - s*y,   t*y*z + s*x,   t*z*z + c
      ];
    }
    function fibonacciSphere(n) {
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      return Array.from({ length: n }, (_, i) => {
        const y = 1 - (i / (n - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        return [Math.cos(theta) * r, y, Math.sin(theta) * r];
      });
    }
    function randomAxis() {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;
      return normalize([
        Math.cos(theta) * Math.sin(phi),
        Math.sin(theta) * Math.sin(phi),
        Math.cos(phi)
      ]);
    }
    function projectOnTrackball(x, y, width, height) {
      const r = Math.min(width, height) / 2;
      const cx = width / 2;
      const cy = height / 2;
      let px = (x - cx) / r;
      let py = (cy - y) / r;
      const d = px * px + py * py;
      let pz = d > 1 ? 0 : Math.sqrt(1 - d);
      if (d > 1) {
        const norm = Math.sqrt(d);
        px /= norm;
        py /= norm;
      }
      return [px, py, pz];
    }

 
    function updatePositions() {
      let closest = -1, minDist = Infinity;
      elements.forEach((el, i) => {
        const pos = positions[i];
        const rot = mat3MultiplyVec3(rotationMatrix, pos);
        
  
        const normalizedRot = normalize(rot);
        
  
        const scale = 1 + normalizedRot[2] * 0.2; 
        const x = center.x + normalizedRot[0] * radius;
        const y = center.y - normalizedRot[1] * radius;
        const opacity = Math.max(0.3, (normalizedRot[2] + 1) * 0.5);

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = Math.floor((normalizedRot[2] + 1) * 100);

        if (normalizedRot[2] > 0) {
          const dx = x - center.x;
          const dy = y - center.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < minDist) {
            minDist = dist;
            closest = i;
          }
        }
      });
      elements.forEach((el, i) => el.classList.toggle('focused', i === closest));
      return closest;
    }

    function animate() {
      requestAnimationFrame(animate);
      
      if (isDragging) {
        rotationMatrix = normalize3x3(rotationMatrix);
      } else if (velocity > 0.001) {
        const spinMat = createRotationMatrix(lastAxis, velocity * 0.016);
        rotationMatrix = mat3Multiply(spinMat, rotationMatrix);
        rotationMatrix = normalize3x3(rotationMatrix);
        velocity *= dampingFactor;
      } else if (!autoRotateMatrix) {
      
        velocity = 0;
        const spinMat = createRotationMatrix(idleSpinAxis, idleSpinSpeed);
        rotationMatrix = mat3Multiply(spinMat, rotationMatrix);
        rotationMatrix = normalize3x3(rotationMatrix);
      } else {
       
        rotationMatrix = mat3Multiply(autoRotateMatrix, rotationMatrix);
        rotationMatrix = normalize3x3(rotationMatrix);
        autoRotateMatrix = null;
      }
      
      updatePositions();
    }

    
    function normalize3x3(matrix) {
      let row1 = normalize([matrix[0], matrix[1], matrix[2]]);
      
      let row2 = [matrix[3], matrix[4], matrix[5]];
      let dot12 = dot(row1, row2);
      row2 = [
        row2[0] - dot12 * row1[0],
        row2[1] - dot12 * row1[1],
        row2[2] - dot12 * row1[2]
      ];
      row2 = normalize(row2);
      
      let row3 = cross(row1, row2);
      
      return [
        ...row1,
        ...row2,
        ...row3
      ];
    }

    function focusOnIndex(index) {
      if (index === -1) return;
      const target = positions[index];
      const current = mat3MultiplyVec3(rotationMatrix, target);
      const axis = cross(current, [0, 0, 1]);
      const angle = Math.acos(dot(normalize(current), [0, 0, 1]));
      if (angle < 0.001) return;
      autoRotateMatrix = createRotationMatrix(axis, angle * 0.2);
    }

    function onPointerDown(e) {
      isDragging = true;
      const rect = globe.getBoundingClientRect();
      last3D = projectOnTrackball(e.clientX - rect.left, e.clientY - rect.top, globe.clientWidth, globe.clientHeight);
      lastPointer = { x: e.clientX, y: e.clientY };
      lastTime = Date.now();
      velocity = 0;
      autoRotateMatrix = null; 
    }

    function onPointerMove(e) {
      if (!isDragging) return;

      const currentTime = Date.now();
      if (!lastTime) lastTime = currentTime;
      const deltaTime = (currentTime - lastTime) / 1000; 
      lastTime = currentTime;

      const rect = globe.getBoundingClientRect();
      const current = projectOnTrackball(e.clientX - rect.left, e.clientY - rect.top, globe.clientWidth, globe.clientHeight);
      
      if (last3D) {
        const axis = cross(last3D, current);
        const angle = Math.acos(Math.min(1, dot(last3D, current))) * 2;
        
    
        if (Math.abs(angle) > 0.001) {
          const rotMat = createRotationMatrix(axis, angle);
          rotationMatrix = mat3Multiply(rotMat, rotationMatrix);
          velocity = angle / deltaTime;
          lastAxis = axis;
        }
      }
      
      last3D = current;
      lastPointer = { x: e.clientX, y: e.clientY };
    }

    function onPointerUp() {
      isDragging = false;
      last3D = null;
      lastTime = null;
      const index = updatePositions();
      
      if (velocity < 0.5) {
        focusOnIndex(index);
      }
    }

    function handleTouchStart(e) {
      if (e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        onPointerDown({
          clientX: touch.clientX,
          clientY: touch.clientY
        });
      }
    }

    function handleTouchMove(e) {
      if (e.touches.length === 1) {
        e.preventDefault();
        const touch = e.touches[0];
        onPointerMove({
          clientX: touch.clientX,
          clientY: touch.clientY
        });
      }
    }

    function handleTouchEnd(e) {
      e.preventDefault();
      onPointerUp();
    }

    function updateRadius() {
      const width = globe.clientWidth;
      const height = globe.clientHeight;
      radius = Math.min(width, height) * (width < 768 ? 0.40 : 0.4);
      center = { x: width / 2, y: height / 2 };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateRadius();
      updatePositions();
    });

    resizeObserver.observe(globe);

    globe.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointerleave', onPointerUp);
    globe.addEventListener('touchstart', handleTouchStart, { passive: false });
    globe.addEventListener('touchmove', handleTouchMove, { passive: false });
    globe.addEventListener('touchend', handleTouchEnd);
    globe.addEventListener('touchcancel', handleTouchEnd);
    window.addEventListener('resize', () => {
      center = { x: globe.clientWidth / 2, y: globe.clientHeight / 2 };
    });

    updatePositions();
    animate();

    return () => {
      globe.innerHTML = '';
      globe.removeEventListener('pointerdown', onPointerDown);
      globe.removeEventListener('touchstart', handleTouchStart);
      globe.removeEventListener('touchmove', handleTouchMove);
      globe.removeEventListener('touchend', handleTouchEnd);
      globe.removeEventListener('touchcancel', handleTouchEnd);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointerleave', onPointerUp);
      resizeObserver.disconnect();
    };
  }, [techItems]);

  return <div className="about-globe-container" ref={globeRef}></div>;
}

export default TechGlobe;