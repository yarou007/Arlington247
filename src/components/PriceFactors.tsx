import Link from "next/link";
export default function PriceFactors() {
  return (
    <section className="section section-soft" id="pricing">
      <div className="wrap split">
        <div>
          <p className="eyebrow">Understand the scope</p>
          <h2>What affects a locksmith quote?</h2>
          <p>
            A home lockout, a vehicle lockout and a failed storefront lock are
            different jobs. Describe the issue before choosing an option. Ask
            for the proposed scope, what a visit or assessment costs, what parts
            are included and what could change after inspection.
          </p>
          <p>
            A photo helps start the conversation, but hidden damage and door
            alignment may only become clear at the property. Agree on any
            revised work before it goes ahead.
          </p>
          <Link
            className="text-link"
            href="/advice/locksmith-cost-factors-arlington"
          >
            Read the cost-factor guide →
          </Link>
        </div>
        <div className="help-card">
          <h3>The details that matter</h3>
          <ul>
            <li>
              <strong>Time and location:</strong> time of day, access
              arrangements and where service is needed.
            </li>
            <li>
              <strong>Lock and door:</strong> the cylinder, latch, frame,
              alignment and condition.
            </li>
            <li>
              <strong>Vehicle:</strong> make, model, year and which compartment
              is locked.
            </li>
            <li>
              <strong>Hardware:</strong> whether compatible parts are needed or
              existing hardware can be repaired.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
