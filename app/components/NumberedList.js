export default function NumberedList({
  items,
  className = 'sm:grid-cols-2 lg:grid-cols-4',
}) {
  return (
    <>
      <div className='h-0.5 bg-plate' aria-hidden='true'>
        <div
          className='h-full bg-brass'
          style={{ width: `${100 / items.length}%` }}
        />
      </div>

      <ol className={`mt-8 grid gap-10 ${className}`}>
        {items.map((item, index) => (
          <li key={item.title}>
            <div className='flex items-center gap-3'>
              <span
                className='flex size-8 shrink-0 items-center justify-center rounded-full bg-brass text-xs font-semibold text-quench'
                aria-hidden='true'
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className='font-display text-xl font-semibold text-navy'>
                {item.title}
              </h3>
            </div>
            <p className='mt-3 max-w-[32ch] text-sm leading-6 text-ink-muted'>
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
