import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowLeft, Send, Sparkles, Check, CheckCircle } from 'lucide-react';

interface ClientRequestFormProps {
  username: string;
  onBack: () => void;
}

export default function ClientRequestForm({ username, onBack }: ClientRequestFormProps) {
  const [product, setProduct] = useState('Telegram Channel Boost / Members');
  const [targetUid, setTargetUid] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const services = [
    'Telegram Channel Boost / Members',
    'Free Fire / PUBG Top Up & UC',
    'Premium VPNs & Subscriptions',
    'Custom Mod Tool Configs',
    'WhatsApp / Telegram Bot Setup',
    'Other Premium Services'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetUid.trim() || !contactHandle.trim()) {
      alert('Please fill out the Target ID and Contact Handle fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-speed verification submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setOrderId('SH-' + Math.floor(100000 + Math.random() * 900000));
    }, 1500);
  };

  const handleResetForm = () => {
    setTargetUid('');
    setContactHandle('');
    setOrderNotes('');
    setIsSuccess(false);
  };

  return (
    <div className="relative w-full max-w-sm" id="client-request-form-wrapper">
      <div className="relative w-full rounded-3xl bg-white border border-[#E5E5E5] p-6 sm:p-8 flex flex-col gap-6 text-[#1A1A1A] shadow-sm transition-all duration-300">
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-4" id="request-form-header">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-xs text-[#717171] hover:text-[#1A1A1A] transition-colors font-bold uppercase tracking-wider"
            id="back-to-login-btn"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Gate</span>
          </button>
          
          <span className="text-[9px] font-mono tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full uppercase font-bold">
            Hi, {username}
          </span>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form-inputs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-5"
            >
              <div className="space-y-1">
                <h3 className="text-xl font-black text-[#1A1A1A] tracking-tight">
                  Place Request.
                </h3>
                <p className="text-xs text-[#717171] leading-relaxed">
                  Enter your order particulars below. SHUVO H4CK will double-check each transaction handle.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="order-request-form">
                
                {/* Product / Service Select */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
                    Choose Service
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 focus:border-[#1A1A1A] cursor-pointer"
                    id="service-select-dropdown"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target UID / Username / URL */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
                    Target User ID / Player ID / URL
                  </label>
                  <input
                    type="text"
                    required
                    value={targetUid}
                    onChange={(e) => setTargetUid(e.target.value)}
                    placeholder="e.g. Free Fire ID or Channel Link"
                    className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 focus:border-[#1A1A1A]"
                    id="target-uid-input"
                  />
                </div>

                {/* Secure Contact Handle */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
                    Your Telegram / WhatsApp Contact
                  </label>
                  <input
                    type="text"
                    required
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    placeholder="e.g. @shuvoclient or +880..."
                    className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 focus:border-[#1A1A1A]"
                    id="contact-handle-input"
                  />
                </div>

                {/* Special Instructions / Notes */}
                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
                    Special order instructions (Optional)
                  </label>
                  <textarea
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Any custom remarks to SHUVO..."
                    rows={2}
                    className="w-full bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/5 focus:border-[#1A1A1A] resize-none"
                    id="special-notes-textarea"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative py-3.5 px-5 rounded-xl font-bold transition-all duration-150 overflow-hidden text-xs uppercase tracking-widest flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-50 mt-2"
                  id="submit-order-request-btn"
                >
                  <span className="flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>routing request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Order Request</span>
                      </>
                    )}
                  </span>
                </button>

              </form>
            </motion.div>
          ) : (
            <motion.div
              key="form-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="py-4 text-center space-y-6"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto text-xl shadow-xs">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-widest text-emerald-600 font-extrabold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100 inline-block">
                  DISPATCH CONFIRMED
                </span>
                <h3 className="text-xl font-black tracking-tight text-[#1A1A1A]">
                  Order Placed!
                </h3>
                <p className="text-xs text-[#717171] leading-relaxed max-w-xs mx-auto">
                  Your official order has been queued under receipt <strong className="text-[#1A1A1A] font-mono">{orderId}</strong>.
                </p>
                
                <div className="bg-[#FAF9F9] border border-[#E5E5E5] p-3 rounded-xl text-left mt-3 space-y-1">
                  <div className="text-[9px] text-[#A1A1A1] font-bold uppercase">SERVICE DETAILS:</div>
                  <div className="text-xs text-[#1A1A1A] font-bold line-clamp-1">{product}</div>
                  <div className="text-[10px] text-[#717171] font-medium">Target: {targetUid}</div>
                  <div className="text-[10px] text-[#717171] font-medium">Deliver To: {contactHandle}</div>
                </div>
              </div>

              <div className="bg-amber-50/50 border border-amber-200 p-4 rounded-2xl text-left">
                <p className="text-xs text-amber-900 font-medium leading-relaxed">
                  ⚠️ <strong>Next Step:</strong> Tap the <strong>Telegram</strong> or <strong>WhatsApp</strong> group links to send your Order ID <strong className="font-mono">{orderId}</strong> to the manager for rapid delivery!
                </p>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <button
                  onClick={handleResetForm}
                  className="w-full py-3 bg-[#1A1A1A] hover:bg-neutral-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider"
                  id="place-another-order-btn"
                >
                  Place Another Request
                </button>
                <button
                  onClick={onBack}
                  className="w-full py-3 bg-[#F5F5F5] hover:bg-[#E5E5E5] text-[#1A1A1A] border border-[#E5E5E5] font-semibold rounded-xl text-xs transition-colors"
                  id="return-to-gate-btn"
                >
                  Log Out Profile
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info lock */}
        <div className="text-center font-bold text-[9px] tracking-wider text-[#A1A1A1] uppercase" id="request-footer-tag">
          SHUVO H4CK'S OFC • 100% SECURE GATEWAY
        </div>
      </div>
    </div>
  );
}
