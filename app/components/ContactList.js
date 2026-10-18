import { Card, CardContent } from '../components/ui';
import { contacts } from '../utils';

function ContactCard({ icon: Icon, label, value, href, external }) {
  const card = (
    <Card className='h-full overflow-hidden pt-0 transition-all duration-300 group-hover:shadow-lg motion-safe:group-hover:-translate-y-1'>
      <div className='h-1 bg-brass' aria-hidden='true' />
      <CardContent className='flex flex-col items-center pt-6 text-center'>
        <span className='flex size-14 items-center justify-center bg-navy text-brass transition-colors duration-300 group-hover:bg-brass group-hover:text-quench'>
          <Icon className='size-7' aria-hidden='true' />
        </span>
        <p className='mt-4 text-xs text-ink-muted'>{label}</p>
        <p className='mt-1 text-base font-medium wrap-break-word text-navy'>
          {value}
        </p>
      </CardContent>
    </Card>
  );

  if (!href) return <div className='group h-full'>{card}</div>;

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className='group block h-full'
    >
      {card}
    </a>
  );
}

export default function ContactList() {
  const cards = contacts.filter((contact) => contact.label !== 'Hours');
  const hours = contacts.find((contact) => contact.label === 'Hours');

  return (
    <div>
      <h3 className='text-center font-display text-3xl font-semibold text-navy'>
        Or reach us directly
      </h3>

      <ul className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {cards.map((contact) => (
          <li key={contact.label}>
            <ContactCard {...contact} />
          </li>
        ))}
      </ul>

      {hours && (
        <p className='mt-8 flex items-center justify-center gap-2 text-center text-sm text-ink-muted'>
          <hours.icon
            className='size-4 shrink-0 text-brass-deep'
            aria-hidden='true'
          />
          Open {hours.value}
        </p>
      )}
    </div>
  );
}
