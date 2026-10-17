import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Warehouse } from 'lucide-react';
import { buttonVariants } from '../components/ui';
import Reveal from './Reveal';
import { whyUs, whyUsImage } from '../utils';

export default function WhyChooseUs() {
  return (
    <section id='why-us' className='bg-white py-24'>
      <Reveal className='mx-auto w-full max-w-6xl px-6'>
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Left: heading, text, button */}
          <div className='flex flex-col justify-between gap-10'>
            <div>
              <p className='flex items-center gap-2 text-xs font-semibold text-navy uppercase'>
                <span
                  className='size-1.5 rounded-full bg-brass'
                  aria-hidden='true'
                />
                Why choose us
              </p>
              <h2 className='mt-4 font-display text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl lg:text-6xl'>
                Steel supply you can rely on
              </h2>
            </div>

            <div>
              <p className='max-w-md text-lg leading-8 text-ink-muted'>
                We keep it simple: clear quotes, straight advice on the right
                material, and direct dealings with the people who handle your
                order.
              </p>
              <Link
                href='/contact'
                className={buttonVariants({ size: 'lg', className: 'mt-8' })}
              >
                Request a quote
                <ArrowRight aria-hidden='true' />
              </Link>
            </div>
          </div>

          {/* Right: photo */}
          <div className='relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-navy to-quench'>
            {whyUsImage ? (
              <Image
                src={whyUsImage}
                alt='Steel being handled at Arsal Steel Traders'
                fill
                priority={false}
                sizes='(min-width: 1024px) 50vw, 100vw'
                className='object-cover'
              />
            ) : (
              <div className='flex h-full items-center justify-center text-brass/70'>
                <Warehouse className='size-20' aria-hidden='true' />
              </div>
            )}
          </div>
        </div>

        {/* Progress line: first quarter highlighted */}
        <div className='mt-16 h-0.5 bg-plate' aria-hidden='true'>
          <div className='h-full w-1/4 bg-brass' />
        </div>

        {/* Four points */}
        <ol className='mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {whyUs.map((point, index) => (
            <li key={point.title}>
              <div className='flex items-center gap-3'>
                <span
                  className='flex size-8 shrink-0 items-center justify-center rounded-full bg-brass text-xs font-semibold text-quench'
                  aria-hidden='true'
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className='font-display text-xl font-semibold text-navy'>
                  {point.title}
                </h3>
              </div>
              <p className='mt-3 max-w-[32ch] text-sm leading-6 text-ink-muted'>
                {point.body}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
