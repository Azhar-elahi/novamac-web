import * as THREE from 'three';

export const boardTextVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const boardTextFragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;

void main() {
  vec3 powderBlue = vec3(0.69, 0.88, 0.90);
  vec3 peach = vec3(1.0, 0.85, 0.72);
  float grad = smoothstep(0.0, 1.0, vUv.x);
  vec3 base = mix(powderBlue, peach, grad);
  float pulse = 0.9 + 0.1 * sin(uTime * 1.5);
  // Strong inner glow
  float glow = 1.0 + 0.6 * smoothstep(1.0, 0.0, abs(vUv.y - 0.5) * 2.0);
  gl_FragColor = vec4(base * glow * pulse * 1.6, uOpacity);
}
`;

export function createBoardTextMaterial() {
  return new THREE.ShaderMaterial({
    vertexShader: boardTextVertexShader,
    fragmentShader: boardTextFragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: 1 },
    },
    transparent: true,
    toneMapped: false,
    depthWrite: false,
  });
}
