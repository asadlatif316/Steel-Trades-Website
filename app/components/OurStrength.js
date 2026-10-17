import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '../components/ui';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { strengths } from '../utils';

export default function OurStrength() {
  return (
    <section id='our-strength' className='bg-white py-24'>
      <Reveal className='mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16'>
        {/* Left: stays in view while the rows scroll on desktop */}
        <div className='lg:sticky lg:top-32 lg:self-start'>
          <Eyebrow>Our strength</Eyebrow>
          <h2 className='mt-4 font-display text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl'>
            What you can count on
          </h2>
          <p className='mt-6 max-w-md text-lg leading-8 text-ink-muted'>
            Four things you can count on every time you order from us, whether
            it is a single piece or a full project.
          </p>
          <Link
            href='/contact'
            className={buttonVariants({ size: 'lg', className: 'mt-8' })}
          >
            Request a quote
            <ArrowRight aria-hidden='true' />
          </Link>
        </div>

        {/* Right: four rows */}
        <ul className='divide-y divide-plate border-y border-plate'>
          {strengths.map(({ title, body, icon: Icon }) => (
            <li key={title} className='group flex gap-5 py-8'>
              <span className='flex size-14 shrink-0 items-center justify-center bg-navy text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-quench'>
                <Icon className='size-7' aria-hidden='true' />
              </span>
              <div>
                <h3 className='font-display text-2xl font-semibold text-navy'>
                  {title}
                </h3>
                <p className='mt-2 max-w-xl text-base leading-7 text-ink-muted'>
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
