"use client";

export default function GoogleMap() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Our Location
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Arlington Locksmith Service Area
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We serve all of Arlington County and surrounding areas. Our mobile technicians are 
            positioned throughout the region for fastest response times.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49638.7!2d-77.1375!3d38.8816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c5c5c5c5c5%3A0x1234567890abcdef!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arlington247 Lock Repair Service Area"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Phone</h3>
              <a 
                href="tel:+17032440559" 
                className="text-red-600 font-bold text-xl hover:text-red-800"
              >
                (703) 244-0559
              </a>
              <p className="text-gray-500 text-sm mt-1">Available 24/7</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Service Area</h3>
              <p className="text-gray-600">
                Arlington, VA 22201
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Serving all Arlington County
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Hours</h3>
              <p className="text-gray-600 font-semibold text-green-600">
                Open 24 Hours / 7 Days
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Including holidays
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">License</h3>
              <p className="text-gray-600">
                Licensed & Insured in Virginia
              </p>
              <p className="text-gray-500 text-sm mt-1">
                License #VA-LOCK-2847
              </p>
            </div>
          </div>
        </div>

        {/* Neighborhoods */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Neighborhoods We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {["Ballston", "Clarendon", "Courthouse", "Crystal City", "Pentagon City", "Rosslyn", "Shirlington", "Columbia Pike", "Cherrydale", "Lyon Village", "Bluemont", "Westover", "Arlington Ridge", "Penrose", "Douglas Park"].map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
