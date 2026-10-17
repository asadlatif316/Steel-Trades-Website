import Image from 'next/image';
import { Factory } from 'lucide-react';
import Eyebrow from './Eyebrow';
import Reveal from './Reveal';
import { story, storyImage } from '../utils';

export default function OurStory() {
  return (
    <section id='our-story' className='bg-white py-24'>
      <Reveal className='mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center'>
        {/* Photo: second in the code so the text reads first on phones */}
        <div className='relative aspect-4/3 overflow-hidden rounded-lg bg-linear-to-br from-navy to-quench lg:order-first'>
          {storyImage ? (
            <Image
              src={storyImage}
              alt='Steel stock at Arsal Steel Traders'
              fill
              sizes='(min-width: 1024px) 50vw, 100vw'
              className='object-cover'
            />
          ) : (
            <div className='flex h-full items-center justify-center text-brass/70'>
              <Factory className='size-20' aria-hidden='true' />
            </div>
          )}
        </div>

        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className='mt-4 font-display text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl'>
            {story.title}
          </h2>
          <div className='mt-6 max-w-2xl space-y-4 text-lg leading-8 text-ink-muted'>
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
