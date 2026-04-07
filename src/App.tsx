/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from "react";

export default function App() {
  const [customAmount, setCustomAmount] = useState("");
  
  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="font-bold text-2xl flex items-center tracking-tight">
              <span className="text-kodafriq-blue">KOD</span>
              <span className="text-black">AFRIQ</span>
            </div>
          </div>
          <a
            href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-kodafriq-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Support Our Mission
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-white pt-16 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-kodafriq-light text-blue-900 text-xs font-bold mb-4 tracking-widest uppercase">
              Las Vegas, NV • Sept. 2026
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              One Handshake in Las Vegas. <span className="text-kodafriq-blue">A Generation of Careers in Africa.</span>
            </h1>
            <div className="text-lg text-gray-600 mb-8 space-y-4">
              <p>
                The medical coding and billing industry is a multi-billion dollar sector, with a significant portion of U.S. healthcare operations outsourced to countries like India and the Philippines.
              </p>
              <p>
                KodAfriq’s mission is to bring that opportunity to Africa, and to prove that African talent can deliver at the same world-class standard.
              </p>
              <p>
                Across the African continent, there is no shortage of capable professionals—only a shortage of opportunity. Today, KodAfriq has already trained, and continues to train, hundreds of medical coding and billing specialists who are ready to work, ready to compete, and ready to contribute to the global healthcare ecosystem.
              </p>
              <p>
                What stands in the way is access.
              </p>
              <p>
                This September, Eugenia will travel to the 2026 Annual Revenue Cycle Conference in Las Vegas, where critical outsourcing partnerships are formed. Her goal is make KodAfriq known to the medical coding and billing world, creating real jobs and sustainable income for professionals across Africa.
              </p>
              <p>
                This is about more than one company. It’s about addressing a major employment gap by unlocking access to a global, multi-billion dollar industry. It’s about building a pipeline of opportunity that can scale, impacting not just hundreds, but thousands of lives.
              </p>
              <p>
                Your support helps make that possible.
              </p>
              <p className="font-bold">
                Help Eugenia take KodAfriq to the global stage.
              </p>
              <p className="font-bold">
                Help us create jobs, unlock opportunity, and bring this industry home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kodafriq-black text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-gray-800 transition shadow-lg"
              >
                Donate to the Campaign
              </a>
              <a
                href="#budget"
                className="border-2 border-kodafriq-blue text-kodafriq-blue px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition"
              >
                View Budget Breakdown
              </a>
              <a
                href="https://kodafriq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kodafriq-blue text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-opacity-90 transition shadow-lg"
              >
                Learn More About Us
              </a>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-center font-bold text-gray-500 uppercase tracking-wider mb-4 text-lg">Meet our team</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="aspect-[9/16] bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/lQKNJ0TaobY"
                  title="KodAfriq Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Empowering Africa through Data</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-gray-700 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <p className="mb-6 leading-relaxed">
                My name is <strong>Eugenia Gomoawa Sagoe</strong> and I lead <strong>KodAfriq</strong>. We train and manage medical coders and billers across Africa. Our mission is more than just data management; it’s about <strong>job creation</strong>.
              </p>
              <p className="mb-6 leading-relaxed">
                By bringing the medical billing industry to Africa, we provide high-skill career paths that help those in need and foster economic stability. To take the next step, I am attending the <strong>2026 Annual Revenue Cycle Conference in Las Vegas, NV (Sept. 2026)</strong>.
              </p>
              <div className="bg-blue-50 border-l-4 border-kodafriq-blue p-6 my-8">
                <p className="italic text-gray-800 font-medium">
                  "This trip is a key opportunity to connect with healthcare organizations and secure contracts that will create sustainable jobs for our team."
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500">
                <img
                  src="https://lh3.googleusercontent.com/d/1iO8rdxh-Qq8mt_aAiDbJXXc33UoZEqMd"
                  alt="Eugenia Gomoawa Sagoe"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-kodafriq-blue text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="font-bold text-lg">Eugenia G. Sagoe</p>
                <p className="text-sm opacity-80">Founder & CEO, KodAfriq</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="budget" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Impact</h2>
            <p className="text-xl text-gray-600 mb-8">Select a category below to fund a specific part of Eugenia’s mission.</p>
            
            {/* Total Goal Summary */}
            <div className="max-w-md mx-auto bg-kodafriq-blue text-white rounded-2xl p-6 shadow-xl mb-12">
              <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Total Campaign Goal</p>
              <p className="text-5xl font-extrabold">$3,135</p>
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-0 rounded-full"></div>
              </div>
              <p className="mt-2 text-sm opacity-80 italic">Help us reach our target to unlock opportunity.</p>
            </div>
          </div>
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-kodafriq-blue text-white px-3 py-1 rounded-lg font-bold text-sm">PHASE 1</span>
                    <h3 className="text-2xl font-bold text-kodafriq-black">The Bridge to Las Vegas — $1,835</h3>
                  </div>
                  <p className="text-kodafriq-blue font-bold mb-4">Goal: Secure Travel & Visa</p>
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "this funds Eugenia's visa and travel to and from the United States, making it possible for her to attend the conference and represent KodAfriq on a global stage."
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group block text-center">
                    Donate $50
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Contributes to the International Travel Fund</span>
                  </a>
                  <a href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group block text-center">
                    Donate $185
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Fully funds Eugenia’s Business Visa application</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-kodafriq-blue text-white px-3 py-1 rounded-lg font-bold text-sm">PHASE 2</span>
                    <h3 className="text-2xl font-bold text-kodafriq-black">The Professional Hub — $1,300</h3>
                  </div>
                  <p className="text-kodafriq-blue font-bold mb-4">Goal: Conference Presence & Logistics</p>
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "these funds cover her accommodation, in-country transportation, and meals during her time in Las Vegas, ensuring she is fully supported while representing KodAfriq at the conference."
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group block text-center">
                    Donate $100
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Goes toward one night of lodging</span>
                  </a>
                  <a href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group block text-center">
                    Donate $400
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Covers ground transport and meals</span>
                  </a>
                </div>
              </div>
            </div>


            {/* Custom Amount */}
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-kodafriq-black mb-2">Choose Your Own Amount</h3>
                  <p className="text-gray-600 text-lg">
                    Every contribution, no matter the size, brings us one step closer to creating sustainable careers in Africa.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-kodafriq-blue focus:outline-none focus:ring-2 focus:ring-blue-200 font-bold text-lg"
                    />
                  </div>
                  <a 
                    href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-kodafriq-blue text-white p-4 rounded-xl font-bold hover:bg-opacity-90 transition shadow-md block text-center"
                  >
                    Donate {customAmount ? `$${customAmount}` : "Now"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-24 bg-kodafriq-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Support KodAfriq?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-kodafriq-blue rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold">Sustainable Impact</h3>
              <p className="text-gray-400 leading-relaxed">
                We aren't asking for a handout; we are asking for a hand up into the global economy.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-kodafriq-blue rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold">Job Creation</h3>
              <p className="text-gray-400 leading-relaxed">
                One successful contract in Las Vegas can provide high-paying, stable careers for 5–10 families in Africa.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-kodafriq-blue rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-2xl font-bold">Proven Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Our team is already trained and HIPAA-certified. We just need the door to be opened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="donate" className="py-20 bg-kodafriq-blue text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Invest in the Future of African Health Tech</h2>
          <p className="text-xl mb-10 opacity-90">
            Every dollar helps Eugenia and KodAfriq take this vital step toward creating jobs and providing world-class data solutions.
          </p>
          <a
            href="https://www.zeffy.com/en-US/donation-form/one-handshake-in-las-vegas-a-generation-of-careers-in-africa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-kodafriq-blue px-12 py-5 rounded-full font-bold text-2xl hover:scale-105 transition transform shadow-2xl"
          >
            Donate Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center md:text-left grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-kodafriq-blue">KOD</span>
              <span className="text-black">AFRIQ</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              KodAfriq Data Management Solutions: Training and managing the next generation of medical billing experts in Africa.
            </p>
          </div>
          <div className="text-sm text-gray-600 space-y-4">
            <p>
              <strong>Email:</strong> support@kodafriq.com
            </p>
            <a
              href="https://kodafriq.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-kodafriq-blue font-bold hover:underline"
            >
              Visit Our Website →
            </a>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-50 text-gray-400 text-xs">
          © 2024 KodAfriq Data Management Solutions. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
