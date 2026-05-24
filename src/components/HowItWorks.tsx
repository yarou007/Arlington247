import Image from "next/image";
import CallLink from "@/components/CallLink";
import { BUSINESS_PHONE_DISPLAY } from "@/lib/seo";

const steps = [
  {
    number: "1",
    title: "Call Dispatch Now",
    desc: "A live dispatcher answers and confirms your emergency locksmith Arlington VA request.",
    color: "bg-red-600",
  },
  {
    number: "2",
    title: "Tell Us Your Location and Lock Issue",
    desc: "Share your neighborhood, lock type, and access problem so we dispatch the right technician.",
    color: "bg-amber-500",
  },
  {
    number: "3",
    title: "A Mobile Locksmith Is Dispatched",
    desc: "We route the nearest available technician for home, business, and car lockout Arlington calls.",
    color: "bg-green-600",
  },
  {
    number: "4",
    title: "We Unlock, Repair or Replace the Lock When Possible",
    desc: "We aim for non-destructive entry first and explain repair or replacement options before work starts.",
    color: "bg-blue-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 bg-gray-900 text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-red-400 font-semibold uppercase tracking-widest text-sm mb-2">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Fast Call-First Dispatch Process
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Need locksmith help now? Calling is the fastest way to get real-time dispatch across
              Arlington County.
            </p>

            <div className="space-y-6">
              {steps.map((step) => (
                <article key={step.number} className="flex gap-5">
                  <div
                    className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-xl flex-shrink-0`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <CallLink
              label={`Call Now — ${BUSINESS_PHONE_DISPLAY}`}
              location="homepage-how-it-works"
              className="inline-flex items-center gap-2 mt-10 bg-amber-500 hover:bg-amber-400 text-gray-900 font-extrabold text-lg px-8 py-4 rounded-xl transition-colors duration-200 phone-pulse"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden">
              <Image
                src="/images/commercial-bar.jpg"
                alt="Commercial locksmith Arlington VA storefront door"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden">
              <Image
                src="/images/push-bar.jpg"
                alt="Panic bar repair Arlington VA emergency exit hardware"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-40 sm:h-52 rounded-2xl overflow-hidden col-span-2">
              <Image
                src="/images/door-knob.jpg"
                alt="Residential locksmith Arlington VA lockout help"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold text-sm">
                  24 hour locksmith Arlington coverage for homes, businesses, and vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
