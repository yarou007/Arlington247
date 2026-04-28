import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  // NAP (Name, Address, Phone) - Critical for Local SEO
  const businessName = "Arlington247 Lock Repair";
  const businessPhone = "(703) 244-0559";
  const businessPhoneLink = "+17032440559";
  const businessAddress = "Arlington, VA 22201";
  const licenseNumber = "VA-LOCK-2847";

  return (
    <footer className="bg-gray-900 text-gray-400 py-12" itemScope itemType="https://schema.org/Locksmith">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand & NAP */}
          <div itemProp="name" className="hidden">
            {businessName}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔑</span>
              <span className="text-white font-bold text-xl">
                arlington247<span className="text-red-500">lockrepair</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              24/7 emergency locksmith service across Arlington County. 
              Licensed, insured, and ready to help any time.
            </p>
            
            {/* NAP Block for Local SEO */}
            <div className="bg-gray-800 rounded-xl p-4 text-sm" itemScope itemType="https://schema.org/PostalAddress">
              <p className="font-semibold text-white mb-2">Contact Us</p>
              <p className="text-gray-300" itemProp="streetAddress">{businessAddress}</p>
              <p className="text-gray-300">
                <span itemProp="addressLocality">Arlington</span>,{" "}
                <span itemProp="addressRegion">VA</span>{" "}
                <span itemProp="postalCode">22201</span>
              </p>
              <p className="mt-2">
                <a 
                  href={`tel:${businessPhoneLink}`}
                  className="text-amber-400 font-bold text-lg hover:text-amber-300"
                  itemProp="telephone"
                >
                  {businessPhone}
                </a>
              </p>
              <p className="text-green-400 font-medium mt-1">Open 24/7 — Every Day</p>
              <p className="text-gray-500 text-xs mt-2">License #{licenseNumber}</p>
            </div>
          </div>

          {/* Main Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/emergency-locksmith-arlington-va" className="hover:text-amber-400 transition-colors">
                  Emergency Locksmith
                </Link>
              </li>
              <li>
                <Link href="/services/residential-locksmith-arlington" className="hover:text-amber-400 transition-colors">
                  Residential Locksmith
                </Link>
              </li>
              <li>
                <Link href="/services/car-lockout-arlington" className="hover:text-amber-400 transition-colors">
                  Car Lockout Service
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-storefront-lockout" className="hover:text-amber-400 transition-colors">
                  Commercial Lockout
                </Link>
              </li>
              <li>
                <Link href="/services/key-extraction-lock-repair" className="hover:text-amber-400 transition-colors">
                  Key Extraction & Repair
                </Link>
              </li>
              <li>
                <Link href="/services/door-hardware-replacement" className="hover:text-amber-400 transition-colors">
                  Door Hardware Replacement
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-exit-doors" className="hover:text-amber-400 transition-colors">
                  Emergency Exit Doors
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas We Serve</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Ballston</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Clarendon</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Courthouse</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Crystal City</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Pentagon City</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Rosslyn</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Shirlington</Link></li>
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Columbia Pike</Link></li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="/#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</Link></li>
              <li><Link href="/#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</Link></li>
              <li><Link href="/#contact" className="hover:text-amber-400 transition-colors">Contact Form</Link></li>
              <li><Link href="/#location" className="hover:text-amber-400 transition-colors">Service Area</Link></li>
            </ul>
            
            <h4 className="text-white font-semibold mt-6 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span>20-Min Response</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span>Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span>500+ 5-Star Reviews</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-400 text-lg">✓</span>
              <span>No Damage Guarantee</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {year} {businessName}. All rights reserved.
          </p>
          <p className="text-gray-500">
            Serving Arlington, VA and surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
