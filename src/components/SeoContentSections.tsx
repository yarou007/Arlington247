const problems = [
  "Locked out of house",
  "Locked out of office",
  "Locked keys in car",
  "Key stuck in lock",
  "Broken key extraction",
  "Lock repair",
  "Rekey service",
  "Deadbolt replacement",
  "Storefront lock repair",
  "Panic bar repair",
  "Door hardware replacement",
];

const areas = [
  "Ballston",
  "Clarendon",
  "Courthouse",
  "Crystal City",
  "Pentagon City",
  "Rosslyn",
  "Shirlington",
  "Columbia Pike",
  "Cherrydale",
  "Lyon Village",
  "Bluemont",
  "Westover",
  "Arlington Ridge",
  "Penrose",
  "Douglas Park",
];

export default function SeoContentSections() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white" id="seo-services-24-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              24/7 Emergency Locksmith Services in Arlington, VA
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              When you need a true emergency locksmith Arlington VA team, speed matters,
              but so does doing the job right. Our mobile technicians are available day
              and night for lockout and lock repair calls across Arlington. We help with
              home lockouts, apartment and condo entries, office lockouts, storefront
              lockouts, and locked keys in car situations without unnecessary damage.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Our lockout service Arlington coverage also includes broken key removal,
              key extraction Arlington support, stuck key problems, damaged cylinders,
              jammed deadbolts, and doors that will not latch or close correctly. If
              hardware is beyond repair, we can replace deadbolts, levers, knobs, and
              related components in one visit so you can secure your property quickly.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              For businesses, we handle panic bars, storefront lock systems, and
              emergency exit doors that fail unexpectedly. Whether the issue is urgent
              access, safety compliance, or a hard lockout at closing time, our 24/7
              locksmith Arlington service is built to restore access and security fast.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50" id="residential-commercial-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Residential, Commercial and Automotive Locksmith Help
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We tailor each call to the property type and lock system, so you get the
              right fix on the first visit and clear upfront pricing before work starts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Residential Locksmith Arlington
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We unlock houses, condos, and apartments, repair damaged locks, and
                improve home security with rekeying and deadbolt upgrades. If you are
                locked out late at night or after work, we dispatch quickly and use
                non-destructive methods whenever possible.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Commercial Locksmith Arlington
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From office suites to retail storefronts, we handle business lockouts,
                lock repair, rekey projects, and hardware replacements. We also support
                access reliability for managers, tenants, and staff who need immediate
                entry and stronger day-to-day security.
              </p>
            </article>

            <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Car Locksmith Arlington
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If your keys are locked in the vehicle or a key breaks in the door or
                ignition area, our car locksmith Arlington response helps you get moving
                again fast. We focus on safe entry and practical solutions that avoid
                extra downtime.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="door-hardware-panic-bars">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Door Hardware, Panic Bars and Emergency Exit Doors
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Hardware failures can cause lockouts, safety risks, and expensive business
              interruptions. Our technicians handle door hardware repair Arlington calls
              for door closers, hinges, deadbolts, levers, knobs, latch alignment, and
              storefront lock mechanisms. We diagnose the root cause first so repairs are
              stable and long lasting.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Emergency Exit Door Repair Arlington and Panic Bar Repair Arlington
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We service panic devices, push bars, and emergency exit hardware that no
              longer opens smoothly, fails to latch, or has worn components. If your
              building needs urgent action to restore safe egress, we can repair or
              replace parts on-site and confirm reliable operation before completion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50" id="local-arlington-areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Local Arlington Areas We Serve
            </h2>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Our dispatch coverage includes Ballston, Clarendon, Courthouse, Crystal
              City, Pentagon City, Rosslyn, Shirlington, Columbia Pike, Cherrydale, Lyon
              Village, Bluemont, Westover, Arlington Ridge, Penrose, and Douglas Park.
              If you are nearby and need immediate locksmith service, call now and we
              will confirm your exact location.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white" id="common-locksmith-problems">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Common Locksmith Problems We Fix
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              These are the most common emergency calls we solve every week for Arlington
              residents, drivers, and business owners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <article
                key={problem}
                className="rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{problem}</h3>
                <p className="text-sm text-gray-600">
                  Fast, professional service with clear pricing and 24/7 dispatch.
                </p>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="tel:+17032440559"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
            >
              Call Now for Immediate Help: (703) 244-0559
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
