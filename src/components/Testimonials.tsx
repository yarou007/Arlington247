"use client";

import { useState } from "react";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_RAW,
  FAQ_ITEMS,
  PHONE_ARIA_LABEL,
} from "@/lib/seo";

export default function Testimonials() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Emergency Locksmith Arlington VA FAQs
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            For emergencies, calling is the fastest option. Reach dispatch at {" "}
            <a
              href={`tel:${BUSINESS_PHONE_RAW}`}
              aria-label={PHONE_ARIA_LABEL}
              className="text-red-600 font-semibold hover:text-red-800"
            >
              {BUSINESS_PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, index) => (
            <article
              key={faq.question}
              className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-red-500 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-80 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
