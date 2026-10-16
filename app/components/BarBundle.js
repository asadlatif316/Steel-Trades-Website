// An end-on view of a hex-packed bundle of round steel bars, the way bars look stacked in a yard.

const R = 34;
const DX = 74;
const DY = DX * 0.866;
const ROWS = [3, 4, 5, 4, 3];

const bars = ROWS.flatMap((count, row) =>
  Array.from({ length: count }, (_, i) => ({
    x: 210 + (i - (count - 1) / 2) * DX,
    y: 210 + (row - 2) * DY,
  }))
);

export default function BarBundle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 420"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="bar-rim" cx="35%" cy="30%" r="85%">
          <stop offset="0%" stopColor="#c9d3dd" />
          <stop offset="55%" stopColor="#7f8d9c" />
          <stop offset="100%" stopColor="#3b4958" />
        </radialGradient>
        <radialGradient id="bar-face" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#dde4eb" />
          <stop offset="60%" stopColor="#97a5b4" />
          <stop offset="100%" stopColor="#5d6b7a" />
        </radialGradient>
      </defs>
      {bars.map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={R} fill="url(#bar-rim)" stroke="#1f2c3a" strokeWidth="1.5" />
          <circle cx={b.x} cy={b.y} r={R - 9} fill="url(#bar-face)" />
          <circle
            cx={b.x}
            cy={b.y}
            r={R - 9}
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        </g>
      ))}
    </svg>
  );
}
