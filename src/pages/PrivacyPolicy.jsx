import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12 text-gray-800 border border-gray-100">
        <h1 className="text-4xl font-bold text-[#090040] mb-6 border-b pb-2">Privacy Policy</h1>

        <p className="mb-6 text-base leading-relaxed">
          At <span className="font-semibold">FastScan</span>, we are committed to protecting your privacy.
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your information
          when you use our services.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">1. Information We Collect</h2>
          <p className="text-base leading-relaxed">
            We may collect personal information such as your name, email address, phone number, and
            usage data when you interact with our website or products.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">2. How We Use Your Information</h2>
          <p className="text-base leading-relaxed">
            Your information is used to improve our services, respond to inquiries, send updates,
            and enhance user experience. We do not sell or rent your personal data.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">3. Cookies & Tracking</h2>
          <p className="text-base leading-relaxed">
            We may use cookies and similar technologies to track website usage and improve user
            experience. You can manage cookie settings through your browser.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">4. Data Security</h2>
          <p className="text-base leading-relaxed">
            We implement security measures to protect your data. However, no method of transmission
            over the internet is 100% secure.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">5. Third-Party Services</h2>
          <p className="text-base leading-relaxed">
            We may use third-party services (e.g., analytics, payment gateways) that collect data
            according to their own privacy policies.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">6. Your Rights</h2>
          <p className="text-base leading-relaxed">
            You have the right to access, update, or delete your personal information by contacting
            us at{" "}
            <a
              href="mailto:hello@fastscan.in"
              className="text-[#4F9DFF] underline hover:text-blue-500"
            >
              hello@fastscan.in
            </a>.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#090040] mb-3">7. Changes to This Policy</h2>
          <p className="text-base leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. Changes will be posted
            on this page.
          </p>
        </section>

        <p className="mt-10 text-sm text-gray-500 text-right">Last updated: August 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
