const reviews = [
  {
    name: "J. M.",
    neighborhood: "Ballston",
    rating: 5,
    text: "Locked out of my apartment late evening. The technician arrived quickly and opened the door without damage.",
    service: "Residential lockout",
  },
  {
    name: "T. R.",
    neighborhood: "Crystal City",
    rating: 5,
    text: "Car lockout in a parking garage. Clear pricing on the phone and fast entry once the locksmith arrived.",
    service: "Car lockout",
  },
  {
    name: "A. K.",
    neighborhood: "Clarendon",
    rating: 5,
    text: "Our shop door lock failed before opening. They repaired the lock hardware and we opened on time.",
    service: "Storefront lock repair",
  },
  {
    name: "R. P.",
    neighborhood: "Rosslyn",
    rating: 4,
    text: "Broken key extraction at our office entry. They removed the key and tested the lock before leaving.",
    service: "Key extraction",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
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
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Customer Feedback
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Arlington Locksmith Reviews From Recent Jobs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Review snippets below are customer feedback summaries from completed calls. Public
            third-party verification links are not displayed on this page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <article
              key={`${review.name}-${review.neighborhood}-${review.service}`}
              className="bg-gray-50 rounded-2xl p-5 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} />
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">
                  {review.service}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">&ldquo;{review.text}&rdquo;</p>
              <p className="font-bold text-gray-900 text-sm">{review.name}</p>
              <p className="text-xs text-gray-500">{review.neighborhood}, Arlington</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Need locksmith help now?
          </p>
          <a
            href="tel:+17032440559"
            aria-label="Call Arlington 24/7 Lock Repair at 703-244-0559"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call (703) 244-0559
          </a>
        </div>
      </div>
    </section>
  );
}
