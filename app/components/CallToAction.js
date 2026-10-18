import Reveal from "./Reveal";
import { Button } from "./ui";
import Image from "next/image";
export default function CallToAction({
  title,
  description,
  image,
  imageAlt = '',
  primary,
  secondary,
  note,
}) {
  return (
    <section className='bg-paper py-16'>
      <Reveal className='mx-auto w-full max-w-6xl px-6'>
        <div className='relative isolate overflow-hidden rounded-3xl bg-quench px-6 py-14 text-center text-white shadow-xl sm:py-16'>
          {image && (
            <>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes='(min-width: 1152px) 1104px, 100vw'
                className='-z-20 object-cover'
              />
              {/* Dark layer over the photo */}
              <div
                aria-hidden='true'
                className='absolute inset-0 -z-10 bg-quench/80'
              />
            </>
          )}

          <div className='mx-auto max-w-2xl'>
            <div
              className='mx-auto mb-5 h-1 w-12 bg-brass'
              aria-hidden='true'
            />

            <h2 className='font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl'>
              {title}
            </h2>

            <p className='mx-auto mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg'>
              {description}
            </p>

            <div className='mt-8 flex items-center justify-center gap-3'>
              <Button>Request a quote</Button>
              <Button  variant='outline' className='text-primary'>About us</Button>
            </div>

            {note && <p className='mt-6 text-sm text-white/65'>{note}</p>}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
