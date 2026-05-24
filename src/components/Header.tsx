import CopyPhoneButton from "@/components/CopyPhoneButton";
import CallLink from "@/components/CallLink";
import SocialLinks from "@/components/SocialLinks";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-900 shadow-lg" aria-label="Site header">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between gap-3">
            <div className="min-w-0 flex items-center gap-2">
              <span className="text-xl sm:text-2xl flex-shrink-0" aria-hidden="true">
                🔑
              </span>
              <span className="truncate text-sm sm:text-xl font-bold tracking-tight text-white">
                arlington247<span className="text-red-500">lockrepair</span>
              </span>
            </div>

            <div className="hidden xl:block text-center">
              <p className="text-sm font-semibold text-gray-200">
                24/7 Emergency Locksmith Arlington VA
              </p>
              <p className="text-xs text-gray-400">Call from mobile or copy this number.</p>
            </div>

            <div className="flex items-center gap-2">
              <CallLink
                label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
                location="header-main"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-3 py-2 text-sm sm:text-base font-extrabold whitespace-nowrap text-white transition-colors duration-200 hover:bg-red-700"
              />
              <CopyPhoneButton className="hidden md:inline-flex rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-xs font-semibold text-gray-200 transition-colors hover:border-amber-300 hover:text-amber-200" />
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-between pb-3">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">{BUSINESS_PHONE_DISPLAY}</span>
              <span className="mx-2 text-gray-500">•</span>
              24/7 lockout service Arlington VA
            </p>
            <SocialLinks className="flex items-center gap-2" labelClassName="hidden xl:inline" />
          </div>
        </div>
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-300 bg-gray-950/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2.5 pb-safe">
          <p className="text-[11px] leading-tight font-semibold text-amber-200">
            24/7 Arlington Locksmith — Call Now
          </p>
          <CallLink
            label={BUSINESS_PHONE_DISPLAY}
            location="mobile-sticky-call-bar"
            className="inline-flex rounded-lg bg-amber-400 px-3 py-2 text-xs font-extrabold text-gray-900"
          />
        </div>
      </div>
    </>
  );
}
