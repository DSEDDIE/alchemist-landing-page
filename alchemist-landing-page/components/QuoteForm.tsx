import React, { useState } from 'react';
import { GoldenButton } from './GoldenButton';
import { FormData } from '../types';

interface QuoteFormProps {
  title: string;
  subtitle?: string;
  note?: string;
  formContext: 'hero' | 'faq';
  twoStage?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ title, subtitle, note, formContext, twoStage }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    squareFootage: '',
    substrate: '',
    system: '',
    timeline: '',
    budget: '',
    vision: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [hasStartedQuote, setHasStartedQuote] = useState(false);
  const [showContactFields, setShowContactFields] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await fetch('https://formspree.io/f/mblyakqr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="p-6 md:p-8" id="quote-form-inner">
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      {subtitle && <p className="text-gray-400 mb-6 text-sm">{subtitle}</p>}
      {twoStage && formContext === 'hero' ? (
        <>
          {/* Initial state: Only show CTA and video */}
          {!hasStartedQuote && (
            <>
              <GoldenButton fullWidth className="mb-2 text-lg py-3" onClick={() => setHasStartedQuote(true)}>
                <div className="font-sora font-extrabold text-2xl md:text-2xl tracking-tight text-white cta-glow">
                  Experience the Alchemy
                  <div className="text-xs font-normal text-white/80 mt-1">Get a Free Quote</div>
                </div>
              </GoldenButton>
              
              <style jsx global>{`
                .cta-glow {
                  text-shadow: 0 0 8px #3ff0e7, 0 0 16px #3ff0e7, 0 0 2px #fff;
                }
              `}</style>
              <div className="text-xs text-[#e5d7b7] text-center mb-5 mt-1 font-medium tracking-wide">NYC & Tri-State Area • Free Estimates • No Obligation</div>
            </>
          )}
          {/* After CTA click: show qualification questions first */}
          {hasStartedQuote && !showContactFields && (
            <>
              {/* Divider for visual separation */}
              <div className="w-full h-px bg-gradient-to-r from-[#d1a054]/30 via-transparent to-[#d1a054]/30 mb-6"></div>
              {/* Qualification questions go here (replace with your actual fields) */}
              <form onSubmit={e => { e.preventDefault(); setShowContactFields(true); }}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    placeholder="Square Footage or Dimensions"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="substrate"
                    value={formData.substrate}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none"
                    required
                  >
                    <option value="">Substrate</option>
                    <option>Concrete</option>
                    <option>Wood</option>
                    <option>Tile</option>
                    <option>Marble / Granite</option>
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    name="system"
                    value={formData.system}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none"
                    required
                  >
                    <option value="">System</option>
                    <option>Flake System</option>
                    <option>Metallic Epoxy</option>
                    <option>Multi-Color Metallic</option>
                    <option>Epoxy Countertop</option>
                    <option>Concrete Countertop</option>
                    <option value="Other">Other (Describe below)</option>
                  </select>
                  {formData.system === 'Other' && (
                    <input
                      type="text"
                      name="vision"
                      value={formData.vision}
                      onChange={handleChange}
                      placeholder="Describe your vision..."
                      className="w-full bg-white text-gray-900 px-4 py-3 mt-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                    />
                  )}
                </div>
                <div className="mb-4">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none"
                    required
                  >
                    <option value="">Timeline</option>
                    <option>ASAP</option>
                    <option>Within 2 weeks</option>
                    <option>This month</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Budget ($)"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                    required
                  />
                </div>
                {/* Add photo upload here if needed */}
                <GoldenButton type="submit" fullWidth>
                  Next
                </GoldenButton>
              </form>
            </>
          )}
          {/* After qualification questions and photo upload: show motivational message and contact fields */}
          {hasStartedQuote && showContactFields && (
            <>
              <div className="text-sm text-[#e5d7b7] text-center mb-4 font-medium">You’re 95% done<br /><span className="text-xs text-gray-400">Just tell us how to reach you.</span></div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="fullName"
                    id="hero-name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    id="hero-email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    id="hero-phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
                  />
                </div>
                <GoldenButton type="submit" fullWidth disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting...' : 'Submit'}
                </GoldenButton>
              </form>
            </>
          )}
        </>
      ) : (
        // Fallback: original form for non-hero context
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name={formContext === 'hero' ? 'fullName' : 'name'}
              id={`${formContext}-name`}
              value={formContext === 'hero' ? formData.fullName : (formData as any).name || ''}
              onChange={handleChange}
              placeholder={formContext === 'hero' ? 'Your Full Name' : 'Your Name'}
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id={`${formContext}-email`}
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              id={`${formContext}-phone`}
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              id={`${formContext}-message`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
              required
            ></textarea>
          </div>
          <GoldenButton type="submit" fullWidth disabled={status === 'submitting'}>
            {status === 'submitting'
              ? 'Submitting...'
              : formContext === 'hero'
              ? 'Get a Quote'
              : 'Submit'}
          </GoldenButton>
        </form>
      )}
      {status === 'success' && (
        <p className="text-green-400 mt-4 text-center">Thank you! Your message has been sent.</p>
      )}
      {note && <p className="text-xs text-gray-500 mt-4 text-center">{note}</p>}
    </div>
  );
};