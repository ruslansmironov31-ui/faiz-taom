export function KazanLogo({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rising Steam Wisps from Ajar Lid */}
      <path
        d="M22.5 11C22.5 8.8 25 8 24.5 5.5"
        className="stroke-[#D97706] dark:stroke-amber-400"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M27.5 12C28 9.8 30.2 9.2 29.8 6.8"
        className="stroke-[#B45309] dark:stroke-amber-300"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.5 10.5C17 8.5 19 7.2 18.2 5"
        className="stroke-[#D97706] dark:stroke-amber-400"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* Slightly Ajar / Tilted Dome Lid */}
      <g transform="rotate(-11 12 20)">
        <path
          d="M9 20.5C9.8 14.8 14.5 12 20 12C25.5 12 30.2 14.8 31 20.5H9Z"
          className="fill-[#B45309]/20 dark:fill-amber-400/20 stroke-[#9A3412] dark:stroke-amber-400"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Lid Knob */}
        <circle cx="20" cy="10.2" r="2" className="fill-[#9A3412] dark:fill-amber-400" />
      </g>

      {/* Kazan Side Handles */}
      <path
        d="M8.5 22.5H6C4.9 22.5 4.5 23.4 4.8 24.4C5.1 25.4 6 25.8 7.5 25.8H9.2"
        className="stroke-[#9A3412] dark:stroke-amber-500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 22.5H34C35.1 22.5 35.5 23.4 35.2 24.4C34.9 25.4 34 25.8 32.5 25.8H30.8"
        className="stroke-[#9A3412] dark:stroke-amber-500"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Kazan Cauldron Body */}
      <path
        d="M8.5 22.5H31.5C31.2 29.8 26.5 34.5 20 34.5C13.5 34.5 8.8 29.8 8.5 22.5Z"
        className="fill-[#9A3412] stroke-[#7C2D12] dark:fill-amber-600 dark:stroke-amber-400"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Subtle Warm Rim Highlight */}
      <path
        d="M12.5 25.5C14.5 29.5 17.5 31 20.5 31"
        stroke="#FDE68A"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
