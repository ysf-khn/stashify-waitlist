import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Refund Policy</h1>

          <div className="prose prose-lg">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Money-Back Guarantee
            </h2>
            <p>
              We stand behind our product with a 30-day money-back guarantee. If
              you&apos;re not satisfied with Stashify for any reason, you can
              request a full refund within 30 days of your purchase.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Eligibility for Refunds
            </h2>
            <p>
              To be eligible for a refund, you must meet the following criteria:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Request must be made within 30 days of the purchase date</li>
              <li>
                The request must include your order number or the email address
                used for purchase
              </li>
              <li>
                You must explain why you&apos;re requesting a refund (for our
                internal improvement only; all reasons are accepted)
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Refund Process</h2>
            <p>To request a refund:</p>
            <ol className="list-decimal ml-6 mt-2 space-y-2">
              <li>
                Email{" "}
                <a
                  href="mailto:hello@weekendlabs.in"
                  className="text-stashify-300 hover:underline"
                >
                  hello@weekendlabs.in
                </a>{" "}
                with the subject line &quot;Refund Request&quot;
              </li>
              <li>
                Include your order number and the email address used for
                purchase
              </li>
              <li>Briefly explain why you&apos;d like a refund</li>
            </ol>
            <p className="mt-4">
              We&apos;ll process your refund request within 5 business days and
              send a confirmation email once processed. Refunds will be credited
              back to the original payment method used for purchase.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              4. Lifetime Access Purchases
            </h2>
            <p>
              For lifetime access purchases, our 30-day money-back guarantee
              applies. After 30 days, lifetime access purchases are generally
              non-refundable since you retain perpetual access to the services
              included in your purchase.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              5. Subscription Cancellations
            </h2>
            <p>
              For subscription plans, you can cancel your subscription at any
              time. When you cancel:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                You&apos;ll maintain access to the service until the end of your
                current billing period
              </li>
              <li>You won&apos;t be charged for future billing periods</li>
              <li>
                There are no partial refunds for unused time in the current
                billing period
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Exceptions</h2>
            <p>
              In some circumstances, refunds may not be available or might be
              processed differently:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                Promotional or discounted purchases may have different refund
                terms as specified during purchase
              </li>
              <li>
                Enterprise or custom solution purchases are subject to the terms
                of their individual agreements
              </li>
              <li>
                Purchases made through third-party marketplaces may be subject
                to the refund policies of those platforms
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our Return & Refund Policy, please
              contact our support team at:
              <a
                href="mailto:hello@weekendlabs.in"
                className="text-stashify-300 hover:underline"
              >
                {" "}
                hello@weekendlabs.in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
