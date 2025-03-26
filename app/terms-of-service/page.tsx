import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Stashify&apos;s services, you agree to be
              bound by these Terms of Service. If you do not agree to all these
              terms, you may not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Description of Service
            </h2>
            <p>
              Stashify provides an inventory management platform designed for
              export businesses. Our service allows users to track batches,
              manage workers, and handle billing in a centralized system.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
            <p>
              To use certain features of our service, you must register for an
              account. You are responsible for:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Payment Terms</h2>
            <p>
              For paid services, you agree to pay all applicable fees. We may
              change our fees at any time, but will provide notice before
              changes take effect. When you purchase a lifetime access offer,
              you receive:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                Perpetual access to the features included in the offer at time
                of purchase
              </li>
              <li>Future updates and improvements to those features</li>
              <li>Additional support as specified in the purchase terms</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Refund Policy</h2>
            <p>
              Please refer to our separate{" "}
              <a
                href="/refund-policy"
                className="text-stashify-600 hover:underline"
              >
                Refund Policy
              </a>{" "}
              for information on refunds and money-back guarantees.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. User Content</h2>
            <p>
              You retain ownership of any content you upload to our service. By
              submitting content, you grant us a non-exclusive, worldwide
              license to use, store, and display that content in connection with
              providing our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              7. Prohibited Activities
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper operation of the service</li>
              <li>Engage in any automated use of the system</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              8. Intellectual Property
            </h2>
            <p>
              All intellectual property rights in the service are owned by
              Stashify or its licensors. Nothing in these Terms gives you a
              right to use our name, trademarks, logos, domain names, or other
              distinctive brand features.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
            <p>
              We may terminate or suspend your account at our sole discretion,
              without prior notice, for conduct that we determine violates these
              Terms, is harmful to other users, or is harmful to Stashify&apos;s
              interests.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Stashify shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use
              the service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              11. Changes to Terms
            </h2>
            <p>
              We may modify these Terms at any time. We will notify you of
              material changes by posting the new Terms on our website. Your
              continued use of the service after such modifications constitutes
              your acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              12. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <a
                href="mailto:hello@weekendlabs.in"
                className="text-stashify-600 hover:underline"
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
