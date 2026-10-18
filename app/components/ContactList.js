import { contacts } from '../utils';

function Row({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className='flex size-11 shrink-0 items-center justify-center bg-navy text-brass'>
        <Icon className='size-5' aria-hidden='true' />
      </span>
      <span>
        <span className='block text-xs text-ink-muted'>{label}</span>
        <span className='block text-base font-medium text-navy transition-colors group-hover:text-brass-deep'>
          {value}
        </span>
      </span>
    </>
  );

  const base = 'group flex items-center gap-4 py-5';

  if (!href) return <div className={base}>{content}</div>;

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={base}
    >
      {content}
    </a>
  );
}

export default function ContactList() {
  return (
    <div className='mt-14'>
      <h3 className='font-display text-2xl font-semibold text-navy'>
        Or reach us directly
      </h3>
      <ul className='mt-4 divide-y divide-plate border-y border-plate'>
        {contacts.map((contact) => (
          <li key={contact.label}>
            <Row {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
