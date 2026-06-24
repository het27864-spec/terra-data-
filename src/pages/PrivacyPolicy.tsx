import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-12 pb-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-slate prose-orange max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h2>
            <p className="text-slate-700 leading-relaxed">
              We value your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our business-to-business (B2B) freelance services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. INFORMATION WE COLLECT</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We only collect information that you voluntarily provide to us through our online contact or intake forms. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Personal Identifiers:</strong> Full name, business email address, and phone number.</li>
              <li><strong>Business Information:</strong> Real estate investment criteria, company name, and project descriptions.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the collected data strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
              <li>Respond to your inquiries or project requests.</li>
              <li>Provide freelance data analytics and marketing services.</li>
              <li>Comply with legal, financial, and anti-money laundering (AML) regulatory audits.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed font-medium">
              We do not sell, rent, or lease your personal data to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. DATA SECURITY</h2>
            <p className="text-slate-700 leading-relaxed">
              We implement industry-standard administrative and technical security measures to protect your personal data. However, no electronic transmission over the internet can be guaranteed 100% secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. YOUR RIGHTS</h2>
            <p className="text-slate-700 leading-relaxed">
              Depending on your location (such as the US or EU), you have the right to request access to, correction of, or deletion of the personal data we hold about you. To exercise these rights, please contact us at our designated business email.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
