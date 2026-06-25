/**
 * Прищепка — предмет (бренд парка). Жёлтые деревянные ножки + настоящая
 * металлическая пружина с витком и проволочными лапками, объём и блики.
 * Размер задаётся через className (по высоте).
 */
export function ClothesPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 240"
      className={className}
      role="img"
      aria-label="Прищепка"
    >
      <defs>
        <linearGradient id="pinWood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0A8" />
          <stop offset="40%" stopColor="#FFD23F" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="pinWoodR" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE27A" />
          <stop offset="55%" stopColor="#FBC02D" />
          <stop offset="100%" stopColor="#E8900A" />
        </linearGradient>
        <radialGradient id="pinCoil" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="55%" stopColor="#AEB7C2" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
        <filter id="pinShadow" x="-30%" y="-20%" width="160%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0B2545" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#pinShadow)">
        {/* Левая ножка */}
        <g transform="rotate(-5 70 92)">
          <rect x="38" y="14" width="31" height="214" rx="15" fill="url(#pinWood)" />
          {/* тёмная внутренняя грань для объёма */}
          <rect x="60" y="18" width="9" height="206" rx="4" fill="#B9740A" opacity="0.35" />
          {/* блик */}
          <rect x="44" y="22" width="7" height="198" rx="3.5" fill="#FFFFFF" opacity="0.5" />
        </g>

        {/* Правая ножка */}
        <g transform="rotate(5 70 92)">
          <rect x="71" y="14" width="31" height="214" rx="15" fill="url(#pinWoodR)" />
          <rect x="71" y="18" width="9" height="206" rx="4" fill="#FFFFFF" opacity="0.28" />
          <rect x="90" y="22" width="6" height="198" rx="3" fill="#B9740A" opacity="0.3" />
        </g>

        {/* Проволочные лапки пружины, прижимающие челюсти */}
        <path d="M62 92 L54 30" fill="none" stroke="#5B6470" strokeWidth="5" strokeLinecap="round" />
        <path d="M62 92 L54 30" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" />
        <path d="M78 92 L86 30" fill="none" stroke="#5B6470" strokeWidth="5" strokeLinecap="round" />
        <path d="M78 92 L86 30" fill="none" stroke="#9AA3AF" strokeWidth="2" strokeLinecap="round" />

        {/* Виток пружины */}
        <circle cx="70" cy="92" r="17" fill="url(#pinCoil)" stroke="#5B6470" strokeWidth="2" />
        <circle cx="70" cy="92" r="11" fill="none" stroke="#6B7280" strokeWidth="2.5" />
        <circle cx="70" cy="92" r="5.5" fill="#475569" />
        <circle cx="66.5" cy="88.5" r="2.4" fill="#E2E8F0" />
      </g>
    </svg>
  );
}
