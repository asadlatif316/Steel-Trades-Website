export default function SectionHeading({ title, description }) {
  return (
    <div className='mx-auto max-w-2xl text-center'>
      <h2 className='font-display text-4xl font-bold tracking-tight text-balance text-navy sm:text-5xl'>
        {title}
      </h2>
      {description && (
        <p className='mt-4 text-lg leading-8 text-ink-muted'>{description}</p>
      )}
    </div>
  );
}
