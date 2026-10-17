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
export const whyUsImage = null;
export const processImage = null;

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

// TODO: confirm each answer with the owner before the site goes live.
export const faqItems = [
  {
    id: 1,
    q: 'How do I request a quote?',
    a: 'Send your material list by WhatsApp, phone or email, or use the Contact page. Include the type, size and quantity if you know them, and we will reply with a quote.',
  },
  {
    id: 2,
    q: 'What details should I include?',
    a: 'The type of material, its size or thickness, the grade if you know it, the quantity, and where you need it delivered. If you are missing something, send what you have and we will ask for the rest.',
  },
  {
    id: 3,
    q: 'Can you help me choose the right material?',
    a: 'Yes. Describe the job, such as a gate, a shed frame or a machine part, and we will suggest a suitable material before you order.',
  },
  {
    id: 4,
    q: 'Is there a minimum order?',
    a: 'Order sizes vary by material. Tell us what you need and we will confirm the quantity and price in your quote.',
  },
  {
    id: 5,
    q: 'Do you deliver?',
    a: 'Tell us your delivery location when you request a quote. We will confirm whether delivery or pickup is possible and how long it will take.',
  },
  {
    id: 6,
    q: 'Where are you and when are you open?',
    a: `You can find us at ${site.address}. We are open ${site.hours}.`,
  },
];

// TODO: confirm these four points with the owner.
export const whyUs = [
  {
    title: 'Clear quotes',
    body: 'Every quote lists the material, size, quantity and price, so you know exactly what you are paying for.',
  },
  {
    title: 'Honest material advice',
    body: 'We tell you what a material suits before you buy, so it fits the job.',
  },
  {
    title: 'Reliable delivery',
    body: 'We confirm timing with you up front, so your work is not left waiting.',
  },
  {
    title: 'Local and direct',
    body: 'You deal with the people who handle the steel, right here in Sialkot.',
  },
];

export const processSteps = [
  {
    title: 'Share your requirement',
    body: 'Send your material list by WhatsApp, phone or email. Include the size and quantity if you know them.',
  },
  {
    title: 'Get your quotation',
    body: 'We reply with a clear quote. If you are unsure which material fits, we will advise you.',
  },
  {
    title: 'Receive your steel',
    body: 'We confirm delivery or pickup with you, so your material is ready when you need it.',
  },
];