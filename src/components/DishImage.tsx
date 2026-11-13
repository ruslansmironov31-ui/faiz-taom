import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface DishImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
}

export function DishImage({ src, alt, fallbackTitle, className = '' }: DishImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FBF7F0] via-[#F6EBDC] to-[#EFE2CE] dark:from-[#261E18] dark:via-[#211A14] dark:to-[#18120E] text-[#5C4A3D] dark:text-[#C5B6A6] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-7 h-7 text-[#9A3412]/75 dark:text-amber-400/80 mb-2" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[#2B1F16] dark:text-[#F6EFE6] max-w-[18ch]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
