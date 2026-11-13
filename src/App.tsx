import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  Menu as MenuIcon,
  MessageCircle,
  Moon,
  Plus,
  Send,
  Sun,
  X,
} from 'lucide-react';
import {
  BRANCHES,
  DISHES,
  DishCategory,
  HERO_SLIDES,
  Language,
  UI_COPY,
} from './data/content';
import { DishImage } from './components/DishImage';
import { BranchesAndMap } from './components/BranchesAndMap';
import { BookingMode, BookingSection } from './components/BookingSection';
import { EasternSideOrnaments } from './components/EasternSideOrnaments';
import { KazanLogo } from './components/KazanLogo';

const CATEGORIES: DishCategory[] = [
  'all',
  'hot',
  'bakery',
  'soups',
  'salads',
  'drinks',
];

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem('faiz-theme') === 'dark';
    } catch {
      return false;
    }
  });
  const [activeCategory, setActiveCategory] = useState<DishCategory>('all');
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCHES[0].id);
  const [bookingMode, setBookingMode] = useState<BookingMode>('table');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    document.documentElement.lang =
      lang === 'kg' ? 'ky' : lang === 'en' ? 'en' : 'ru';
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      window.localStorage.setItem('faiz-theme', isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [isDark]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const filteredDishes =
    activeCategory === 'all'
      ? DISHES
      : DISHES.filter((dish) => dish.category === activeCategory);

  const handleUpdateCart = (dishId: string, delta: number) => {
    setCart((prev) => {
      const nextQty = Math.max(0, (prev[dishId] ?? 0) + delta);
      if (nextQty === 0) {
        const rest = { ...prev };
        delete rest[dishId];
        return rest;
      }
      return { ...prev, [dishId]: nextQty };
    });
  };

  const handleAddFromMenu = (dishId: string) => {
    handleUpdateCart(dishId, 1);
    setBookingMode('takeaway');
  };

  const handleClearCart = () => {
    setCart({});
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleHeroOfferClick = () => {
    setBookingMode('takeaway');
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#14100D] text-[#2B1F16] dark:text-[#F6EFE6] overflow-x-hidden transition-colors duration-200">
      <EasternSideOrnaments />

      {/* Sticky Single-Row Header — Brand & Nav grouped closer to the left edge */}
      <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 dark:bg-[#14100D]/95 backdrop-blur-md border-b border-[#EFE5D6] dark:border-[#2C221A] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12 h-16 flex items-center justify-between gap-2 sm:gap-3">
          {/* Left Group: Brand Wordmark + 4 Nav Links */}
          <div className="flex items-center gap-3 lg:gap-6 min-w-0">
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 sm:gap-2 font-display text-base sm:text-lg lg:text-2xl font-bold tracking-tight text-[#2B1F16] dark:text-[#F6EFE6] whitespace-nowrap shrink-0"
            >
              <KazanLogo className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 shrink-0" />
              <span>{UI_COPY.brand}</span>
            </a>

            <nav
              className="hidden md:flex items-center gap-3.5 lg:gap-6 text-[13px] lg:text-sm font-medium text-[#5C4A3D] dark:text-[#C5B6A6]"
              aria-label={UI_COPY.nav.ariaLabel[lang]}
            >
              <a
                href="#menu"
                className="hover:text-[#A83812] dark:hover:text-amber-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {UI_COPY.nav.menu[lang]}
              </a>
              <a
                href="#branches"
                className="hover:text-[#A83812] dark:hover:text-amber-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {UI_COPY.nav.branches[lang]}
              </a>
              <a
                href="#reviews"
                className="hover:text-[#A83812] dark:hover:text-amber-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {UI_COPY.nav.reviews[lang]}
              </a>
              <a
                href="#booking"
                className="hover:text-[#A83812] dark:hover:text-amber-400 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
              >
                {UI_COPY.nav.booking[lang]}
              </a>
            </nav>
          </div>

          {/* Right Controls: Language Switcher (RU | KG | EN) + Theme Toggle + Primary CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <div
              className="inline-flex items-center p-0.5 bg-[#EFE5D6] dark:bg-[#261D16] rounded-xl shrink-0"
              role="group"
              aria-label={UI_COPY.nav.langAriaLabel[lang]}
            >
              <button
                type="button"
                onClick={() => setLang('ru')}
                aria-pressed={lang === 'ru'}
                className={`px-2 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                  lang === 'ru'
                    ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                    : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang('kg')}
                aria-pressed={lang === 'kg'}
                className={`px-2 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                  lang === 'kg'
                    ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                    : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                }`}
              >
                KG
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                  lang === 'en'
                    ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                    : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Day / Night Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-pressed={isDark}
              aria-label={
                isDark
                  ? UI_COPY.themeToggle.toLight[lang]
                  : UI_COPY.themeToggle.toDark[lang]
              }
              title={
                isDark
                  ? UI_COPY.themeToggle.toLight[lang]
                  : UI_COPY.themeToggle.toDark[lang]
              }
              className="p-2 rounded-xl bg-[#FFFDF9] dark:bg-[#211A14] text-[#4A3A2E] dark:text-amber-400 shadow-xs hover:bg-[#EFE5D6] dark:hover:bg-[#2E231B] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <a
              href="#booking"
              className="hidden sm:inline-flex items-center justify-center px-3.5 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold bg-amber-500 text-[#2B1F16] hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              {UI_COPY.headerCta[lang]}
              {totalCartItems > 0 && (
                <span className="ml-1.5 tabular-nums text-[#7C2D12]">
                  ({totalCartItems})
                </span>
              )}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={UI_COPY.nav.openMenuAria[lang]}
              className="md:hidden p-2 rounded-xl text-[#4A3A2E] dark:text-[#F6EFE6] hover:bg-[#EFE5D6] dark:hover:bg-[#261D16] transition-colors shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EFE5D6] dark:border-[#2C221A] bg-[#FAF7F2] dark:bg-[#18130F] px-4 py-3 space-y-2 animate-warm-in">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#2B1F16] dark:text-[#F6EFE6]"
            >
              {UI_COPY.nav.menu[lang]}
            </a>
            <a
              href="#branches"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#2B1F16] dark:text-[#F6EFE6]"
            >
              {UI_COPY.nav.branches[lang]}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-[#2B1F16] dark:text-[#F6EFE6]"
            >
              {UI_COPY.nav.reviews[lang]}
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-4 text-center rounded-xl text-sm font-semibold bg-amber-500 text-[#2B1F16]"
            >
              {UI_COPY.headerCta[lang]}
            </a>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* Optimized Landscape Hero Slideshow + Strong Conversion Offer */}
        <section className="bg-[#FAF7F2] dark:bg-[#14100D] transition-colors duration-200">
          <div className="relative z-30 w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-[520px] lg:h-[600px] xl:h-[640px] overflow-hidden bg-[#211812]">
            {/* Crossfading Food Slideshow Images */}
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.label[lang]}
                  referrerPolicy="no-referrer"
                  aria-hidden={!isActive}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${
                    isActive
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-[1.02]'
                  }`}
                />
              );
            })}

            {/* Subtle Top-Left & Bottom Scrims */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#140C07]/75 via-[#140C07]/15 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#140C07]/85 via-[#140C07]/45 to-transparent"
            />

            {/* Content Overlay: Medium Top-Left Headline + Bottom Offer & Slide Controls */}
            <div className="relative z-10 h-full max-w-7xl mx-auto flex flex-col justify-between p-4 sm:p-7 md:px-9 lg:px-10 xl:px-12 lg:py-8">
              {/* Medium-sized headline in top-left corner */}
              <div className="max-w-[260px] sm:max-w-md lg:max-w-lg animate-warm-in">
                <h1 className="font-eastern text-lg sm:text-2xl lg:text-[1.85rem] font-bold text-[#FFFDF9] leading-[1.2] tracking-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
                  {UI_COPY.hero.title[lang]}
                </h1>
              </div>

              {/* Bottom Marketing Offer + Slide Controls */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <div className="inline-flex w-fit max-w-[225px] sm:max-w-none items-center gap-1.5 sm:gap-2 bg-[#1C140F]/72 border border-white/15 backdrop-blur-md text-[#FAF7F2] px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl shadow-sm">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
                    <span className="text-[10px] leading-tight sm:text-xs font-medium tracking-tight">
                      {UI_COPY.hero.offerHeadline[lang]}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleHeroOfferClick}
                    className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold bg-amber-500 text-[#2B1F16] hover:bg-amber-400 shadow-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-300"
                  >
                    {UI_COPY.hero.offerCta[lang]}
                  </button>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 shrink-0">
                  <span className="text-[11px] sm:text-xs font-medium text-[#FFF8EE]/90 truncate drop-shadow-xs">
                    {HERO_SLIDES[activeSlide].label[lang]}
                  </span>

                  <div className="hidden sm:flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePrevSlide}
                      aria-label={UI_COPY.hero.prevSlide[lang]}
                      className="w-7 h-7 rounded-lg bg-black/40 hover:bg-black/65 text-white/90 flex items-center justify-center backdrop-blur-xs transition-colors focus-visible:outline-2 focus-visible:outline-amber-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextSlide}
                      aria-label={UI_COPY.hero.nextSlide[lang]}
                      className="w-7 h-7 rounded-lg bg-black/40 hover:bg-black/65 text-white/90 flex items-center justify-center backdrop-blur-xs transition-colors focus-visible:outline-2 focus-visible:outline-amber-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div
                    className="flex items-center gap-1.5 sm:gap-2"
                    role="tablist"
                    aria-label={UI_COPY.hero.slidesAriaLabel[lang]}
                  >
                    {HERO_SLIDES.map((slide, index) => {
                      const isActive = index === activeSlide;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-label={slide.label[lang]}
                          onClick={() => setActiveSlide(index)}
                          className={`h-1.5 rounded-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-amber-300 ${
                            isActive
                              ? 'w-6 sm:w-8 bg-amber-400'
                              : 'w-3 sm:w-4 bg-white/45 hover:bg-white/80'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu & Bestsellers Section */}
        <section
          id="menu"
          className="py-16 sm:py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#14100D] transition-colors duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 lg:px-10 xl:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-8 mb-10 sm:mb-14">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wider text-[#A83812] dark:text-amber-400 mb-2">
                  {UI_COPY.menu.eyebrow[lang]}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight text-balance leading-[1.12]">
                  {UI_COPY.menu.heading[lang]}
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#5C4A3D] dark:text-[#C5B6A6]">
                  {UI_COPY.menu.subtitle[lang]}
                </p>
              </div>

              {/* Interactive Category Filter Tabs */}
              <div
                className="flex flex-wrap items-center gap-1 sm:gap-1.5 p-1 bg-[#EFE5D6] dark:bg-[#261D16] rounded-2xl self-start lg:self-auto"
                role="tablist"
                aria-label={UI_COPY.menu.eyebrow[lang]}
              >
                {CATEGORIES.map((category) => {
                  const active = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveCategory(category)}
                      className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                        active
                          ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                          : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                      }`}
                    >
                      {UI_COPY.menu.categories[category][lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dish Cards Grid (2x2 compact on mobile, rounded-2xl/3xl elevated soft shadows on desktop) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-7">
              {filteredDishes.map((dish) => {
                const qtyInCart = cart[dish.id] ?? 0;
                return (
                  <article
                    key={dish.id}
                    className="group bg-[#FFFDF9] dark:bg-[#211A14] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_10px_28px_-10px_rgba(43,31,22,0.08)] dark:shadow-[0_14px_34px_-12px_rgba(0,0,0,0.55)] hover:shadow-[0_20px_42px_-12px_rgba(43,31,22,0.16)] transition-all duration-200 hover:-translate-y-1 animate-warm-in"
                  >
                    <div>
                      <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#F3ECE1] dark:bg-[#2B221B]">
                        <DishImage
                          src={dish.image}
                          alt={dish.name[lang]}
                          fallbackTitle={dish.name[lang]}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className="p-2.5 sm:p-5 lg:p-6">
                        <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#6E5B4D] dark:text-[#B4A392] mb-1 sm:mb-2">
                          {dish.isHit && (
                            <>
                              <span className="font-semibold text-[#1F5E3B] dark:text-emerald-400">
                                {UI_COPY.menu.hitLabel[lang]}
                              </span>
                              <span aria-hidden="true">·</span>
                            </>
                          )}
                          <span className="hidden sm:inline">
                            {dish.categoryLabel[lang]}
                          </span>
                          <span className="hidden sm:inline" aria-hidden="true">
                            ·
                          </span>
                          <span className="tabular-nums">
                            {dish.weight[lang]}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight leading-snug line-clamp-2">
                          {dish.name[lang]}
                        </h3>

                        <p className="hidden sm:block mt-2 text-sm text-[#5C4A3D] dark:text-[#C5B6A6] leading-relaxed">
                          {dish.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="px-2.5 pb-2.5 pt-2 sm:px-6 sm:pb-6 sm:pt-4 border-t border-[#F4ECE0] dark:border-[#2F251D] flex items-center justify-between gap-1.5 sm:gap-4">
                      <span className="text-xs sm:text-lg font-bold text-[#2B1F16] dark:text-[#F6EFE6] tabular-nums whitespace-nowrap">
                        {dish.priceKgs} {UI_COPY.menu.currency[lang]}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleAddFromMenu(dish.id)}
                        className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400 ${
                          qtyInCart > 0
                            ? 'bg-[#A83812] dark:bg-[#C2410C] text-white hover:bg-[#8A2B0C] dark:hover:bg-[#A83812]'
                            : 'bg-[#F5ECE0] dark:bg-[#2E241C] text-[#2B1F16] dark:text-[#F6EFE6] hover:bg-[#A83812] dark:hover:bg-[#C2410C] hover:text-white'
                        }`}
                      >
                        <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                        <span className="sm:hidden">
                          {qtyInCart > 0
                            ? `${qtyInCart}`
                            : UI_COPY.menu.shortAdd[lang]}
                        </span>
                        <span className="hidden sm:inline">
                          {qtyInCart > 0
                            ? `${UI_COPY.menu.addedCount[lang]} (${qtyInCart})`
                            : UI_COPY.menu.addToOrder[lang]}
                        </span>
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Branches & Interactive Maps Section */}
        <BranchesAndMap
          lang={lang}
          selectedBranchId={selectedBranchId}
          onSelectBranch={setSelectedBranchId}
        />

        {/* Guest Reviews & Booking / Takeaway Form */}
        <BookingSection
          lang={lang}
          selectedBranchId={selectedBranchId}
          onSelectBranch={setSelectedBranchId}
          bookingMode={bookingMode}
          onChangeMode={setBookingMode}
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onClearCart={handleClearCart}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#EFE5D6] dark:border-[#2C221A] bg-[#F5EDE1] dark:bg-[#1A1410] py-14 lg:py-20 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <a
                href="#top"
                className="inline-flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-[#2B1F16] dark:text-[#F6EFE6]"
              >
                <KazanLogo className="w-8 h-8 shrink-0" />
                <span>{UI_COPY.brand}</span>
              </a>
              <p className="mt-3 text-sm text-[#5C4A3D] dark:text-[#C5B6A6] leading-relaxed max-w-sm">
                {UI_COPY.footer.tagline[lang]}
              </p>
            </div>

            {/* 3 Branches Addresses */}
            <div className="md:col-span-5">
              <h3 className="text-sm font-bold text-[#2B1F16] dark:text-[#F6EFE6] mb-4">
                {UI_COPY.footer.branchesTitle[lang]}
              </h3>
              <ul className="space-y-3 text-sm text-[#5C4A3D] dark:text-[#C5B6A6]">
                {BRANCHES.map((branch) => (
                  <li key={branch.id} className="space-y-0.5">
                    <p className="font-semibold text-[#2B1F16] dark:text-[#F6EFE6]">
                      {branch.name[lang]} · {branch.address[lang]}
                    </p>
                    <p className="text-xs text-[#6E5B4D] dark:text-[#B4A392] tabular-nums">
                      {branch.hours[lang]} ·{' '}
                      <a
                        href={branch.phoneHref}
                        className="text-[#A83812] dark:text-amber-400 hover:underline"
                      >
                        {branch.phone}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials & Contacts */}
            <div className="md:col-span-3">
              <h3 className="text-sm font-bold text-[#2B1F16] dark:text-[#F6EFE6] mb-4">
                {UI_COPY.footer.socialTitle[lang]}
              </h3>
              <div className="space-y-2.5 text-sm">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#4A3A2E] dark:text-[#D8C9B8] hover:text-[#A83812] dark:hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#A83812] dark:text-amber-400 shrink-0" />
                  <span>@faiztaom.kg</span>
                </a>
                <a
                  href="https://wa.me/996555155001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#4A3A2E] dark:text-[#D8C9B8] hover:text-[#A83812] dark:hover:text-amber-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#1F5E3B] dark:text-emerald-400 shrink-0" />
                  <span>WhatsApp · +996 555 155-001</span>
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#4A3A2E] dark:text-[#D8C9B8] hover:text-[#A83812] dark:hover:text-amber-400 transition-colors"
                >
                  <Send className="w-4 h-4 text-[#A83812] dark:text-amber-400 shrink-0" />
                  <span>Telegram · @faiztaom_bishkek</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#E2D4C0] dark:border-[#33271E] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#6E5B4D] dark:text-[#B4A392]">
            <p>{UI_COPY.footer.copyright[lang]}</p>
            <div className="flex items-center gap-5">
              <a
                href="#menu"
                className="hover:text-[#2B1F16] dark:hover:text-[#F6EFE6] transition-colors"
              >
                {UI_COPY.nav.menu[lang]}
              </a>
              <a
                href="#branches"
                className="hover:text-[#2B1F16] dark:hover:text-[#F6EFE6] transition-colors"
              >
                {UI_COPY.nav.branches[lang]}
              </a>
              <a
                href="#booking"
                className="hover:text-[#2B1F16] dark:hover:text-[#F6EFE6] transition-colors"
              >
                {UI_COPY.nav.booking[lang]}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
