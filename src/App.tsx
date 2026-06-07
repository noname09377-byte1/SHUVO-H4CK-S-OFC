import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, AppWindow, Check, ArrowRight } from 'lucide-react';
import LoginCard from './components/LoginCard';
import ClientRequestForm from './components/ClientRequestForm';

export default function App() {
  const [username, setUsername] = useState('');
  const [shake, setShake] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetCard = () => {
    setUsername('');
    setStatus('idle');
    setErrorMessage('');
  };

  // Form submit protocol for username-only login
  const handleLoginSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (status === 'submitting' || status === 'success') return;

    setStatus('submitting');

    // 1. Check for empty name
    if (!username.trim()) {
      setTimeout(() => {
        setShake(true);
        setStatus('error');
        setErrorMessage('Username/ID cannot be empty.');
        setTimeout(() => setShake(false), 500);
      }, 600);
      return;
    }

    // 2. Check for unsafe characters (malicious patterns)
    const dangerousPattern = /['"<>%;()&+]|or|select|union/i;
    if (dangerousPattern.test(username)) {
      setTimeout(() => {
        setShake(true);
        setStatus('error');
        setErrorMessage('Security alert: Unsafe input pattern.');
        setTimeout(() => setShake(false), 500);
      }, 700);
      return;
    }

    // 3. Successful verification
    setTimeout(() => {
      setStatus('success');
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] flex flex-col font-sans relative selection:bg-[#1A1A1A]/10 select-none">
      
      {/* Sticky elegant raw header */}
      <header className="border-b border-[#F0F0F0] bg-white relative z-30" id="app-nav-bar">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-black tracking-tighter italic text-[#1A1A1A]">
              SHUVO H4CK'S OFC
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium text-[#717171]">
            <a
              href="https://t.me/shuvoh4ckofc"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors flex items-center gap-1.5 font-bold"
              id="external-doc-link"
            >
              <span className="hidden sm:inline">Contact Owner</span>
            </a>
            <div className="h-4 w-px bg-[#E5E5E5]" />
            <span className="text-[10px] font-mono tracking-widest text-[#10B981] bg-[#F0FDF4] border border-[#DCFCE7] px-2.5 py-1 rounded-full uppercase font-bold">
              100% Trusted Seller
            </span>
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 py-16 lg:py-24 relative z-10 flex flex-col gap-16">
        
        {/* Core display heading featuring the custom greeting directly upon loading */}
        <div className="space-y-4 text-left max-w-3xl" id="app-landing-header">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] uppercase tracking-widest text-emerald-600 font-extrabold flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full w-fit"
            id="specs-verified-pill"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Welcome to SHUVO H4CK'S OFC Portal</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-[90px] font-black leading-none tracking-tight text-[#1A1A1A]" id="main-glassmorphic-title">
            SHUVO H4CK'S OFC
          </h1>

          <p className="text-xl sm:text-2xl text-emerald-600 font-semibold tracking-wide" id="seller-badge">
            ★ 100% Trusted Seller ★
          </p>

          <p className="text-lg text-[#717171] font-light max-w-2xl leading-relaxed" id="main-glassmorphic-desc">
            Instantly connect with our official support communities below, check authentic member tokens, or claim your secure license clearance tokens instantly.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="split-screen-grid">
          
          {/* LEFT SIDE: Beautiful LoginCard or ClientRequestForm once verified (lg:span-5) */}
          <section className="lg:col-span-5 flex flex-col items-center justify-center p-8 py-16 lg:py-20 rounded-3xl bg-neutral-50/50 border border-[#E5E5E5] shadow-sm relative overflow-visible" id="visual-showcase-column">
            {status === 'success' ? (
              <ClientRequestForm
                username={username}
                onBack={handleResetCard}
              />
            ) : (
              <LoginCard
                username={username}
                setUsername={setUsername}
                onSubmit={handleLoginSubmit}
                shake={shake}
                status={status}
                errorMessage={errorMessage}
              />
            )}
          </section>

          {/* RIGHT SIDE: Rich interactive layout displaying the 3 official links (lg:span-7) */}
          <section className="lg:col-span-7 space-y-8" id="interactive-console-column">
            
            <div className="bg-[#FAFFAF]/40 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-amber-800 font-bold block">
                IMPORTANT CLIENT ANNOUNCEMENT
              </span>
              <p className="text-sm text-amber-900 font-medium leading-relaxed">
                Welcome to SHUVO H4CK'S OFC! We ensure ultra-rapid response times across all support networks. Please verify your member status or enter your portal name on the left.
              </p>
            </div>

            {/* Official Social Links Panel */}
            <div className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 space-y-6" id="social-links-panel">
              <div className="flex items-center gap-3 border-b border-[#F0F0F0] pb-4">
                <span className="font-extrabold text-[#1A1A1A] text-lg tracking-tight font-sans">
                  Official Communication Channels
                </span>
                <span className="ml-auto text-[9px] uppercase tracking-widest text-[#A1A1A1] font-bold">
                  verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="social-links-grid">
                
                {/* Telegram link card */}
                <a
                  href="https://t.me/shuvoh4ckofc"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col p-5 bg-gradient-to-b from-[#FAFDFE] to-white border border-blue-100 hover:border-blue-400 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <span className="font-extrabold text-blue-500 uppercase tracking-widest text-[9px] mb-2 font-mono">
                    ✦ Telegram
                  </span>
                  <span className="font-black text-sm text-[#1A1A1A] group-hover:text-blue-600 transition-colors">
                    Official Channel
                  </span>
                  <p className="text-[11px] text-[#717171] mt-1 font-light leading-snug">
                    Join updates for immediate shop drops.
                  </p>
                  <span className="text-[10px] text-blue-500 font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Join Channel &rarr;
                  </span>
                </a>

                {/* WhatsApp Link Card */}
                <a
                  href="https://chat.whatsapp.com/FKmcdJiUtvsBCgHzPp0sKN"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col p-5 bg-gradient-to-b from-[#FAFEFB] to-white border border-emerald-100 hover:border-emerald-400 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <span className="font-extrabold text-[#10B981] uppercase tracking-widest text-[9px] mb-2 font-mono">
                    ✦ WhatsApp
                  </span>
                  <span className="font-black text-sm text-[#1A1A1A] group-hover:text-[#10B981] transition-colors">
                    Group Support
                  </span>
                  <p className="text-[11px] text-[#717171] mt-1 font-light leading-snug">
                    Fast messaging with active buyers.
                  </p>
                  <span className="text-[10px] text-[#10B981] font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Enter Group &rarr;
                  </span>
                </a>

                {/* Discord Link Card */}
                <a
                  href="https://discord.gg/XpQdHQ8fq"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col p-5 bg-gradient-to-b from-[#FAFAFE] to-white border border-indigo-100 hover:border-indigo-400 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <span className="font-extrabold text-indigo-500 uppercase tracking-widest text-[9px] mb-2 font-mono">
                    ✦ Discord
                  </span>
                  <span className="font-black text-sm text-[#1A1A1A] group-hover:text-indigo-600 transition-colors">
                    Community Server
                  </span>
                  <p className="text-[11px] text-[#717171] mt-1 font-light leading-snug">
                    Discuss with the whole community.
                  </p>
                  <span className="text-[10px] text-indigo-500 font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Join Server &rarr;
                  </span>
                </a>

              </div>
            </div>

          </section>

        </div>
      </main>

      {/* Structured Minimalist Footer conforming directly to design instructions */}
      <footer className="px-12 py-10 border-t border-[#F0F0F0] bg-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-[#A1A1A1] font-bold mb-1.5">
            Active Workspace
          </span>
          <span className="text-sm font-semibold text-[#1A1A1A]">
            SHUVO H4CK'S OFC • Live Portal
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-[#A1A1A1] font-bold">
              Verification State
            </p>
            <p className="text-xs text-[#1A1A1A] font-medium">
              Synced with local runtime
            </p>
          </div>
          <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center border border-[#E5E5E5]">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
