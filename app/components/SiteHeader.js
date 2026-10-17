'use client';
import { Button } from './ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (href) =>
    `font-semibold transition-colors hover:text-brass-deep ${
      pathname === href ? 'text-brass-deep' : 'text-navy'
    }`;

  return (
    <header className='sticky top-0 z-50 shadow-sm'>
      {/* Contact bar */}
      <div className='hidden bg-quench text-xs text-white/80 md:block'>
        <div className='mx-auto flex h-9 w-full items-center justify-between px-6 md:px-8 lg:px-12'>
          <p>{site.address}</p>
          <p className='flex items-center gap-6'>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className='hover:text-brass'
            >
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className='hover:text-brass'>
              {site.email}
            </a>
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className='border-b border-plate bg-white'>
        <div className='mx-auto flex h-18 w-full l items-center justify-between px-6 md:px-8 lg:px-12 gap-6'>
          <Link
            href='/'
            className='flex items-center gap-3'
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden='true'
              className='flex h-10 w-10 items-center justify-center bg-navy font-display text-lg font-bold text-brass'
            >
              AS
            </span>
            <span className='font-display text-xl leading-none font-bold text-navy'>
              {site.name}
            </span>
          </Link>

          <nav aria-label='Main' className='hidden items-center gap-8 md:flex'>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href='/contact'
              className='rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-soft'
            >
              Get Quote
            </Link>
            <a
              href={`https://wa.me/${site.whatsappDigits}`}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-sm bg-brass px-4 py-2 text-sm font-semibold text-quench transition-colors hover:bg-[#d3ab52]'
            >
              WhatsApp
            </a>
          </nav>

          <Button
            className='flex h-10 w-10 items-center justify-center rounded-sm border border-plate text-navy md:hidden'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls='mobile-menu'
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              aria-hidden='true'
            >
              {open ? (
                <path
                  d='M4 4l12 12M16 4L4 16'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              ) : (
                <path
                  d='M3 5h14M3 10h14M3 15h14'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            id='mobile-menu'
            aria-label='Mobile'
            className='border-t border-plate bg-white md:hidden'
          >
            <ul className='mx-auto flex w-full max-w-6xl flex-col px-6 py-2'>
              {links.map((l) => (
                <li
                  key={l.href}
                  className='border-b border-plate last:border-0'
                >
                  <Link
                    href={l.href}
                    className={`block py-3 ${linkClass(l.href)}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className='flex gap-3 py-4'>
                <Link
                  href='/contact'
                  className='flex-1 rounded-sm bg-navy px-4 py-3 text-center text-sm font-semibold text-white'
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </Link>
                <a
                  href={`https://wa.me/${site.whatsappDigits}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 rounded-sm bg-brass px-4 py-3 text-center text-sm font-semibold text-quench'
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
