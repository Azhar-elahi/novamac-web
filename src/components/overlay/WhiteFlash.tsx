'use client';

export default function WhiteFlash() {
  return (
    <div
      id="white-flash"
      className="fixed inset-0 z-[9999] bg-white pointer-events-none"
      style={{ opacity: 0 }}
    />
  );
}
