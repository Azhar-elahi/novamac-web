export interface NovamacService {
  id: number;
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
  hasOrb?: boolean;
}

/**
 * Canonical 3 milestones from the story script, in exact order:
 * 1. AI & Business Automation — ribbon climbs upward
 * 2. Website Performance Audits — wave-like dip then swoop back up, card on the left
 * 3. Local SEO Outreach — long sweeping right curve, card on the right, orbiting glass spheres
 */
export const NOVAMAC_SERVICES: NovamacService[] = [
  {
    id: 1,
    title: 'AI & Business Automation',
    description: 'Custom AI agents and automated workflows that run your business around the clock.',
    color: '#B0E0E6',
    position: [0, 5.5, -62],
  },
  {
    id: 2,
    title: 'Website Performance Audits',
    description: 'Deep technical audits that turn a slow site into a fast, reliable growth engine.',
    color: '#FFDAB9',
    position: [-9, 2, -92],
  },
  {
    id: 3,
    title: 'Local SEO Outreach',
    description: 'Dominate your local map pack and search rankings with consistent, compounding visibility.',
    color: '#E6E6FA',
    position: [10, 3, -124],
    hasOrb: true,
  },
];
