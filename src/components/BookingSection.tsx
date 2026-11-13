import { FormEvent, useState } from 'react';
import { CheckCircle2, Minus, Plus, ShieldCheck, Star } from 'lucide-react';
import {
  BRANCHES,
  DISHES,
  Language,
  REVIEWS,
  UI_COPY,
} from '../data/content';

export type BookingMode = 'table' | 'takeaway';

interface BookingSectionProps {
  lang: Language;
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  bookingMode: BookingMode;
  onChangeMode: (mode: BookingMode) => void;
  cart: Record<string, number>;
  onUpdateCart: (dishId: string, delta: number) => void;
  onClearCart: () => void;
}

export function BookingSection({
  lang,
  selectedBranchId,
  onSelectBranch,
  bookingMode,
  onChangeMode,
  cart,
  onUpdateCart,
  onClearCart,
}: BookingSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitTime, setVisitTime] = useState('13:00');
  const [guests, setGuests] = useState('4');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<{
    code: string;
    mode: BookingMode;
    branchName: string;
    branchAddress: string;
    total: number;
  } | null>(null);

  const selectedDishes = DISHES.filter((d) => (cart[d.id] ?? 0) > 0);
  const rawCartTotal = selectedDishes.reduce(
    (sum, dish) => sum + dish.priceKgs * (cart[dish.id] ?? 0),
    0
  );
  const discountedCartTotal = Math.round(rawCartTotal * 0.9);

  const activeBranch =
    BRANCHES.find((b) => b.id === selectedBranchId) ?? BRANCHES[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(UI_COPY.booking.errorName[lang]);
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 9) {
      setError(UI_COPY.booking.errorPhone[lang]);
      return;
    }

    if (bookingMode === 'takeaway' && selectedDishes.length === 0) {
      setError(UI_COPY.booking.errorDishes[lang]);
      return;
    }

    const code = `FT-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef({
      code,
      mode: bookingMode,
      branchName: activeBranch.name[lang],
      branchAddress: activeBranch.address[lang],
      total: discountedCartTotal,
    });
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setError(null);
    setComment('');
    if (bookingMode === 'takeaway') {
      onClearCart();
    }
  };

  return (
    <>
      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#14100D] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-[#A83812] dark:text-amber-400 mb-2.5">
                {UI_COPY.reviews.eyebrow[lang]}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight text-balance leading-[1.12]">
                {UI_COPY.reviews.heading[lang]}
              </h2>
            </div>

            {/* Social Proof Plaque */}
            <div className="flex items-center gap-3.5 bg-[#FFFDF9] dark:bg-[#211A14] rounded-2xl px-5 py-3.5 shadow-[0_10px_28px_-10px_rgba(43,31,22,0.09)] dark:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.55)] self-start lg:self-auto">
              <div className="flex items-center gap-1 text-amber-500 shrink-0">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-lg font-bold text-[#2B1F16] dark:text-[#F6EFE6] tabular-nums">
                  {UI_COPY.reviews.socialProofScore}
                </span>
              </div>
              <div className="h-6 w-px bg-[#E7DDD0] dark:bg-[#3A2E25] shrink-0" />
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4A3A2E] dark:text-[#D8C9B8]">
                <ShieldCheck className="w-4 h-4 text-[#1F5E3B] dark:text-emerald-400 shrink-0" />
                <span>{UI_COPY.reviews.socialProofText[lang]}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
            {REVIEWS.map((review) => (
              <article
                key={review.id}
                className="flex flex-col justify-between bg-[#FFFDF9] dark:bg-[#211A14] rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_-10px_rgba(43,31,22,0.08)] dark:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_38px_-12px_rgba(43,31,22,0.14)] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#6E5B4D] dark:text-[#B4A392] mb-4">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#A83812] dark:text-amber-400 tabular-nums">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {review.rating}
                    </span>
                    <span>{review.date[lang]}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#4A3A2E] dark:text-[#D8C9B8] leading-relaxed">
                    «{review.text[lang]}»
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1E8DA] dark:border-[#33271E]">
                  <p className="text-sm font-bold text-[#2B1F16] dark:text-[#F6EFE6]">
                    {review.author}
                  </p>
                  <p className="text-xs text-[#6E5B4D] dark:text-[#B4A392] mt-1">
                    {review.branch[lang]} · {review.dish[lang]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Booking & Takeaway Form Section */}
      <section
        id="booking"
        className="py-20 lg:py-28 bg-[#FFFDF9] dark:bg-[#18130F] transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 lg:px-10 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Copy & Branch Summary */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-wider text-[#A83812] dark:text-amber-400 mb-2.5">
                {UI_COPY.booking.eyebrow[lang]}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] tracking-tight text-balance leading-[1.12]">
                {UI_COPY.booking.heading[lang]}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5C4A3D] dark:text-[#C5B6A6] leading-relaxed">
                {UI_COPY.booking.subtitle[lang]}
              </p>

              <div className="mt-8 border-t border-[#EFE5D6] dark:border-[#33271E] pt-6 space-y-4">
                {BRANCHES.map((branch) => (
                  <div
                    key={branch.id}
                    className="flex items-start justify-between gap-4 text-sm"
                  >
                    <div>
                      <p className="font-semibold text-[#2B1F16] dark:text-[#F6EFE6]">
                        {branch.name[lang]}
                      </p>
                      <p className="text-[#5C4A3D] dark:text-[#C5B6A6]">
                        {branch.address[lang]}
                      </p>
                    </div>
                    <a
                      href={branch.phoneHref}
                      className="font-medium text-[#A83812] dark:text-amber-400 hover:underline whitespace-nowrap shrink-0 tabular-nums"
                    >
                      {branch.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAF7F2] dark:bg-[#211A14] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_18px_48px_-14px_rgba(43,31,22,0.12)] dark:shadow-[0_20px_50px_-14px_rgba(0,0,0,0.65)]">
                {submittedRef ? (
                  <div className="py-6 space-y-5 animate-warm-in">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-7 h-7 text-[#1F5E3B] dark:text-emerald-400 shrink-0 mt-0.5"
                        strokeWidth={1.75}
                      />
                      <div>
                        <p className="text-xs font-semibold text-[#A83812] dark:text-amber-400 tabular-nums">
                          #{submittedRef.code}
                        </p>
                        <h3 className="text-2xl font-bold text-[#2B1F16] dark:text-[#F6EFE6] mt-1">
                          {submittedRef.mode === 'table'
                            ? UI_COPY.booking.successTitleTable[lang]
                            : UI_COPY.booking.successTitleTakeaway[lang]}
                        </h3>
                        <p className="text-sm text-[#5C4A3D] dark:text-[#C5B6A6] mt-2">
                          {submittedRef.branchName} · {submittedRef.branchAddress}
                        </p>
                        {submittedRef.mode === 'takeaway' &&
                          submittedRef.total > 0 && (
                            <p className="text-sm font-semibold text-[#1F5E3B] dark:text-emerald-400 mt-1 tabular-nums">
                              {UI_COPY.booking.totalLabel[lang]}{' '}
                              {submittedRef.total} {UI_COPY.menu.currency[lang]}
                            </p>
                          )}
                        <p className="text-sm text-[#5C4A3D] dark:text-[#C5B6A6] mt-3">
                          {UI_COPY.booking.successNote[lang]}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 rounded-2xl text-sm font-semibold bg-[#A83812] dark:bg-[#C2410C] text-white hover:bg-[#8A2B0C] dark:hover:bg-[#A83812] transition-colors"
                    >
                      {UI_COPY.booking.newRequest[lang]}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Mode Switcher */}
                    <div className="grid grid-cols-2 gap-1.5 p-1 bg-[#EFE5D6] dark:bg-[#2B221B] rounded-2xl">
                      <button
                        type="button"
                        onClick={() => {
                          onChangeMode('table');
                          setError(null);
                        }}
                        className={`py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors truncate ${
                          bookingMode === 'table'
                            ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                            : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                        }`}
                      >
                        {UI_COPY.booking.modeTable[lang]}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeMode('takeaway');
                          setError(null);
                        }}
                        className={`py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors truncate ${
                          bookingMode === 'takeaway'
                            ? 'bg-[#FFFDF9] dark:bg-[#3A2D23] text-[#2B1F16] dark:text-[#F6EFE6] shadow-xs'
                            : 'text-[#5C4A3D] dark:text-[#C5B6A6] hover:text-[#2B1F16] dark:hover:text-[#F6EFE6]'
                        }`}
                      >
                        {UI_COPY.booking.modeTakeaway[lang]}
                        {selectedDishes.length > 0 && (
                          <span className="ml-1.5 tabular-nums text-[#1F5E3B] dark:text-emerald-400">
                            (
                            {Object.values(cart).reduce(
                              (sum, qty) => sum + qty,
                              0
                            )}
                            )
                          </span>
                        )}
                      </button>
                    </div>

                    {/* Branch Selector */}
                    <div>
                      <label
                        htmlFor="booking-branch"
                        className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                      >
                        {UI_COPY.booking.branchLabel[lang]}
                      </label>
                      <select
                        id="booking-branch"
                        value={selectedBranchId}
                        onChange={(e) => onSelectBranch(e.target.value)}
                        className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20"
                      >
                        {BRANCHES.map((branch) => (
                          <option key={branch.id} value={branch.id}>
                            {branch.name[lang]} — {branch.address[lang]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Takeaway Dish Picker */}
                    {bookingMode === 'takeaway' && (
                      <div className="rounded-2xl bg-[#FFFDF9] dark:bg-[#18130F] p-4 sm:p-5 space-y-3 shadow-xs">
                        <p className="text-xs font-semibold text-[#4A3A2E] dark:text-[#D8C9B8]">
                          {selectedDishes.length > 0
                            ? UI_COPY.booking.dishesLabel[lang]
                            : UI_COPY.booking.emptyCartHint[lang]}
                        </p>

                        <div className="divide-y divide-[#F1E8DA] dark:divide-[#2F251D]">
                          {(selectedDishes.length > 0
                            ? selectedDishes
                            : DISHES.slice(0, 4)
                          ).map((dish) => {
                            const qty = cart[dish.id] ?? 0;
                            return (
                              <div
                                key={dish.id}
                                className="flex items-center justify-between gap-3 py-2.5 first:pt-1 last:pb-1"
                              >
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-[#2B1F16] dark:text-[#F6EFE6] truncate">
                                    {dish.name[lang]}
                                  </p>
                                  <p className="text-xs text-[#6E5B4D] dark:text-[#B4A392] tabular-nums">
                                    {dish.priceKgs} {UI_COPY.menu.currency[lang]} ·{' '}
                                    {dish.weight[lang]}
                                  </p>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  <button
                                    type="button"
                                    onClick={() => onUpdateCart(dish.id, -1)}
                                    disabled={qty === 0}
                                    aria-label={`${UI_COPY.booking.decreaseItem[lang]} ${dish.name[lang]}`}
                                    className="w-8 h-8 rounded-xl bg-[#FAF7F2] dark:bg-[#241C16] flex items-center justify-center text-[#2B1F16] dark:text-[#F6EFE6] hover:bg-[#EFE5D6] dark:hover:bg-[#33271E] disabled:opacity-40 transition-colors"
                                  >
                                    <Minus className="w-3.5 h-3.5" />
                                  </button>
                                  <span className="w-5 text-center text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] tabular-nums">
                                    {qty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => onUpdateCart(dish.id, 1)}
                                    aria-label={`${UI_COPY.booking.increaseItem[lang]} ${dish.name[lang]}`}
                                    className="w-8 h-8 rounded-xl bg-[#FAF7F2] dark:bg-[#241C16] flex items-center justify-center text-[#2B1F16] dark:text-[#F6EFE6] hover:bg-[#EFE5D6] dark:hover:bg-[#33271E] transition-colors"
                                  >
                                    <Plus className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {rawCartTotal > 0 && (
                          <div className="pt-3 border-t border-[#EFE5D6] dark:border-[#2F251D] flex items-center justify-between text-sm font-bold text-[#2B1F16] dark:text-[#F6EFE6] tabular-nums">
                            <span>{UI_COPY.booking.totalLabel[lang]}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium line-through text-[#8C7B6B]">
                                {rawCartTotal} {UI_COPY.menu.currency[lang]}
                              </span>
                              <span className="text-[#1F5E3B] dark:text-emerald-400">
                                {discountedCartTotal} {UI_COPY.menu.currency[lang]}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                        >
                          {UI_COPY.booking.nameLabel[lang]}
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={UI_COPY.booking.namePlaceholder[lang]}
                          className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] placeholder:text-[#9C8B7A] dark:placeholder:text-[#7D6E60] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="booking-phone"
                          className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                        >
                          {UI_COPY.booking.phoneLabel[lang]}
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={UI_COPY.booking.phonePlaceholder[lang]}
                          className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] placeholder:text-[#9C8B7A] dark:placeholder:text-[#7D6E60] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20 tabular-nums"
                        />
                      </div>
                    </div>

                    {/* Time & Guest Count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="booking-time"
                          className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                        >
                          {UI_COPY.booking.timeLabel[lang]}
                        </label>
                        <input
                          id="booking-time"
                          type="time"
                          min="08:00"
                          max="22:45"
                          value={visitTime}
                          onChange={(e) => setVisitTime(e.target.value)}
                          className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] dark:[color-scheme:dark] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20 tabular-nums"
                        />
                      </div>

                      {bookingMode === 'table' && (
                        <div>
                          <label
                            htmlFor="booking-guests"
                            className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                          >
                            {UI_COPY.booking.guestsLabel[lang]}
                          </label>
                          <select
                            id="booking-guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20 tabular-nums"
                          >
                            {['1', '2', '3', '4', '5', '6', '8', '10+'].map(
                              (count) => (
                                <option key={count} value={count}>
                                  {count}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Comment */}
                    <div>
                      <label
                        htmlFor="booking-comment"
                        className="block text-sm font-semibold text-[#2B1F16] dark:text-[#F6EFE6] mb-2"
                      >
                        {UI_COPY.booking.commentLabel[lang]}
                      </label>
                      <input
                        id="booking-comment"
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder={UI_COPY.booking.commentPlaceholder[lang]}
                        className="w-full rounded-2xl border border-[#E2D4C0] dark:border-[#46382D] bg-[#FFFDF9] dark:bg-[#14100D] px-4 py-3 text-sm text-[#2B1F16] dark:text-[#F6EFE6] placeholder:text-[#9C8B7A] dark:placeholder:text-[#7D6E60] focus:border-[#A83812] dark:focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-[#A83812]/20 dark:focus:ring-amber-500/20"
                      />
                    </div>

                    {error && (
                      <p
                        role="alert"
                        className="text-sm font-medium text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-950/60 rounded-2xl px-4 py-3"
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-2xl text-sm font-semibold bg-[#A83812] dark:bg-[#C2410C] text-white hover:bg-[#8A2B0C] dark:hover:bg-[#A83812] shadow-[0_12px_28px_-10px_rgba(168,56,18,0.45)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A83812] dark:focus-visible:outline-amber-400"
                    >
                      {bookingMode === 'table'
                        ? UI_COPY.booking.submitTable[lang]
                        : UI_COPY.booking.submitTakeaway[lang]}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
