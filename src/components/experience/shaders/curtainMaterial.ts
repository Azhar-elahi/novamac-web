export const curtainVertexShader = `
precision highp float;
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;
  float wave1 = sin(position.x * 0.8 + uTime * 1.4) * 0.35;
  float wave2 = cos(position.y * 0.45 + uTime * 1.0) * 0.25;
  float pinFactor = 1.0 - smoothstep(-8.0, 8.0, position.y);
  vec3 pos = position;
  pos.z += (wave1 + wave2) * pinFactor;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const curtainFragmentShader = `
precision highp float;
varying vec2 vUv;
uniform vec3 uColor;
uniform float uOpacity;

void main() {
  float folds = sin(vUv.x * 50.0) * 0.12 + 0.88;
  float sheer = 0.72 + 0.28 * sin(vUv.y * 12.0 + vUv.x * 8.0);
  gl_FragColor = vec4(uColor * folds * sheer, uOpacity * 0.92);
}
`;
