import type { HomeContent } from '../types';

export const homeContent: HomeContent = {
  hero: {
    title: 'Perceive the Unseen',
    subtitle: 'Monocle Intelligence builds next-generation spatial AI that unifies mapping, perception, and geometric understanding layers.',
    ctaPrimary: 'Explore Capabilities',
    ctaSecondary: 'Explore Products'
  },
  mission: {
    title: 'Intelligence over Physical Space',
    description: 'We believe that the next leap in artificial intelligence comes from deeply understanding the physical world. Our cutting-edge neural architectures process spatial data with unprecedented accuracy and speed.'
  },
  pillars: [
    {
      id: 'pillar-1',
      title: '3D Mapping',
      description: 'High-fidelity topological reconstruction and voxel-based mapping in real time.',
      icon: 'Map'
    },
    {
      id: 'pillar-2',
      title: 'Spatial Sensing',
      description: 'Distributed multisensory perception networks providing robust scene understanding.',
      icon: 'Radar'
    },
    {
      id: 'pillar-3',
      title: 'Orbital Perception',
      description: 'Global-scale coordination and intelligence gathering through synthetic apertures.',
      icon: 'Aperture'
    }
  ]
};
