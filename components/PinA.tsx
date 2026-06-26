/**
 * Красная прищепка в форме буквы «А»: две деревянные ножки расходятся книзу
 * (ноги буквы) и сходятся остриём вверх, а стальная пружина-перекладина
 * пересекает их посередине — как поперечина у «А». Используется только в
 * логотипе хедера вместо последней буквы при наведении.
 *
 * Размер задаётся через className (по высоте). Остриё всегда смотрит вверх.
 */
export function PinA({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 150"
      className={className}
      role="img"
      aria-label="Прищепка в форме буквы А"
    >
      <defs>
        {/* красное «дерево» — свет на внешней грани, тень на внутренней */}
        <linearGradient id="aRedL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFAEB2" />
          <stop offset="45%" stopColor="#FF5666" />
          <stop offset="100%" stopColor="#C71D33" />
        </linearGradient>
        <linearGradient id="aRedR" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#FFAEB2" />
          <stop offset="45%" stopColor="#FF5666" />
          <stop offset="100%" stopColor="#C71D33" />
        </linearGradient>
        <linearGradient id="aSteel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="50%" stopColor="#B9C2CE" />
          <stop offset="100%" stopColor="#6B7480" />
        </linearGradient>
        <radialGradient id="aCoil" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="55%" stopColor="#AEB7C2" />
          <stop offset="100%" stopColor="#6B7280" />
        </radialGradient>
        <filter id="aShadow" x="-30%" y="-15%" width="160%" height="135%">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0B2545" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#aShadow)" strokeLinejoin="round">
        {/* Левая нога */}
        <polygon
          points="48.3,11.2 71.7,16.8 41.7,140.8 18.3,135.2"
          fill="url(#aRedL)"
          stroke="#A8172B"
          strokeWidth="2"
        />
        {/* Правая нога */}
        <polygon
          points="71.7,11.2 48.3,16.8 78.3,140.8 101.7,135.2"
          fill="url(#aRedR)"
          stroke="#A8172B"
          strokeWidth="2"
        />

        {/* Блик по внешней грани + тёмный шов по внутренней — объём */}
        <path d="M52.2 12.1 L22.2 136.1" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M67.8 15.9 L37.8 139.9" stroke="#7E0F1F" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M67.8 12.1 L97.8 136.1" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M52.2 15.9 L82.2 139.9" stroke="#7E0F1F" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />

        {/* Стальная пружина-перекладина (поперечина буквы А) */}
        <rect x="34" y="78" width="52" height="12" rx="6" fill="url(#aSteel)" stroke="#5B6470" strokeWidth="1.6" />
        <rect x="38" y="80.5" width="44" height="3" rx="1.5" fill="#FFFFFF" opacity="0.55" />

        {/* Виток пружины по центру */}
        <circle cx="60" cy="84" r="13" fill="url(#aCoil)" stroke="#5B6470" strokeWidth="2" />
        <circle cx="60" cy="84" r="8" fill="none" stroke="#6B7280" strokeWidth="2.2" />
        <circle cx="60" cy="84" r="4" fill="#475569" />
        <circle cx="57" cy="81" r="1.9" fill="#E2E8F0" />
      </g>
    </svg>
  );
}
