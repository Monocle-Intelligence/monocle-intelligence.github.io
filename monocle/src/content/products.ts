import type { Product } from '../types';

export const productsList: Product[] = [
  {
    id: 'p1',
    name: 'Monocle Core',
    category: 'Engine',
    description: 'The definitive spatial intelligence engine powering automated reasoning across topographical environments.',
    features: ['Real-time voxel mapping', 'Semantic routing', 'Zero-shot geometry inference']
  },
  {
    id: 'p2',
    name: 'Aperture Network',
    category: 'Perception',
    description: 'Distributed multisensor network for wide-area perception and data integration. Syncs with local nodes natively.',
    features: ['Multi-agent sync', 'Lidar/Radar fusion', 'High-bandwidth telemetry']
  },
  {
    id: 'p3',
    name: 'Atlas Studio',
    category: 'Platform',
    description: 'The comprehensive spatial developer platform. Design, simulate, and deploy complex architectures instantly.',
    features: ['3D WebGL Visualization', 'Drag-and-drop logic nodes', 'One-click deployment']
  }
];
