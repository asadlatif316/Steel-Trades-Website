import Link from 'next/link';
import { site } from '@/lib/site';
import { contacts, quickLinks, supplyItems } from '../utils';

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className='mb-3 font-display text-lg font-semibold text-white'>
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactItem({ icon: Icon, value, href, external }) {
  const content = (
    <>
      <Icon className='mt-0.5 size-4 shrink-0 text-brass' aria-hidden='true' />
      <span>{value}</span>
    </>
  );
  const base = 'flex items-start gap-3';

  if (!href) return <span className={base}>{content}</span>;

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`${base} transition-colors hover:text-brass`}
    >
      {content}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className='border-t-4 border-brass bg-quench text-sm text-white/70'>
      <div className='mx-auto w-full max-w-6xl px-6 py-12 md:py-16'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8'>
          <div>
            <Link
              href='/'
              className='flex items-center gap-3'
              aria-label={`${site.name}, home`}
            >
              <span
                aria-hidden='true'
                className='flex h-10 w-10 items-center justify-center bg-brass font-display text-lg font-bold text-quench'
              >
                AS
              </span>
              <span className='font-display text-xl font-bold text-white'>
                {site.name}
              </span>
            </Link>
            <p className='mt-4 max-w-xs leading-6'>
              Iron and steel supply for contractors, fabricators and workshops
              in {site.city}.
            </p>
          </div>

          <FooterColumn title='Quick Links'>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className='transition-colors hover:text-brass'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title='What We Supply'>
            <ul className='space-y-2'>
              {supplyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title='Contact'>
            <ul className='space-y-3'>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <ContactItem {...contact} />
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className='border-t border-white/10 py-5 text-center text-xs'>
        &copy; 2026 {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
