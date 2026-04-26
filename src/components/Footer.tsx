import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🔑</span>
              <span className="text-white font-bold text-lg">
                arlington247<span className="text-red-500">lockrepair</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              24/7 emergency locksmith service across Arlington County.
              Licensed, insured, and ready to help any time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/services/emergency-exit-doors" className="hover:text-white transition-colors">
                  Emergency Exit Doors
                </Link>
              </li>
              <li>
                <Link href="/services/door-hardware-replacement" className="hover:text-white transition-colors">
                  Door Hardware Replacements
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-storefront-lockout" className="hover:text-white transition-colors">
                  Office / Storefront Lockout
                </Link>
              </li>
              <li>
                <Link href="/services/key-extraction-lock-repair" className="hover:text-white transition-colors">
                  Key Stuck / Extraction
                </Link>
              </li>
              <li>Commercial Lock Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+17032440559"
                  className="text-amber-400 font-bold text-base hover:text-amber-300"
                >
                  (703) 244-0559
                </a>
              </li>
              <li>Arlington, VA 22201</li>
              <li>
                <span className="text-green-400 font-medium">
                  Open 24/7 — Every Day
                </span>
              </li>
              <li>License #VA-LOCK-2847</li>
            </ul>

            <div className="mt-4 rounded-xl border border-gray-800 bg-gray-950/40 p-3 text-xs leading-relaxed">
              <p className="text-white font-semibold">Arlington247 Lock Repair</p>
              <p>Service Area: Arlington, VA 22201</p>
              <p>
                Phone:{" "}
                <a href="tel:+17032440559" className="text-amber-400 font-semibold hover:text-amber-300">
                  (703) 244-0559
                </a>
              </p>
              <p className="text-green-400">Available 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {year} arlington247lockrepair. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
