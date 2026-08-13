/** Shared scroll progress breakpoints (0–1) for the anime 3D roller-coaster journey. */
export const ACTS = {
  /** Initial load: Title visible in open anime sky */
  wake: 0.0,
  roomStart: 0.0,
  /** Camera begins zoom toward the 'O' in SOLUTIONS */
  roomFlyStart: 0.05,
  /** 'O' expands into anime vortex portal */
  roomDissolveStart: 0.12,
  roomEnd: 0.22,
  /** Anime celestial vortex tunnel */
  tunnelFadeIn: 0.16,
  tunnelStart: 0.22,
  tunnelEnd: 0.42,
  /** Frosted gate transition */
  gateFadeIn: 0.38,
  gateEnd: 0.46,
  /** 15-Service Anime Roller Coaster Ride */
  rideStart: 0.46,
  rideEnd: 0.88,
  /** Climax Sun Burst & White Flash */
  climaxStart: 0.85,
  flashAt: 0.98,
} as const;

export const ROOM = {
  cameraStartZ: 0,
  boardZ: -9,
  /** First 'O' in SOLUTIONS (centered text) */
  oLookAt: { x: 1.15, y: 0.15, z: -8.85 },
  passThroughZ: -8.2,
} as const;

export const TUNNEL = {
  enterZ: -8,
  exitZ: -40,
  centerZ: -24,
  length: 32,
  radius: 12,
} as const;

export const GATE = {
  z: -40,
} as const;

export const RIDE = {
  endZ: -230,
} as const;
