import { useState } from 'react';
import {
  Clock,
  ExternalLink,
  LocateFixed,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react';
import { BRANCHES, Language, UI_COPY } from '../data/content';

type MapProvider = 'yandex' | 'google';

interface BranchesAndMapProps {
  lang: Language;
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
}

function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function BranchesAndMap({
  lang,
  selectedBranchId,
  onSelectBranch,
}: BranchesAndMapProps) {
  const [mapProvider, setMapProvider] = useState<MapProvider>('yandex');
  const [iframeLoaded, setIframeLoaded] = useState(true);
  const [locating, setLocating] = useState(false);
  const [nearestInfo, setNearestInfo] = useState<{
    branchId: string;
    distanceKm?: number;
    fallback?: boolean;
  } | null>(null);

  const activeBranch =
    BRANCHES.find((b) => b.id === selectedBranchId) ?? BRANCHES[0];

  const { lat, lng } = activeBranch.coords;
  const embedUrl =
    mapProvider === 'yandex'
      ? `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=16&pt=${lng}%2C${lat},pm2rdm`
      : `https://maps.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=16&output=embed`;

  const handleBranchFocus = (branchId: string) => {
    if (branchId !== selectedBranchId) {
      setIframeLoaded(false);
      onSelectBranch(branchId);
    }
    const mapEl = document.getElementById('interactive-map-container');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleProviderChange = (provider: MapProvider) => {
    if (provider !== mapProvider) {
      setIframeLoaded(false);
      setMapProvider(provider);
    }
  };

  const handleFindNearest = () => {
    if (!('geolocation' in navigator)) {
      setNearestInfo({ branchId: BRANCHES[0].id, fallback: true });
      handleBranchFocus(BRANCHES[0].id);
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let closest = BRANCHES[0];
        let minDistance = haversineKm(
          userLat,
          userLng,
          BRANCHES[0].coords.lat,
          BRANCHES[0].coords.lng
        );

        for (let i = 1; i < BRANCHES.length; i++) {
          const dist = haversineKm(
            userLat,
            userLng,
            BRANCHES[i].coords.lat,
            BRANCHES[i].coords.lng
          );
          if (dist < minDistance) {
            minDistance = dist;
            closest = BRANCHES[i];
          }
        }

        setLocating(false);
        setNearestInfo({
          branchId: closest.id,
          distanceKm: Math.round(minDistance * 10) / 10,
        });
        handleBranchFocus(closest.id);
      },
      () => {
        setLocating(false);
        setNearestInfo({ branchId: BRANCHES[0].id, fallback: true });
        handleBranchFocus(BRANCHES[0].id);
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
    );
  };

  const nearestBranchObj = nearestInfo
    ? BRANCHES.find((b) => b.id === nearestInfo.branchId) ?? BRANCHES[0]
    : null;

  return (
    <section
      id="branches"
      className="py-20 lg:py-28 bg-[#FFFDF9] dark:bg-[#18130F] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider text-[#A83812] dark:text-amber-400 mb-2.5">
              {UI_COPY.branches.eyebrow[lang]}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight text-balance leading-[1.12]">
              {UI_COPY.branches.heading[lang]}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5C4A3D] dark:text-[#C5B6A6] leading-relaxed">
              {UI_COPY.branches.subtitle[lang]}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
            <button
              type="button"
              onClick={handleFindNearest}
              disabled={locating}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold bg-[#1F5E3B] dark:bg-emerald-700 text-white hover:bg-[#17482D] dark:hover:bg-emerald-600 shadow-[0_12px_28px_-10px_rgba(31,94,59,0.45)] transition-all duration-200 whitespace-nowrap disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5E3B]"
            >
              <LocateFixed className="w-4 h-4 shrink-0" />
              <span>
                {locating
                  ? UI_COPY.branches.locating[lang]
                  : UI_COPY.branches.findNearest[lang]}
              </span>
            </button>

            {nearestBranchObj && (
              <p className="text-xs font-medium text-[#1F5E3B] dark:text-emerald-400 tabular-nums">
                {nearestInfo?.fallback
                  ? UI_COPY.branches.fallbackGeoStatus[lang]
                  : `${UI_COPY.branches.nearestLabel[lang]} ${nearestBranchObj.shortName[lang]} · ${nearestInfo?.distanceKm} ${UI_COPY.branches.distanceUnit[lang]}`}
              </p>
            )}
          </div>
        </div>

        {/* 3 Branch Cards (Elevated soft cards, zero hard template borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {BRANCHES.map((branch) => {
            const isSelected = branch.id === activeBranch.id;
            return (
              <article
                key={branch.id}
                className={`flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#FDF6EC] dark:bg-[#2A2018] ring-2 ring-[#A83812] dark:ring-amber-400 shadow-[0_20px_44px_-14px_rgba(168,56,18,0.18)] dark:shadow-[0_20px_44px_-14px_rgba(0,0,0,0.65)]'
                    : 'bg-[#FAF7F2] dark:bg-[#211A14] shadow-[0_10px_30px_-10px_rgba(43,31,22,0.08)] dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_40px_-12px_rgba(43,31,22,0.15)] hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#6E5B4D] dark:text-[#B4A392] mb-3">
                    <span className="font-semibold text-[#A83812] dark:text-amber-400 tabular-nums">
                      {branch.index}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{branch.hours[lang]}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight">
                    {branch.name[lang]}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-sm text-[#4A3A2E] dark:text-[#D8C9B8]">
                    <div className="flex items-start gap-2.5">
                      <MapPin
                        className="w-4 h-4 text-[#A83812] dark:text-amber-400 shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <div>
                        <p className="font-medium text-[#2B1F16] dark:text-[#F6EFE6]">
                          {branch.address[lang]}
                        </p>
                        <p className="text-xs text-[#6E5B4D] dark:text-[#B4A392] mt-0.5">
                          {branch.landmark[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock
                        className="w-4 h-4 text-[#1F5E3B] dark:text-emerald-400 shrink-0"
                        strokeWidth={1.75}
                      />
                      <span className="tabular-nums">{branch.hours[lang]}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone
                        className="w-4 h-4 text-[#A83812] dark:text-amber-400 shrink-0"
                        strokeWidth={1.75}
                      />
                      <a
                        href={branch.phoneHref}
                        className="font-medium text-[#2B1F16] dark:text-[#F6EFE6] hover:text-[#A83812] dark:hover:text-amber-400 transition-colors tabular-nums"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#EFE5D6] dark:border-[#33271E] space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleBranchFocus(branch.id)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                      isSelected
                        ? 'bg-[#A83812] dark:bg-[#C2410C] text-white hover:bg-[#8A2B0C] dark:hover:bg-[#A83812]'
                        : 'bg-[#FFFDF9] dark:bg-[#2A211A] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs hover:bg-[#F3ECE1] dark:hover:bg-[#352A21]'
                    }`}
                  >
                    <Navigation className="w-4 h-4 shrink-0" />
                    <span>
                      {isSelected
                        ? UI_COPY.branches.showingOnMap[lang]
                        : UI_COPY.branches.centerOnMap[lang]}
                    </span>
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={branch.yandexMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#2B1F16] dark:text-[#F6EFE6] bg-[#FFFDF9] dark:bg-[#2A211A] shadow-xs hover:bg-[#F3ECE1] dark:hover:bg-[#352A21] transition-colors whitespace-nowrap"
                    >
                      <span className="truncate">
                        {UI_COPY.branches.yandexProvider[lang]}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7C6858] dark:text-[#B4A392] shrink-0" />
                    </a>
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-[#2B1F16] dark:text-[#F6EFE6] bg-[#FFFDF9] dark:bg-[#2A211A] shadow-xs hover:bg-[#F3ECE1] dark:hover:bg-[#352A21] transition-colors whitespace-nowrap"
                    >
                      <span className="truncate">
                        {UI_COPY.branches.googleProvider[lang]}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#7C6858] dark:text-[#B4A392] shrink-0" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Full-Width Interactive Map Widget (Calibrated to exact Bishkek street-level coords) */}
        <div
          id="interactive-map-container"
          className="rounded-3xl bg-[#FAF7F2] dark:bg-[#211A14] shadow-[0_18px_48px_-14px_rgba(43,31,22,0.12)] dark:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Map Toolbar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 sm:p-5 bg-[#FFFDF9] dark:bg-[#1E1813]">
            {/* Branch Switcher Tabs */}
            <div
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-1.5 p-1 bg-[#F3ECE1] dark:bg-[#2B221B] rounded-2xl w-full md:w-auto min-w-0"
              role="tablist"
              aria-label={UI_COPY.branches.eyebrow[lang]}
            >
              {BRANCHES.map((branch) => {
                const active = branch.id === activeBranch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleBranchFocus(branch.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors text-left sm:text-center truncate max-w-full focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                      active
                        ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                        : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                    }`}
                  >
                    {branch.shortName[lang]}
                  </button>
                );
              })}
            </div>

            {/* Map Provider Toggle: Яндекс Карты / Google Maps */}
            <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
              <span className="text-xs font-medium text-[#6E5B4D] dark:text-[#B4A392] whitespace-nowrap">
                {UI_COPY.branches.mapProviderLabel[lang]}
              </span>
              <div className="inline-flex items-center p-1 bg-[#F3ECE1] dark:bg-[#2B221B] rounded-xl">
                <button
                  type="button"
                  onClick={() => handleProviderChange('yandex')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                    mapProvider === 'yandex'
                      ? 'bg-[#A83812] dark:bg-[#C2410C] text-white'
                      : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                  }`}
                >
                  {UI_COPY.branches.yandexProvider[lang]}
                </button>
                <button
                  type="button"
                  onClick={() => handleProviderChange('google')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                    mapProvider === 'google'
                      ? 'bg-[#A83812] dark:bg-[#C2410C] text-white'
                      : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                  }`}
                >
                  {UI_COPY.branches.googleProvider[lang]}
                </button>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Map (450px on desktop, comfortable height on mobile) */}
          <div className="relative w-full h-[340px] sm:h-[400px] md:h-[450px] bg-[#F3ECE1] dark:bg-[#14100D]">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#FAF7F2]/85 dark:bg-[#14100D]/85 z-10 pointer-events-none">
                <span className="text-sm font-medium text-[#5C4A3D] dark:text-[#C5B6A6] px-4 text-center">
                  {activeBranch.address[lang]}
                </span>
              </div>
            )}
            <iframe
              key={`${mapProvider}-${activeBranch.id}`}
              src={embedUrl}
              title={`${activeBranch.name[lang]} — ${
                mapProvider === 'yandex'
                  ? UI_COPY.branches.yandexProvider[lang]
                  : UI_COPY.branches.googleProvider[lang]
              }`}
              className="w-full h-full border-0 block"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>

          {/* Active Branch Caption Footer Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 py-3.5 bg-[#FFFDF9] dark:bg-[#1E1813] text-xs sm:text-sm text-[#5C4A3D] dark:text-[#C5B6A6]">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-semibold text-[#2B1F16] dark:text-[#F6EFE6]">
                {activeBranch.name[lang]}
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeBranch.address[lang]}</span>
              <span aria-hidden="true">·</span>
              <span>{activeBranch.landmark[lang]}</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={activeBranch.yandexMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#A83812] dark:text-amber-400 hover:underline whitespace-nowrap"
              >
                {UI_COPY.branches.openYandex[lang]}
              </a>
              <a
                href={activeBranch.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#A83812] dark:text-amber-400 hover:underline whitespace-nowrap"
              >
                {UI_COPY.branches.openGoogle[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
