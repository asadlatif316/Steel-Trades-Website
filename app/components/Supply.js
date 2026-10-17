import Image from 'next/image';
import Link from 'next/link';

import {
  buttonVariants,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui';
import { site } from '@/lib/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { products } from '../utils';

function ProductCard({ title, description, items, uses, image, icon: Icon }) {
  const whatsappText = encodeURIComponent(
    `Hello, I need a quote for ${title.toLowerCase()}.`,
  );

  return (
    <Card className='group h-full overflow-hidden pt-0 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-xl'>
      {/* Brass strip grows wider on hover */}
      <div
        className='h-1 w-12 bg-brass transition-all duration-500 group-hover:w-full'
        aria-hidden='true'
      />

      <div className='relative aspect-video overflow-hidden bg-linear-to-br from-navy to-quench'>
        {image ? (
          <Image
            src={image}
            alt=''
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className='object-cover transition-transform duration-500 motion-safe:group-hover:scale-105'
          />
        ) : (
          <div className='flex h-full items-center justify-center text-brass/80 transition-transform duration-500 motion-safe:group-hover:scale-110'>
            <Icon className='size-16' aria-hidden='true' />
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className='font-display text-2xl'>{title}</CardTitle>
        <CardDescription className='leading-6'>{description}</CardDescription>
      </CardHeader>

      <CardContent className='flex-1 space-y-4'>
        <div>
          <p className='mb-2 text-xs font-medium text-ink-muted'>
            Common items
          </p>
          <ul className='flex flex-wrap gap-2'>
            {items.map((item) => (
              <li key={item}>
                <Badge variant='outline'>{item}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <p className='text-sm text-ink-muted'>
          <span className='font-medium text-navy'>Used for:</span> {uses}
        </p>
      </CardContent>

      <CardFooter className='mt-auto flex flex-wrap gap-3'>
        <Link href='/contact' className={buttonVariants()}>
          Get a quote
        </Link>
        <a
          href={`https://wa.me/${site.whatsappDigits}?text=${whatsappText}`}
          target='_blank'
          rel='noopener noreferrer'
          className={buttonVariants({ variant: 'outline' })}
        >
          Ask on WhatsApp
        </a>
      </CardFooter>
    </Card>
  );
}

function CustomRequest() {
  return (
    <div className='mt-12 flex flex-col items-start justify-between gap-6 bg-navy px-8 py-8 text-white md:flex-row md:items-center'>
      <div>
        <h3 className='font-display text-2xl font-semibold'>
          Need something not listed?
        </h3>
        <p className='mt-1 max-w-xl text-white/75'>
          Send us the type, size and quantity. We will tell you if we can supply
          it.
        </p>
      </div>
      <Link href='/contact' className={buttonVariants({ size: 'lg' })}>
        Send your requirement
      </Link>
    </div>
  );
}

export default function Supply() {
  return (
    <section id='supply' className='bg-paper py-24'>
      <div className='mx-auto w-full max-w-6xl px-6'>
        <SectionHeading
          title='What we supply'
          description='Tell us the size, quantity and use. If you are not sure which material fits, describe the job and we will suggest one.'
        />

        <Reveal className='mt-14'>
          <Carousel opts={{ align: 'start' }} aria-label='Products we supply'>
            {/* py-4 leaves room so the hover lift and shadow are not clipped */}
            <CarouselContent className='py-4'>
              {products.map((product) => (
                <CarouselItem
                  key={product.title}
                  className='sm:basis-1/2 lg:basis-1/3'
                >
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className='mt-6 flex justify-center gap-3'>
              <CarouselPrevious className='static translate-y-0' />
              <CarouselNext className='static translate-y-0' />
            </div>
          </Carousel>
        </Reveal>

        <CustomRequest />
      </div>
    </section>
  );
}
