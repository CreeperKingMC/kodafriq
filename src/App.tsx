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
            href="#donate"
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
                Across Africa, brilliant, certified medical coders have mastered the complexities of U.S. healthcare. They have the talent; they just lack the bridge. Eugenia started KodAfriq to be that bridge.
              </p>
              <p>
                This September, Eugenia is traveling to the <strong>2026 Annual Revenue Cycle Conference in Las Vegas, NV</strong> to secure the contracts that turn months of training into lifelong, sustainable careers. When she steps onto that flight, she carries the dreams of her entire team—young professionals and parents who are ready to prove that "Made in Africa" means world-class.
              </p>
              <p>
                Your donation isn't just funding a trip; it’s the "Yes" an African coder has been waiting for. By supporting this mission, you are helping us bring a multi-billion dollar industry to a continent that is ready to work and ready to rise. Help Eugenia open the door. Help KodAfriq bring the future home.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
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
            <h3 className="text-center font-bold text-gray-500 uppercase tracking-wider mb-4 text-lg">Meet a member of our team</h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="aspect-[9/16] bg-gray-200 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/q9GF08xqfCA"
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
            <p className="text-xl text-gray-600">Select a category below to fund a specific part of Eugenia’s mission.</p>
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
                    "This funds the literal journey from Africa to the U.S. Your support provides the 'wings' needed to put KodAfriq’s leadership in front of the world’s top healthcare decision-makers."
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $50
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Contributes to the International Travel Fund</span>
                  </button>
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $185
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Fully funds Eugenia’s Business Visa application</span>
                  </button>
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
                    "To win U.S. contracts, Eugenia must be where the conversations happen. This ensures she has a base of operations in Las Vegas to represent our team with the dignity they deserve."
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $100
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Funds one night of professional lodging</span>
                  </button>
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $400
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Covers ground transport and meals</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-kodafriq-blue text-white px-3 py-1 rounded-lg font-bold text-sm">PHASE 3</span>
                    <h3 className="text-2xl font-bold text-kodafriq-black">The Growth Engine — $2,000</h3>
                  </div>
                  <p className="text-kodafriq-blue font-bold mb-4">Goal: Networking & Deal-Closing</p>
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "This is where we turn a 'trip' into 'jobs.' This funds the high-stakes networking dinner, our professional brand video, and the digital tools needed to turn handshakes into signed contracts."
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $75
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Funds 14 days of targeted LinkedIn ads</span>
                  </button>
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $150
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Sponsors a "Seat at the Table" for a U.S. Executive</span>
                  </button>
                  <button className="bg-white border-2 border-kodafriq-blue text-kodafriq-blue p-4 rounded-xl font-bold hover:bg-kodafriq-blue hover:text-white transition group">
                    Donate $500
                    <span className="block text-xs font-normal mt-1 opacity-70 group-hover:opacity-100">Fully funds the "Proof of Work" video</span>
                  </button>
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
                  <button className="bg-kodafriq-blue text-white p-4 rounded-xl font-bold hover:bg-opacity-90 transition shadow-md">
                    Donate {customAmount ? `$${customAmount}` : "Now"}
                  </button>
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
            href="#"
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
