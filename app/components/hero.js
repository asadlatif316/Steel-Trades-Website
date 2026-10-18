import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui';
export default function Hero({
  title,
  description,
  image,
  imageAlt = '',
  primary,
  secondary,
  eyebrow,
}) {
  return (
    <section className='relative isolate flex min-h-96 items-center justify-center overflow-hidden bg-quench'>
      {image && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes='100vw'
          className='-z-20 object-cover'
        />
      )}

      {/* Dark layer over the photo */}
      <div aria-hidden='true' className='absolute inset-0 -z-10 bg-quench/80' />

      <div className='mx-auto w-full max-w-4xl px-6 py-24 text-center text-white'>
        {eyebrow && (
          <p className='mb-5 text-sm font-semibold tracking-[0.2em] text-brass uppercase'>
            {eyebrow}
          </p>
        )}
        <h1 className='font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl'>
          {title}
        </h1>

        <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl'>
          {description}
        </p>

        <div className='mt-10 flex items-center justify-center gap-4'>
          <Link href={primary.href} className={buttonVariants({ size: 'lg' })}>
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className={buttonVariants({
              size: 'lg',
              variant: 'secondary',
              className: ' ',
            })}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
