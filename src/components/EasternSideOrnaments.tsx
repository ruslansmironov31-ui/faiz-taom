const ORNAMENT_LIGHT_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="160" viewBox="0 0 80 160">
  <rect width="80" height="160" fill="#F4E7D3"/>
  <rect x="0" y="0" width="4" height="160" fill="#9A3412" fill-opacity="0.35"/>
  <rect x="76" y="0" width="4" height="160" fill="#9A3412" fill-opacity="0.35"/>
  <line x1="9" y1="0" x2="9" y2="160" stroke="#B45309" stroke-width="1.5" stroke-opacity="0.65"/>
  <line x1="71" y1="0" x2="71" y2="160" stroke="#B45309" stroke-width="1.5" stroke-opacity="0.65"/>
  <g transform="translate(40,40)">
    <rect x="-18" y="-18" width="36" height="36" fill="#D97706" fill-opacity="0.20" stroke="#9A3412" stroke-width="1.8"/>
    <rect x="-18" y="-18" width="36" height="36" transform="rotate(45)" fill="#B45309" fill-opacity="0.18" stroke="#9A3412" stroke-width="1.8"/>
    <circle cx="0" cy="0" r="8" fill="#FFF8EE" stroke="#9A3412" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="3.5" fill="#9A3412"/>
  </g>
  <path d="M40 72 L56 80 L40 88 L24 80 Z" fill="#D97706" fill-opacity="0.35" stroke="#9A3412" stroke-width="1.5"/>
  <g stroke="#9A3412" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 94 C22 94 14 106 20 118 C24 126 33 122 30 113 C28 108 22 110 23 115"/>
    <path d="M40 94 C58 94 66 106 60 118 C56 126 47 122 50 113 C52 108 58 110 57 115"/>
    <path d="M40 152 C22 152 14 140 20 128 C24 120 33 124 30 133 C28 138 22 136 23 131"/>
    <path d="M40 152 C58 152 66 140 60 128 C56 120 47 124 50 133 C52 138 58 136 57 131"/>
  </g>
  <circle cx="40" cy="123" r="6" fill="#D97706" fill-opacity="0.45" stroke="#9A3412" stroke-width="1.5"/>
  <circle cx="40" cy="123" r="2.5" fill="#9A3412"/>
  <path d="M13 78 L18 80 L13 82 Z" fill="#9A3412"/>
  <path d="M67 78 L62 80 L67 82 Z" fill="#9A3412"/>
  <path d="M40 0 L45 8 L40 16 L35 8 Z" fill="#B45309" fill-opacity="0.55"/>
  <path d="M40 144 L45 152 L40 160 L35 152 Z" fill="#B45309" fill-opacity="0.55"/>
</svg>
`);

const ORNAMENT_DARK_SVG = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="160" viewBox="0 0 80 160">
  <rect width="80" height="160" fill="#1E1712"/>
  <rect x="0" y="0" width="4" height="160" fill="#D97706" fill-opacity="0.28"/>
  <rect x="76" y="0" width="4" height="160" fill="#D97706" fill-opacity="0.28"/>
  <line x1="9" y1="0" x2="9" y2="160" stroke="#D97706" stroke-width="1.5" stroke-opacity="0.45"/>
  <line x1="71" y1="0" x2="71" y2="160" stroke="#D97706" stroke-width="1.5" stroke-opacity="0.45"/>
  <g transform="translate(40,40)">
    <rect x="-18" y="-18" width="36" height="36" fill="#D97706" fill-opacity="0.16" stroke="#F59E0B" stroke-opacity="0.7" stroke-width="1.8"/>
    <rect x="-18" y="-18" width="36" height="36" transform="rotate(45)" fill="#B45309" fill-opacity="0.18" stroke="#F59E0B" stroke-opacity="0.7" stroke-width="1.8"/>
    <circle cx="0" cy="0" r="8" fill="#2A2019" stroke="#F59E0B" stroke-opacity="0.8" stroke-width="1.6"/>
    <circle cx="0" cy="0" r="3.5" fill="#F59E0B" fill-opacity="0.85"/>
  </g>
  <path d="M40 72 L56 80 L40 88 L24 80 Z" fill="#D97706" fill-opacity="0.25" stroke="#F59E0B" stroke-opacity="0.7" stroke-width="1.5"/>
  <g stroke="#F59E0B" stroke-opacity="0.65" stroke-width="2.1" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 94 C22 94 14 106 20 118 C24 126 33 122 30 113 C28 108 22 110 23 115"/>
    <path d="M40 94 C58 94 66 106 60 118 C56 126 47 122 50 113 C52 108 58 110 57 115"/>
    <path d="M40 152 C22 152 14 140 20 128 C24 120 33 124 30 133 C28 138 22 136 23 131"/>
    <path d="M40 152 C58 152 66 140 60 128 C56 120 47 124 50 133 C52 138 58 136 57 131"/>
  </g>
  <circle cx="40" cy="123" r="6" fill="#D97706" fill-opacity="0.3" stroke="#F59E0B" stroke-opacity="0.75" stroke-width="1.5"/>
  <circle cx="40" cy="123" r="2.5" fill="#F59E0B" fill-opacity="0.85"/>
  <path d="M13 78 L18 80 L13 82 Z" fill="#F59E0B" fill-opacity="0.75"/>
  <path d="M67 78 L62 80 L67 82 Z" fill="#F59E0B" fill-opacity="0.75"/>
  <path d="M40 0 L45 8 L40 16 L35 8 Z" fill="#F59E0B" fill-opacity="0.45"/>
  <path d="M40 144 L45 152 L40 160 L35 152 Z" fill="#F59E0B" fill-opacity="0.45"/>
</svg>
`);

const lightOrnamentStyle = {
  backgroundImage: `url("data:image/svg+xml,${ORNAMENT_LIGHT_SVG}")`,
  backgroundRepeat: 'repeat-y',
  backgroundSize: '100% auto',
  backgroundPosition: 'top center',
} as const;

const darkOrnamentStyle = {
  backgroundImage: `url("data:image/svg+xml,${ORNAMENT_DARK_SVG}")`,
  backgroundRepeat: 'repeat-y',
  backgroundSize: '100% auto',
  backgroundPosition: 'top center',
} as const;

export function EasternSideOrnaments() {
  return (
    <>
      {/* Light mode desktop/tablet eastern side ornaments (hidden on mobile <768px) */}
      <div
        aria-hidden="true"
        style={lightOrnamentStyle}
        className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden md:block dark:hidden md:w-5 lg:w-6 xl:w-8 2xl:w-10 border-r border-[#D6C2A7]"
      />
      <div
        aria-hidden="true"
        style={lightOrnamentStyle}
        className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden md:block dark:hidden md:w-5 lg:w-6 xl:w-8 2xl:w-10 border-l border-[#D6C2A7]"
      />

      {/* Dark mode desktop/tablet eastern side ornaments (hidden on mobile <768px) */}
      <div
        aria-hidden="true"
        style={darkOrnamentStyle}
        className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden dark:md:block md:w-5 lg:w-6 xl:w-8 2xl:w-10 border-r border-[#3A2E25]"
      />
      <div
        aria-hidden="true"
        style={darkOrnamentStyle}
        className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden dark:md:block md:w-5 lg:w-6 xl:w-8 2xl:w-10 border-l border-[#3A2E25]"
      />
    </>
  );
}
