import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NovaMac ERP | Live Demo',
  description: 'Interactive demo for NovaMac ERP system.',
  robots: 'noindex, nofollow',
};

export default function DemoPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
      <iframe src='/demo/index.html' style={{ width: '100%', height: '100%', border: 'none' }} title='NovaMac ERP Demo' allowFullScreen />
    </div>
  );
}
