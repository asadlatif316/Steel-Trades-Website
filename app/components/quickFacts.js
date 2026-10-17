import { facts } from '../utils';

export default function QuickFacts() {
  return (
    <section aria-label='Quick facts' className='bg-navy text-white'>
      <div className='mx-auto w-full max-w-6xl'>
        <ul className='grid grid-cols-1 gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4'>
          {facts.map(({ label, value, icon: Icon }) => (
            <li
              key={label}
              className='flex items-center gap-4 bg-navy px-6 py-5'
            >
              <Icon className='size-7 shrink-0 text-brass' aria-hidden='true' />
              <div>
                <p className='text-xs text-white/60'>{label}</p>
                <p className='text-sm leading-5 font-medium'>{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
