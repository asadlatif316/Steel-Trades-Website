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
      'Flat steel for cutting, bending and welding into panels, tanks and machine parts.',
    image: null,
    icon: Layers,
  },
  {
    title: 'Pipes and tubes',
    description:
      'Round and square sections for frames, railings, structures and fluid lines.',
    image: null,
    icon: Cylinder,
  },
  {
    title: 'Bars and rods',
    description:
      'Round, square and flat bars for gates, frames and general fabrication.',
    image: null,
    icon: Ruler,
  },
  {
    title: 'Structural sections',
    description:
      'Angles, channels and beams for sheds, buildings and support frames.',
    image: null,
    icon: Building2,
  },
];
