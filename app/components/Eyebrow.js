export default function Eyebrow({ children, light = false }) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-semibold uppercase ${
        light ? 'text-white' : 'text-navy'
      }`}
    >
      <span className='size-1.5 rounded-full bg-brass' aria-hidden='true' />
      {children}
    </p>
  );
}
