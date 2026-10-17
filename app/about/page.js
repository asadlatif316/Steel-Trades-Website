import { OurStory, OurStrength, OurVision, PageBanner, Process, QuickFacts, CallToAction } from '../components';
import { site } from '@/lib/site';

export const metadata = { title: 'About Us' };

export default function About() {
  return (
    <main className='flex-1'>
      <main className='flex-1'>
        <PageBanner
          title='About Us'
          description='Arsal Steel Traders is a steel supplier in Sialkot. We help contractors, fabricators and workshops find the right material, send them a clear quote, and deal with them directly from the first message to the final order.'
          crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
          image='/images/about-banner.jpg'
          imageAlt='Steel stock at Arsal Steel Traders'
        />
        <OurStory />
        <OurVision />
        <OurStrength />
        <Process />
        <QuickFacts />
        <CallToAction
          title='Ready to get your steel quote?'
          description='Send your list on WhatsApp or through the contact page. We reply with a clear quote.'
          primary={{ label: 'Request a quote', href: '/contact' }}
          secondary={{
            label: 'Message on WhatsApp',
            href: `https://wa.me/${site.whatsappDigits}`,
            external: true,
          }}
          note={`Prefer to talk? Call ${site.phone}`}
        />
      </main>
    </main>
  );
}
