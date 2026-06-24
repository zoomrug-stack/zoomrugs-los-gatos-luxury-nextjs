// This is a client component, allowing for interactive features like Framer Motion.
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Simplified variants for clear visibility of animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="flex flex-col min-h-screen bg-black text-ivory overflow-x-hidden">
      {/* Cinematic Hero with Parallax & Animation */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-screen flex items-center justify-center text-center text-ivory overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-luxury-rug.jpg')", backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
        <motion.div
          className="relative z-10 max-w-5xl mx-auto p-8"
          variants={staggerContainer}
        >
          <motion.h1 className="text-7xl md:text-9xl font-bold mb-6 serif leading-tight" variants={slideInUp}>
            <span className="block text-gold">Artistry in Every Fiber</span>
            <span className="block">Los Gatos' Premier Rug Restoration</span>
          </motion.h1>
          <motion.p className="text-2xl md:text-3xl mb-10 font-sans leading-relaxed" variants={slideInUp}>
            Experience unparalleled expertise in preserving and restoring your cherished rug legacies.
          </motion.p>
          <motion.a
            href="/contact"
            className="btn-luxury btn-filled text-xl md:text-2xl px-10 py-4 inline-block"
            variants={staggerItem}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 215, 0, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Private Consultation
          </motion.a>
        </motion.div>
      </motion.header>

      <main className="container mx-auto px-4 py-24">
        {/* Trust Bar (Mandatory) with Animations */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-panel2 py-16 rounded-3xl shadow-2xl mb-24 glass-effect mx-auto max-w-8xl px-8 border border-gold-light border-opacity-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-ivory">
            <motion.div variants={staggerItem} className="flex flex-col items-center">
              <h3 className="text-7xl font-bold text-gold serif mb-3">1981</h3>
              <p className="text-xl mt-2 font-sans opacity-80">Family Business Since</p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center">
              <h3 className="text-7xl font-bold text-gold serif mb-3">33+</h3>
              <p className="text-xl mt-2 font-sans opacity-80">Years Experience</p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center">
              <h3 className="text-7xl font-bold text-gold serif mb-3">100%</h3>
              <p className="text-xl mt-2 font-sans opacity-80">Insured Rug Care</p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-col items-center">
              <h3 className="text-7xl font-bold text-gold serif mb-3">In-House</h3>
              <p className="text-xl mt-2 font-sans opacity-80">Cleaning Facility</p>
            </motion.div>
          </div>
        </motion.section>

        {/* General Introduction with animated text */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="py-24 text-center"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-gold mb-10 leading-tight">
            Crafting Legacies, One Fiber at a Time
          </motion.h2>
          <motion.p variants={staggerItem} className="text-2xl font-sans text-ivory leading-relaxed max-w-4xl mx-auto opacity-90">
            In the heart of Los Gatos, our master artisans dedicate themselves to the intricate art of rug conservation. We blend time-honored traditions with innovative techniques to breathe new life into your cherished heirlooms, ensuring their beauty and story endure for generations.
          </motion.p>
        </motion.section>

        {/* Simulated 3D Rug Model Section (Image with interaction) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="py-24 flex flex-col items-center justify-center bg-panel rounded-3xl shadow-2xl mb-24 glass-effect px-8 py-16"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-gold mb-12 text-center leading-tight">
            Discover Your Rug in New Dimensions
          </motion.h2>
          <motion.p variants={staggerItem} className="text-xl font-sans text-ivory mb-12 max-w-3xl text-center opacity-80">
            While a full interactive 3D model is typically deployed via a dedicated platform, this visual representation hints at the dynamic possibilities.
          </motion.p>
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-gold overflow-hidden group"
            initial={{ scale: 0.9, rotateX: 10 }}
            whileInView={{ scale: 1, rotateX: 0, transition: { duration: 1, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.img
              src="/images/3d-rug-placeholder.png"
              alt="3D Rug Model Placeholder"
              className="w-full h-full object-contain absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 1 } }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <p className="text-white text-3xl font-bold font-sans">Hover for a Closer Look</p>
            </motion.div>
            <div className="absolute inset-0 border-4 border-gold border-opacity-50 rounded-xl pointer-events-none"></div>
          </motion.div>
          <motion.a
            href="#contact"
            className="btn-luxury btn-outlined text-xl md:text-2xl px-10 py-4 inline-block mt-16"
            variants={staggerItem}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Request a 3D Scan of Your Rug
          </motion.a>
        </motion.section>

        {/* Before/After Grid with Enhanced Interaction */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="py-24"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-center text-gold mb-16 leading-tight">
            The Art of Revival: Before & After
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { before: '/images/before-rug-1.jpg', after: '/images/after-rug-1.jpg', desc: "Deep cleaning and color refreshment." },
              { before: '/images/before-rug-2.jpg', after: '/images/after-rug-2.jpg', desc: "Fringe repair and edge reinforcement." },
              { before: '/images/before-rug-3.jpg', after: '/images/after-rug-3.jpg', desc: "Moth damage repair and prevention." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="glass p-6 rounded-2xl shadow-xl hover:shadow-gold-light transition-shadow duration-300 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img src={item.before} alt="Before Restoration" className="w-full h-auto rounded-lg transform transition-transform duration-500 ease-out group-hover:-translate-y-full absolute" />
                  <img src={item.after} alt="After Restoration" className="w-full h-auto rounded-lg transform transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="group-hover:block hidden">View After</span>
                  </div>
                </div>
                <p className="text-center mt-4 text-ivory font-sans opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Master Artisan Process Videos (Placeholder with cinematic styling) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="py-24 bg-panel rounded-3xl shadow-2xl mb-24 glass-effect px-8 py-16"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-center text-gold mb-16 leading-tight">
            The Master's Touch: Our Artisan Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={staggerItem} className="aspect-video relative rounded-xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full object-cover rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Master Cleaning Process"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <p className="absolute bottom-8 left-8 text-ivory text-xl font-sans z-10">Witness our purified submersion cleaning.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="aspect-video relative rounded-xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full h-full object-cover rounded-xl"
                src="https://www.youtube.com/embed/placeholder-video-2?controls=0&modestbranding=1&rel=0&showinfo=0&loop=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Meticulous Restoration"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <p className="absolute bottom-8 left-8 text-ivory text-xl font-sans z-10">Meticulous restoration of intricate details.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Client Testimonials (Placeholder) with animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="py-24"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-center text-gold mb-16 leading-tight">
            Acclaim from Our Esteemed Clientele
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <motion.div variants={staggerItem} className="glass p-8 rounded-2xl shadow-xl hover:shadow-gold-light transition-shadow duration-300">
              <p className="text-gold text-4xl mb-6">★★★★★</p>
              <p className="italic text-ivory font-sans text-lg leading-relaxed">
                “The attention to detail and care for our antique rug was simply outstanding. Truly a master class in restoration. Los Gatos is lucky to have Zoom Rugs.”
              </p>
              <p className="mt-6 font-bold text-gold text-xl font-sans">- A Discerning Los Gatos Resident</p>
            </motion.div>
            <motion.div variants={staggerItem} className="glass p-8 rounded-2xl shadow-xl hover:shadow-gold-light transition-shadow duration-300">
              <p className="text-gold text-4xl mb-6">★★★★★</p>
              <p className="italic text-ivory font-sans text-lg leading-relaxed">
                “White-glove service from start to finish. Our rug has never looked better. Highly recommend Zoom Rugs for any estate manager in the Bay Area.”
              </p>
              <p className="mt-6 font-bold text-gold text-xl font-sans">- Estate Manager, Silicon Valley</p>
            </motion.div>
            <motion.div variants={staggerItem} className="glass p-8 rounded-2xl shadow-xl hover:shadow-gold-light transition-shadow duration-300">
              <p className="text-gold text-4xl mb-6">★★★★★</p>
              <p className="italic text-ivory font-sans text-lg leading-relaxed">
                “Their expertise in silk rug cleaning is unparalleled. My delicate rug was returned looking pristine, a true testament to their artistry.”
              </p>
              <p className="mt-6 font-bold text-gold text-xl font-sans">- Luxury Collector, San Jose</p>
            </motion.div>
          </div>
        </motion.section>

        {/* AEO/SEO FAQ Section (Placeholder) with animation and schema */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="py-24 bg-panel rounded-3xl shadow-2xl mb-24 glass-effect px-8 py-16"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <motion.h2 variants={slideInUp} className="text-6xl serif text-center text-gold mb-16 leading-tight">
            Your Questions, Answered with Clarity
          </motion.h2>
          <div className="max-w-4xl mx-auto text-ivory space-y-8">
            {[
              {
                question: "Is the moth eradication treatment safe for my Los Gatos home?",
                answer: "Yes, our moth eradication treatment uses advanced, eco-friendly, and non-toxic solutions specifically chosen to be safe for your precious rugs, your family, and pets in your Los Gatos residence. We ensure complete safety and efficacy.",
              },
              {
                question: "How much does luxury rug restoration in Los Gatos cost?",
                answer: "The cost of our bespoke luxury rug restoration service is tailored to each rug, depending on its size, material, condition, and the specific treatments required. We provide a detailed, transparent estimate after a complimentary, private inspection at your Los Gatos estate.",
              },
              {
                question: "How long does a typical rug cleaning or repair take for Los Gatos clients?",
                answer: "Our meticulous process ensures perfection. Standard cleaning services typically take between 1 to 3 weeks, while intricate repairs and comprehensive restoration projects may require more time. We provide an estimated timeline during your initial consultation.",
              },
              {
                question: "Do you offer white-glove pickup and delivery services in Los Gatos?",
                answer: "Absolutely. Zoom Rugs proudly offers complimentary white-glove pickup and delivery services directly from your Los Gatos estate or residence, ensuring the utmost convenience and care for your valuable rugs from start to finish.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="faq-item glass p-6 rounded-xl hover:shadow-gold-light transition-shadow duration-300"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="faq-question text-2xl font-sans text-gold mb-4" itemProp="name">{faq.question}</h3>
                <div className="faq-answer text-lg font-sans opacity-90" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Concierge Desk Contact Form (Placeholder) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn}
          className="py-24"
        >
          <div className="max-w-3xl mx-auto glass p-10 rounded-3xl shadow-2xl border border-gold-light border-opacity-20">
            <motion.h2 variants={slideInUp} className="text-6xl serif text-center text-gold mb-12 leading-tight">
              Your Private Concierge Desk
            </motion.h2>
            <motion.p variants={staggerItem} className="text-center text-ivory text-xl mb-12 font-sans opacity-90">
              Schedule a private consultation or inquire about our bespoke services. Our dedicated team is ready to assist you in Los Gatos and beyond.
            </motion.p>
            <form action="#" method="POST" className="space-y-8">
              <motion.div variants={staggerItem}>
                <label htmlFor="name" className="block text-gold text-lg font-bold mb-3 font-sans">Your Esteemed Name:</label>
                <input type="text" id="name" name="name" className="glass-input w-full px-5 py-3 rounded-lg text-ivory focus:outline-none focus:ring-3 focus:ring-gold border border-gold-light border-opacity-30 bg-panel2" required />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label htmlFor="email" className="block text-gold text-lg font-bold mb-3 font-sans">Preferred Email Address:</label>
                <input type="email" id="email" name="email" className="glass-input w-full px-5 py-3 rounded-lg text-ivory focus:outline-none focus:ring-3 focus:ring-gold border border-gold-light border-opacity-30 bg-panel2" required />
              </motion.dn>
              <motion.div variants={staggerItem}>
                <label htmlFor="phone" className="block text-gold text-lg font-bold mb-3 font-sans">Direct Contact Number:</label>
                <input type="tel" id="phone" name="phone" className="glass-input w-full px-5 py-3 rounded-lg text-ivory focus:outline-none focus:ring-3 focus:ring-gold border border-gold-light border-opacity-30 bg-panel2" required />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label htmlFor="city" className="block text-gold text-lg font-bold mb-3 font-sans">Your City (e.g., Los Gatos):</label>
                <input type="text" id="city" name="city" placeholder="Los Gatos" className="glass-input w-full px-5 py-3 rounded-lg text-ivory focus:outline-none focus:ring-3 focus:ring-gold border border-gold-light border-opacity-30 bg-panel2" required />
              </motion.div>
              <motion.div variants={staggerItem}>
                <label htmlFor="rug_details" className="block text-gold text-lg font-bold mb-3 font-sans">Your Rug's Legacy (Approx. Size, Type, Condition):</label>
                <textarea id="rug_details" name="rug_details" rows={5} className="glass-input w-full px-5 py-3 rounded-lg text-ivory focus:outline-none focus:ring-3 focus:ring-gold border border-gold-light border-opacity-30 bg-panel2" placeholder="e.g., 9x12 ft, Antique Persian Tabriz, worn fringe"></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="btn-luxury btn-filled w-full text-xl md:text-2xl px-10 py-4 mt-8"
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 25px rgba(255, 215, 0, 0.7)" }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule a Private Rug Evaluation
              </motion.button>
            </form>
          </div>
        </motion.section>
      </main>

      {/* Mobile Fallback/Consideration: 
          For true mobile-first interactive 3D, a dedicated mobile-optimized component would be needed. 
          This template provides responsive design for layout, but complex 3D requires specific mobile rendering strategies.
          The current animated CSS/image approach scales well.
      */}
    </div>
  );
};

export default Home;
