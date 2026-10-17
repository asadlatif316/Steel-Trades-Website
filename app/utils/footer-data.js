import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { site } from '@/lib/site';

export const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Request a Quote', href: '/contact' },
];

// TODO: confirm this product list with the owner
export const supplyItems = [
  'Steel sheets and plates',
  'Pipes and tubes',
  'Bars and rods',
  'Structural sections',
];

export const contacts = [
  {
    label: 'Phone',
    icon: Phone,
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
  },
  {
    label: 'WhatsApp',
    icon: MessageCircle,
    value: 'Chat on WhatsApp',
    href: `https://wa.me/${site.whatsappDigits}`,
    external: true,
  },
  {
    label: 'Email',
    icon: Mail,
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { label: 'Address', icon: MapPin, value: site.address },
  { label: 'Hours', icon: Clock, value: site.hours },
];
