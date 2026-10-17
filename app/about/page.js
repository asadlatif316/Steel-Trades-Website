import {OurStory, PageBanner} from '../components';

export const metadata = { title: 'About Us' };

export default function About() {
  return (
    <main className='flex-1'>
      <PageBanner
        title='About Us'
        description='From sheets and pipes to bars and structural sections, we supply iron and steel to builders and workshops across Sialkot. You get straight advice on the right material and a clear quote before you commit.'
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
        image='/images/about-banner.jpg'
        imageAlt='Steel stock at Arsal Steel Traders'
      />
      <OurStory/>
    </main>
  );
}
