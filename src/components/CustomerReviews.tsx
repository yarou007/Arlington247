"use client";

const reviews = [
  {
    name: "Sarah M.",
    location: "Ballston, Arlington",
    rating: 5,
    text: "Locked out of my house at 2am and they arrived in 15 minutes. Professional and affordable. The technician was courteous and got me back inside quickly. Highly recommend!",
    date: "2 weeks ago",
    service: "Residential Lockout",
  },
  {
    name: "Mike T.",
    location: "Crystal City",
    rating: 5,
    text: "Got me back in my car within 20 minutes at Crystal City. Great service and fair pricing. I was worried about damage to my car but they used professional tools and everything was perfect.",
    date: "1 month ago",
    service: "Car Lockout",
  },
  {
    name: "Jennifer K.",
    location: "Clarendon",
    rating: 5,
    text: "Best locksmith in Arlington! Fixed our commercial door lock same day. Very professional and knew exactly what they were doing. Will definitely call again if needed.",
    date: "3 weeks ago",
    service: "Commercial Lock Repair",
  },
  {
    name: "David R.",
    location: "Rosslyn",
    rating: 5,
    text: "Key broke off in my office lock and they extracted it perfectly. No damage to the lock at all. Saved me from having to replace the entire lock system. Excellent work!",
    date: "2 months ago",
    service: "Key Extraction",
  },
  {
    name: "Amanda L.",
    location: "Shirlington",
    rating: 5,
    text: "Our storefront lock failed on a Saturday evening and they came out immediately. Got us back open for business the next morning. True 24/7 service!",
    date: "1 week ago",
    service: "Storefront Lockout",
  },
  {
    name: "Robert H.",
    location: "Pentagon City",
    rating: 5,
    text: "Replaced all the locks in our new home. Fast, professional, and the pricing was transparent. No hidden fees like other locksmiths. Highly recommended!",
    date: "3 weeks ago",
    service: "Lock Replacement",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What Arlington Customers Say About Us
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <StarRating rating={5} />
            <span className="font-bold text-gray-900">4.9</span>
            <span className="text-gray-500">out of 5</span>
          </div>
          <p className="text-gray-600">
            Based on <span className="font-semibold text-gray-900">500+ reviews</span> from Arlington residents and businesses
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { icon: "⭐", text: "500+ 5-Star Reviews" },
            { icon: "🏆", text: "Top Rated Arlington Locksmith" },
            { icon: "✅", text: "Verified Local Business" },
            { icon: "🔒", text: "Licensed & Insured" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full"
            >
              <span>{badge.icon}</span>
              <span className="font-medium text-gray-800 text-sm">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Review CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied Arlington customers
          </p>
          <a
            href="tel:+17032440559"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (703) 244-0559
          </a>
        </div>
      </div>
    </section>
  );
}
