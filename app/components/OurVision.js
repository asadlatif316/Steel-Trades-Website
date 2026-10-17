import Image from 'next/image';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { vision, visionImage } from '../utils';

export default function OurVision() {
  return (
    <section
      id='our-vision'
      className='relative isolate overflow-hidden bg-navy py-28 text-center text-white'
    >
      {visionImage && (
        <>
          <Image
            src={visionImage}
            alt=''
            fill
            sizes='100vw'
            className='-z-20 object-cover'
          />
          {/* Dark layer over the photo */}
          <div
            aria-hidden='true'
            className='absolute inset-0 -z-10 bg-quench/80'
          />
        </>
      )}

      {/* Soft brass glow */}
      <div
        aria-hidden='true'
        className='absolute -top-24 right-0 -z-10 size-96 rounded-full bg-brass/20 blur-3xl'
      />

      <Reveal className='mx-auto w-full max-w-4xl px-6'>
        <div className='flex justify-center'>
          <Eyebrow light>Our vision</Eyebrow>
        </div>

        <h2 className='mt-6 font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl'>
          {vision.statement}
        </h2>

        <div className='mx-auto mt-8 h-1 w-12 bg-brass' aria-hidden='true' />

        <p className='mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75'>
          {vision.support}
        </p>
      </Reveal>
    </section>
  );
}
