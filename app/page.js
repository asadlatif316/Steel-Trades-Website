import { site } from '@/lib/site';
import { Hero } from './components';

export default function Home() {
  return (
    <main className='flex-1'>
      <Hero
        title='Dependable steel for builders, workshops and factories.'
        description='Arsal Steel Traders supplies iron and steel in Sialkot. Send us your list and we reply with a clear quote.'
        image='/images/hero.jpg'
        imageAlt='Steel bars and pipes stacked in the yard'
        primary={{ label: 'Request a Quote', href: '/contact' }}
        secondary={{ label: 'About Us', href: '/about' }}
      />
    </main>
  );
}