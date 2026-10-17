import {
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Layers,
  Cylinder,
  Ruler,
  Building2,
} from 'lucide-react';
import { site } from '@/lib/site';

export const facts = [
  { label: 'Location', value: site.city, icon: MapPin },
  { label: 'Open', value: site.hours, icon: Clock },
  {
    label: 'Get a quote',
    value: 'Send your list on WhatsApp',
    icon: MessageCircle,
  },
  {
    label: 'We serve',
    value: 'Contractors, workshops and fabricators',
    icon: Users,
  },
];

// TODO: confirm this product list with the owner.
// Add a photo by setting image: "/images/products/sheets.jpg" (file in public/).
export const products = [
  {
    title: 'Sheets and plates',
    description:
      'Flat steel for cutting, bending and welding. A common starting point for panels, tanks, machine parts and workshop tables.',
    items: [
      'Mild steel sheets',
      'Steel plates',
      'Checker plates',
      'Galvanized sheets',
    ],
    uses: 'Fabrication, panels, tanks and machine parts',
    image: null,
    icon: Layers,
  },
  {
    title: 'Pipes and tubes',
    description:
      'Round and square sections that give strength without extra weight. Used wherever a frame, rail or line is needed.',
    items: [
      'Round pipes',
      'Square tubes',
      'Rectangular tubes',
      'Galvanized pipes',
    ],
    uses: 'Frames, railings, structures and fluid lines',
    image: null,
    icon: Cylinder,
  },
  {
    title: 'Bars and rods',
    description:
      'Solid bars in common shapes for general fabrication and building work, cut to the lengths your job needs.',
    items: ['Round bars', 'Square bars', 'Flat bars', 'Reinforcement bars'],
    uses: 'Gates, frames, grills and concrete reinforcement',
    image: null,
    icon: Ruler,
  },
  {
    title: 'Structural sections',
    description:
      'Shaped steel that carries load. Chosen for sheds, buildings and support frames where strength matters most.',
    items: ['Angles', 'Channels', 'I-beams', 'T-sections'],
    uses: 'Sheds, buildings and support frames',
    image: null,
    icon: Building2,
  },
];