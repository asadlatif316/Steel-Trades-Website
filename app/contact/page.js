import { ContactSection, PageBanner } from '../components';

export const metadata = { title: 'Contact Us' };

export default function Contact() {
  return (
    <main className='flex-1'>
      <PageBanner
        title='Contact Us'
        description='Send us your material list and we will reply with a clear quote. You can reach us on WhatsApp, by phone or by email, or visit us in Sialkot.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
        image='/images/contact-banner.jpg'
        imageAlt='Steel stock at Arsal Steel Traders'
      />
      <ContactSection />
    </main>
  );
}
