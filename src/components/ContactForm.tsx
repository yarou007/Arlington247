"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Get a Quote
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Request Locksmith Service
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within minutes. 
            For emergencies, call us directly at{" "}
            <a href="tel:+17032440559" className="text-red-600 font-bold hover:underline">
              (703) 244-0559
            </a>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 mb-1">Call Now</h3>
              <a 
                href="tel:+17032440559" 
                className="text-red-600 font-bold text-lg hover:text-red-800"
              >
                (703) 244-0559
              </a>
              <p className="text-gray-500 text-sm mt-1">24/7 Emergency Service</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
              <p className="text-gray-700 font-semibold text-green-600">20 Minutes Average</p>
              <p className="text-gray-500 text-sm mt-1">Throughout Arlington County</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 mb-1">Licensed</h3>
              <p className="text-gray-700">Licensed & Insured in VA</p>
              <p className="text-gray-500 text-sm mt-1">Professional technicians</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    Your request has been submitted. We&apos;ll call you back within minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                        placeholder="(703) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-medium text-gray-700 mb-1">
                      Type of Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="emergency-lockout">Emergency Lockout (Home/Car/Office)</option>
                      <option value="residential">Residential Locksmith</option>
                      <option value="commercial">Commercial/Storefront</option>
                      <option value="car">Car Lockout</option>
                      <option value="key-extraction">Broken Key Extraction</option>
                      <option value="lock-repair">Lock Repair</option>
                      <option value="hardware">Door Hardware Replacement</option>
                      <option value="rekey">Lock Rekeying</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                      Details About Your Issue
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors resize-none"
                      placeholder="Describe your situation (e.g., locked out of house, key broke in lock, etc.)"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                          </svg>
                          Request Service
                        </>
                      )}
                    </button>
                    <p className="text-gray-500 text-sm">
                      * Required fields
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-600">
                    <span className="font-semibold">Emergency?</span> For fastest response, call us directly at{" "}
                    <a href="tel:+17032440559" className="text-red-600 font-bold hover:underline">
                      (703) 244-0559
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
