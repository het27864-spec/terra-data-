import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
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
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-slate prose-orange max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p className="text-slate-700 leading-relaxed">
              By accessing this website or engaging our independent freelance services, you agree to be bound by these Terms of Service. If you do not agree, you must immediately cease using this site and our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. SCOPE OF SERVICES</h2>
            <p className="text-slate-700 leading-relaxed">
              We provide independent freelance digital property sourcing, public land registry data analytics, and contract marketing services for real estate investors. All deliverables are provided strictly on a business-to-business (B2B) contractual or assignment basis.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. STRICT COMPLIANCE & LEGAL DISCLAIMERS</h2>
            <ul className="list-disc pl-6 space-y-4 text-slate-700">
              <li>
                <strong>Independent Freelancer:</strong> We operate strictly as an independent contractor. We do not act as, nor do we represent ourselves as, a licensed real estate broker or agent.
              </li>
              <li>
                <strong>No Escrow Handling:</strong> We never handle, hold, or manage physical property titles, buyer earnest money deposits (EMD), or escrow funds.
              </li>
              <li>
                <strong>Independent Settlement:</strong> All legal transactions, purchase agreements, and property fund closings must be executed independently through a licensed, third-party US Title Company.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. FEES AND PAYMENTS</h2>
            <p className="text-slate-700 leading-relaxed">
              Inbound payments accepted are strictly limited to fixed freelance contract assignment fees or corporate consulting retainers paid directly by US corporate buyers or investment syndicates.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. LIMITATION OF LIABILITY</h2>
            <p className="text-slate-700 leading-relaxed">
              The data and marketing analytics provided on this website are for general informational purposes only. We make no guarantees regarding the profitability or investment outcomes of any analyzed parcels. In no event shall we be liable for any indirect, incidental, or consequential financial damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. GOVERNING LAW</h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with standard international business practices and applicable electronic commerce laws.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
