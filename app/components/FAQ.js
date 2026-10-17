import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqItems } from '../utils';

export default function FAQ() {
  return (
    <section id='faq' className='bg-white py-24'>
      <div className='mx-auto w-full max-w-3xl px-6'>
        <SectionHeading
          title='Frequently asked questions'
          description='Quick answers about quotes, materials and delivery.'
        />

        <div className='mt-12 flex flex-col gap-4'>
          {faqItems.map((faq) => (
            <details
              key={faq.id}
              className='group rounded-md border border-plate bg-paper p-5 transition-shadow open:bg-white open:shadow-sm'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-navy [&::-webkit-details-marker]:hidden'>
                <span>{faq.q}</span>
                <ChevronDown
                  className='size-5 shrink-0 text-brass-deep transition-transform duration-300 group-open:rotate-180'
                  aria-hidden='true'
                />
              </summary>
              <p className='mt-3 leading-7 text-ink-muted'>{faq.a}</p>
            </details>
          ))}
        </div>

        <p className='mt-8 text-center text-ink-muted'>
          Still have a question?{' '}
          <Link
            href='/contact'
            className='font-medium text-navy underline underline-offset-4 hover:text-brass-deep'
          >
            Contact us
          </Link>{' '}
          and we will reply.
        </p>
      </div>
    </section>
  );
}
