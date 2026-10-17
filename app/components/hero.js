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
        <h1 className='font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl'>
          {title}
        </h1>

        <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl'>
          {description}
        </p>

        <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <Link href={primary.href} className={buttonVariants({ size: 'lg' })}>
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className:
                'border-white/40 bg-transparent text-white hover:bg-white hover:text-quench',
            })}
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
