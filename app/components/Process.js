import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ClipboardList } from 'lucide-react';
import { buttonVariants } from '../components/ui';
import { site } from '@/lib/site';
import NumberedList from './NumberedList';
import Reveal from './Reveal';
import { processImage, processSteps } from '../utils';

export default function Process() {
  return (
    <section id='process' className='bg-paper py-24'>
      <Reveal className='mx-auto w-full max-w-6xl px-6'>
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Photo: second in the code so the heading reads first on phones, first on desktop */}
          <div className='relative aspect-4/3 overflow-hidden rounded-lg bg-linear-to-br from-navy to-quench lg:order-first'>
            {processImage ? (
              <Image
                src={processImage}
                alt='Steel being prepared for an order'
                fill
                sizes='(min-width: 1024px) 50vw, 100vw'
                className='object-cover'
              />
            ) : (
              <div className='flex h-full items-center justify-center text-brass/70'>
                <ClipboardList className='size-20' aria-hidden='true' />
              </div>
            )}
          </div>

          <div className='flex flex-col justify-between gap-10'>
            <div>
              <p className='flex items-center gap-2 text-xs font-semibold text-navy uppercase'>
                <span
                  className='size-1.5 rounded-full bg-brass'
                  aria-hidden='true'
                />
                How to order
              </p>
              <h2 className='mt-4 font-display text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl lg:text-6xl'>
                From your list to your steel in three steps
              </h2>
            </div>

            <div>
              <p className='max-w-md text-lg leading-8 text-ink-muted'>
                Ordering is simple. Send us what you need and we take it from
                there.
              </p>
              <div className='mt-8 flex flex-wrap gap-3'>
                <Link
                  href='/contact'
                  className={buttonVariants({ size: 'lg' })}
                >
                  Send your requirement
                  <ArrowRight aria-hidden='true' />
                </Link>
                <a
                  href={`https://wa.me/${site.whatsappDigits}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={buttonVariants({ variant: 'outline', size: 'lg' })}
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16'>
          <NumberedList items={processSteps} className='sm:grid-cols-3' />
        </div>
      </Reveal>
    </section>
  );
}
