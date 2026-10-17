import Image from 'next/image';
import Link from 'next/link';

export default function PageBanner({
  title,
  description,
  image,
  imageAlt = '',
  crumbs = [],
}) {
  return (
    <section className='relative isolate flex min-h-80 items-center overflow-hidden bg-navy py-16 text-white sm:min-h-96'>
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

      {/* Dark layer: strongest on the left, where the text sits */}
      <div
        aria-hidden='true'
        className='absolute inset-0 -z-10 bg-linear-to-r from-quench/95 via-quench/80 to-quench/40'
      />

      <div className='mx-auto w-full max-w-7xl px-6'>
        <div className='max-w-2xl text-left'>
          {crumbs.length > 0 && (
            <nav aria-label='Breadcrumb' className='mb-5'>
              <ol className='flex items-center gap-2 text-sm text-white/70'>
                {crumbs.map((crumb, index) => {
                  const isLast = index === crumbs.length - 1;
                  return (
                    <li key={crumb.label} className='flex items-center gap-2'>
                      {isLast ? (
                        <span aria-current='page' className='text-brass'>
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          href={crumb.href}
                          className='transition-colors hover:text-brass'
                        >
                          {crumb.label}
                        </Link>
                      )}
                      {!isLast && <span aria-hidden='true'>/</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}

          <h1 className='font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl'>
            {title}
          </h1>

          <div className='mt-6 h-1 w-12 bg-brass' aria-hidden='true' />

          {description && (
            <p className='mt-6 max-w-2xl text-lg leading-8 text-white/80'>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
