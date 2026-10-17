import { site } from '@/lib/site';
import { Hero, QuickFacts } from './components';

export default function Home() {
  return (
    <main className='flex-1'>
      <Hero
        title='Dependable steel for builders, workshops and factories.'
        eyebrow='Iron and steel supply in Sialkot'
        description='Arsal Steel Traders supplies iron and steel to contractors, fabricators and workshops. Send us your requirement and we reply with a clear quote and straight advice on the right material for the job.'
        image='/images/hero.jpg'
        imageAlt='Steel bars and pipes stacked in the yard'
        primary={{ label: 'Request a Quote', href: '/contact' }}
        secondary={{ label: 'About Us', href: '/about' }}
      />
      <QuickFacts />
    </main>
  );
}
