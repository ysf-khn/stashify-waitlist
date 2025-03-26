import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Stashify, we respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information when you use our
              inventory management service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect several types of information from and about users
              of our service, including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                Personal identifiers such as name, email address, and phone
                number
              </li>
              <li>Business information including company name and address</li>
              <li>
                Inventory and transaction data that you enter into our service
              </li>
              <li>
                Usage data and analytics about how you interact with our
                platform
              </li>
              <li>Device and connection information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Develop new products and services</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Protect against malicious or unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. However, no method of transmission over the
              Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your
              personal information, including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate or incomplete data</li>
              <li>Deletion of your personal data</li>
              <li>Restriction or objection to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
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
