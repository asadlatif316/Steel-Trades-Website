'use client';

import { MessageCircle } from 'lucide-react';
import { Button, Input, Label, Textarea } from '../components/ui';
import { site } from '@/lib/site';
import { products } from '../utils';

const selectClass =
  'h-11 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50';

function Field({ label, htmlFor, children, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

export default function QuoteForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key) => String(data.get(key) ?? '').trim();

    const details = [
      `Name: ${get('name')}`,
      get('phone') && `Phone: ${get('phone')}`,
      `Material: ${get('material')}`,
      get('quantity') && `Size and quantity: ${get('quantity')}`,
      get('details') && `Details: ${get('details')}`,
    ].filter(Boolean);

    const message = `Hello ${site.name}, I would like a quote.\n\n${details.join('\n')}`;

    window.open(
      `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <form onSubmit={handleSubmit} className='grid gap-5 sm:grid-cols-2'>
      <Field label='Your name' htmlFor='name'>
        <Input
          id='name'
          name='name'
          required
          autoComplete='name'
          className='h-11'
        />
      </Field>

      <Field label='Phone (optional)' htmlFor='phone'>
        <Input
          id='phone'
          name='phone'
          type='tel'
          autoComplete='tel'
          className='h-11'
        />
      </Field>

      <Field label='Material' htmlFor='material'>
        <select
          id='material'
          name='material'
          required
          defaultValue=''
          className={selectClass}
        >
          <option value='' disabled>
            Choose a material
          </option>
          {products.map((product) => (
            <option key={product.title} value={product.title}>
              {product.title}
            </option>
          ))}
          <option value='Other'>Other</option>
        </select>
      </Field>

      <Field label='Size and quantity' htmlFor='quantity'>
        <Input
          id='quantity'
          name='quantity'
          placeholder='For example: 20 pieces, 2 inch'
          className='h-11'
        />
      </Field>

      <Field
        label='Details (optional)'
        htmlFor='details'
        className='sm:col-span-2'
      >
        <Textarea
          id='details'
          name='details'
          rows={5}
          placeholder='Tell us about the job, the grade you need or when you need it.'
        />
      </Field>

      <div className='sm:col-span-2'>
        <Button type='submit' size='lg' className='w-full sm:w-auto'>
          <MessageCircle aria-hidden='true' />
          Send on WhatsApp
        </Button>
        <p className='mt-3 text-sm text-ink-muted'>
          This opens WhatsApp with your message ready. Nothing is sent until you
          press send there.
        </p>
      </div>
    </form>
  );
}
