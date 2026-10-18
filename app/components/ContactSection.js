import { Card, CardContent } from '../components/ui';
import ContactList from './ContactList';
import QuoteForm from './quoteForm';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id='quote' className='bg-white py-24'>
      <Reveal className='mx-auto w-full max-w-3xl px-6'>
        <SectionHeading
          title='Request a quote'
          description='Tell us what you need and we will reply with a clear quote.'
        />

        <Card className='mt-12 overflow-hidden pt-0 shadow-lg'>
          <div className='h-1 bg-brass' aria-hidden='true' />
          <CardContent className='pt-6'>
            <QuoteForm />
          </CardContent>
        </Card>
      </Reveal>

      <Reveal className='mx-auto mt-20 w-full max-w-6xl px-6'>
        <ContactList />
      </Reveal>
    </section>
  );
}
