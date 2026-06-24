import { ArrowRight, Database, FileSignature, Share2, ShieldCheck, ChevronDown, CheckCircle2, Mail, MapPin } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

// Fade in up animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        <div style={{ transform: "translateZ(40px)" }} className="h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroScroll, [0, 1], [1, 0]);

  const faqs = [
    {
      q: "Are you acting as a licensed real estate broker in these transactions?",
      a: "No. We operate strictly as independent data analysts and marketing consultants. We secure equitable interest in properties and assign our contract rights to institutional buyers for a fixed fee. All legal and title work is handled by independent, licensed third-party professionals."
    },
    {
      q: "How do you source your off-market opportunities?",
      a: "We leverage proprietary algorithms and deep public record aggregation to identify highly motivated sellers, tax delinquent properties, and underutilized vacant parcels before they hit the open market."
    },
    {
      q: "How are assignment fees and closing funds handled?",
      a: "All financial transactions and legal title transfers are executed independently through licensed US Title Companies. We never handle earnest money deposits or escrow funds directly."
    },
    {
      q: "What types of properties do you specialize in?",
      a: "Our primary focus is on high-yield vacant land and commercial parcels suited for corporate cash buyers and institutional developers."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full bg-white overflow-hidden"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-900 perspective-1000">
        {/* Real Estate Background Image with Parallax */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern corporate real estate" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </motion.div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center mt-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-[#FF5A00]/50 text-orange-200 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,90,0,0.3)]"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#FF5A00] animate-pulse"></span>
            B2B Data Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl"
          >
            Data-Driven Off-Market <br className="hidden md:block"/>
            Sourcing for US Real <br className="hidden md:block"/>
            Estate Investors.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl drop-shadow-lg font-light"
          >
            We leverage predictive data analytics and targeted marketing campaigns to source, analyse, and secure high-yield vacant land opportunities for corporate cash buyers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto perspective-1000"
          >
            <Link to="#services" className="inline-flex items-center justify-center gap-2 bg-[#FF5A00] text-white px-8 py-4 rounded text-lg font-bold hover:bg-[#E04D00] transition-all shadow-[0_10px_30px_rgba(255,90,0,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,90,0,0.6)] w-full sm:w-auto relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1s_forwards]"></span>
              Our Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="#contact" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded text-lg font-semibold hover:bg-white/20 transition-all hover:border-white/40 hover:-translate-y-1 w-full sm:w-auto">
              Contact Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background 3D geometric shapes */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Specialised B2B Services</h2>
            <p className="text-xl text-slate-600">
              Precision data intelligence and marketing execution tailored for institutional acquisitions.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 h-full flex flex-col items-start bg-gradient-to-br from-white to-slate-50/50">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-inner">
                    <Database size={30} className="text-[#FF5A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Land Registry Data Analytics</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Exhaustive analysis of public land registries, tax delinquent records, and zoning data to pinpoint underutilised vacant parcels.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 h-full flex flex-col items-start bg-gradient-to-br from-white to-slate-50/50">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-inner">
                    <Share2 size={30} className="text-[#FF5A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Targeted Outbound Lead Generation</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Executing direct-to-seller marketing and digital campaigns to connect with highly motivated property owners.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="h-full">
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 h-full flex flex-col items-start bg-gradient-to-br from-white to-slate-50/50">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 shadow-inner">
                    <FileSignature size={30} className="text-[#FF5A00]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Contract & Equitable Interest Marketing</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Securing equitable interest via purchase agreements and strategically assigning marketing contracts to active cash buyers for fixed freelance assignment fees.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section with 3D Image */}
      <section id="workflow" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&q=80&w=2000" 
            alt="Aerial view of land" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0f172a]/80 to-[#0f172a]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-md">How We Partner with Investors</h2>
            <p className="text-xl text-slate-300">
              A streamlined, compliant, and data-backed pipeline for continuous deal flow.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-slate-600 to-transparent z-0"></div>

            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="relative z-10 perspective-1000 group">
              <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-md pt-12 mt-8 hover:bg-[#1e293b]/90 hover:border-[#FF5A00]/50 transition-all duration-500 shadow-xl shadow-black/50 transform group-hover:translate-z-10 group-hover:-translate-y-2">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#FF5A00] to-[#E04D00] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(255,90,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                  01
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Mining & Analysis</h3>
                <p className="text-slate-300 leading-relaxed">
                  Identifying high-potential parcels using proprietary algorithms and public record aggregation.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="relative z-10 perspective-1000 group">
              <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-md pt-12 mt-8 hover:bg-[#1e293b]/90 hover:border-[#FF5A00]/50 transition-all duration-500 shadow-xl shadow-black/50 transform group-hover:translate-z-10 group-hover:-translate-y-2">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#FF5A00] to-[#E04D00] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(255,90,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                  02
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Direct Marketing & Acquisition</h3>
                <p className="text-slate-300 leading-relaxed">
                  Executing outbound campaigns and securing contract positions directly with motivated sellers.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="relative z-10 perspective-1000 group">
              <div className="bg-[#1e293b]/60 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-md pt-12 mt-8 hover:bg-[#1e293b]/90 hover:border-[#FF5A00]/50 transition-all duration-500 shadow-xl shadow-black/50 transform group-hover:translate-z-10 group-hover:-translate-y-2">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-gradient-to-br from-[#FF5A00] to-[#E04D00] rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_30px_rgba(255,90,0,0.4)] group-hover:scale-110 transition-transform duration-500">
                  03
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contract Assignment</h3>
                <p className="text-slate-300 leading-relaxed">
                  Assigning equitable interest to US buyers for a fixed freelance fee via a transparent process.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-5/12 flex flex-col justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF5A00]/20 to-transparent rounded-2xl flex items-center justify-center mb-8 border border-[#FF5A00]/30 shadow-[0_0_30px_rgba(255,90,0,0.15)]">
                <ShieldCheck size={32} className="text-[#FF5A00]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">Compliance &<br/>Operational Standards</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                We adhere to strict operational boundaries to ensure full regulatory compliance. Our services are strictly analytical and marketing-focused, providing a secure, transparent B2B partnership.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:w-7/12 w-full perspective-1000"
            >
              <TiltCard>
                <div className="bg-gradient-to-br from-[#0f172a] to-slate-900/90 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="space-y-10">
                    <div className="flex gap-6 group">
                      <div className="mt-1 shrink-0 bg-slate-800 p-2 rounded-full group-hover:bg-[#FF5A00]/20 transition-colors">
                        <CheckCircle2 className="text-[#FF5A00]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5A00] transition-colors">Strict B2B Scope</h3>
                        <p className="text-slate-400 leading-relaxed">We operate exclusively as independent freelance data analysts and marketing consultants. We are not a licensed real estate brokerage.</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>

                    <div className="flex gap-6 group">
                      <div className="mt-1 shrink-0 bg-slate-800 p-2 rounded-full group-hover:bg-[#FF5A00]/20 transition-colors">
                        <CheckCircle2 className="text-[#FF5A00]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5A00] transition-colors">Zero Escrow Handling</h3>
                        <p className="text-slate-400 leading-relaxed">We never handle physical property titles, buyer earnest money deposits, or escrow accounts.</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>

                    <div className="flex gap-6 group">
                      <div className="mt-1 shrink-0 bg-slate-800 p-2 rounded-full group-hover:bg-[#FF5A00]/20 transition-colors">
                        <CheckCircle2 className="text-[#FF5A00]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF5A00] transition-colors">Licensed Settlement</h3>
                        <p className="text-slate-400 leading-relaxed">All legal transactions, title clearings, and closing funds are independently processed through licensed, third-party US Title Companies. Inbound funds to this account consist solely of earned contract assignment fees or consulting retainers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Common inquiries from our institutional and corporate partners.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div 
                variants={fadeInUp}
                key={index} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 shadow-sm ${openFaq === index ? 'border-orange-300 bg-orange-50/30' : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 pr-8 text-lg">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-colors ${openFaq === index ? 'bg-[#FF5A00]/10' : 'bg-slate-100'}`}>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#FF5A00] shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/0 pt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#0f172a" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Partner With Us Today</h2>
            <p className="text-lg text-slate-600">Let's discuss how our data insights can drive your next acquisition.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/60 overflow-hidden flex flex-col md:flex-row border border-slate-100 transform-gpu"
          >
            {/* Left side info */}
            <div className="md:w-5/12 bg-gradient-to-br from-[#FF5A00] to-[#D14600] text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative images & circles */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Background pattern"/>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold mb-6 tracking-tight drop-shadow-sm">Get in Touch</h3>
                <p className="text-orange-50/90 mb-12 text-lg leading-relaxed font-light">
                  Fill out the form to request a consultation. Our team will review your investment criteria and get back to you within 24 hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg drop-shadow-sm">hello@terradatainsights.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg drop-shadow-sm">Remote B2B Services (US)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="md:w-7/12 p-10 md:p-14 bg-white">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A00] focus:border-[#FF5A00] outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white shadow-sm" placeholder="John Doe" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Corporate Email</label>
                  <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A00] focus:border-[#FF5A00] outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white shadow-sm" placeholder="john@company.com" />
                </div>

                <div>
                  <label htmlFor="criteria" className="block text-sm font-semibold text-slate-700 mb-2">Investment Criteria</label>
                  <select id="criteria" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A00] focus:border-[#FF5A00] outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white appearance-none shadow-sm cursor-pointer">
                    <option value="">Select criteria...</option>
                    <option value="vacant_land">Vacant Land Acquisition</option>
                    <option value="commercial">Commercial Redevelopment</option>
                    <option value="multi_family">Multi-Family Parcels</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#FF5A00] focus:border-[#FF5A00] outline-none transition-all resize-y text-slate-900 bg-slate-50 focus:bg-white shadow-sm" placeholder="Tell us about your acquisition goals..."></textarea>
                </div>

                <button type="submit" className="w-full bg-[#FF5A00] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#E04D00] transition-all shadow-[0_10px_20px_rgba(255,90,0,0.3)] hover:shadow-[0_15px_30px_rgba(255,90,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

