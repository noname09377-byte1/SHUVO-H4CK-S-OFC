import React from 'react';
import { motion } from 'motion/react';
import { User, ShieldCheck, RefreshCw } from 'lucide-react';

interface LoginCardProps {
  username: string;
  setUsername: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  shake: boolean;
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage: string;
}

export default function LoginCard({
  username,
  setUsername,
  onSubmit,
  shake,
  status,
  errorMessage
}: LoginCardProps) {
  // Detect dangerous pattern indicators
  const hasInjections = (str: string) => /['"<>%;()&+]|or|select|union/i.test(str);
  const usernameWarning = hasInjections(username);

  return (
    <motion.div
      animate={shake ? { x: [-10, 10, -10, 10, -5, 5, 0] } : {}}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-sm"
      id="login-card-wrapper"
    >
      {/* Main Frosted Glass Card Container reimagined in high-end Minimalism */}
      <div
        className="relative w-full rounded-3xl bg-white border border-[#E5E5E5] p-8 pt-16 flex flex-col items-center gap-7 text-[#1A1A1A] shadow-sm overflow-visible transition-all duration-300"
        style={{
          borderWidth: `1px`,
          borderColor: status === 'error' ? '#EF4444' : status === 'success' ? '#10B981' : undefined
        }}
        id="frosted-glass-card"
      >
        {/* Floating circular profile / avatar on the top edge */}
        <div
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full p-1 bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center transition-all duration-300 hover:scale-105"
          id="floating-avatar-container"
        >
          <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center relative overflow-hidden group">
            <User className="w-8 h-8 text-white relative z-10 transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>

        {/* Card Titles in display style */}
        <div className="text-center space-y-1 w-full mt-2" id="card-header-titles">
          <h2 className="text-2xl font-black text-[#1A1A1A] tracking-tight font-sans" id="signin-label">
            Access Gate.
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-[#10B981] font-bold">
            SHUVO H4CK'S SECURE GATEWAY
          </p>
        </div>

        {/* Custom Status Banner if validation triggers */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-rose-50/50 border border-rose-200 rounded-2xl p-4 text-xs text-rose-700 flex items-center gap-2.5 text-left"
            id="error-banner"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
            <p className="font-mono leading-relaxed">{errorMessage || 'Invalid user credentials.'}</p>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-800 flex items-center gap-2 text-left"
            id="success-banner"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-mono font-medium">Clearance Verified. Access OK.</span>
          </motion.div>
        )}

        {/* Form Container */}
        <form onSubmit={onSubmit} className="w-full space-y-6" id="card-login-form">
          {/* Username Input Field */}
          <div className="space-y-1.5 text-left" id="username-field-group">
            <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
              Client Username / ID
            </label>
            <div className="relative flex items-center group bg-white border border-[#E5E5E5] rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-[#1A1A1A]/5 focus-within:border-[#1A1A1A]">
              <span className="pl-4 text-[#A1A1A1] group-focus-within:text-[#1A1A1A] transition-colors">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Telegram / Discord Username"
                className="w-full bg-transparent pl-3 pr-4 py-3.5 text-sm text-[#1A1A1A] placeholder-neutral-400 focus:outline-none"
                id="card-username-input"
              />
              {usernameWarning && (
                <span className="absolute right-3 text-amber-700 text-[10px] bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">
                  Unsafe
                </span>
              )}
            </div>
          </div>

          {/* Minimal Solid Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="w-full relative py-3.5 px-5 rounded-xl font-bold transition-all duration-150 overflow-hidden text-xs uppercase tracking-widest flex items-center justify-center bg-[#1A1A1A] hover:bg-neutral-800 text-white disabled:opacity-50"
            id="card-submit-btn"
          >
            <div className="flex items-center gap-2 relative z-10 font-bold">
              {status === 'submitting' ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authorized</span>
                </>
              ) : (
                <>
                  <span>Begin Handshake &rarr;</span>
                </>
              )}
            </div>
          </button>
        </form>

        {/* Secondary Navigation Hint */}
        <div className="text-center font-bold text-[10px] tracking-wider text-[#A1A1A1] uppercase" id="card-footer-info">
          SHUVO H4CK'S OFC SECURE CLIENT PORTAL
        </div>
      </div>
    </motion.div>
  );
}
