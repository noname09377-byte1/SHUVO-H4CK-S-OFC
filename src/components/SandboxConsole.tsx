import React from 'react';
import { TestCase, CustomizationSettings, LogEntry } from '../types';
import { Play, RotateCcw, Sliders, ListChecks, Terminal, Sparkles, BookOpen, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GENERAL_GUIDELINES } from '../data';

interface SandboxConsoleProps {
  testCases: TestCase[];
  selectedTestCaseId: string | null;
  onRunTest: (testCase: TestCase) => void;
  onResetFields: () => void;
  settings: CustomizationSettings;
  setSettings: React.Dispatch<React.SetStateAction<CustomizationSettings>>;
  logs: LogEntry[];
  onClearLogs: () => void;
}

export default function SandboxConsole({
  testCases,
  selectedTestCaseId,
  onRunTest,
  onResetFields,
  settings,
  setSettings,
  logs,
  onClearLogs
}: SandboxConsoleProps) {
  // Update colors in the settings config
  const handleColorChange = (color: CustomizationSettings['glowColor']) => {
    setSettings((prev) => ({ ...prev, glowColor: color }));
  };

  return (
    <div className="w-full flex flex-col gap-8" id="sandbox-panel-container">
      {/* Test Suite Selector Section */}
      <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8" id="test-suites-panel">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <ListChecks className="w-5 h-5 text-[#1A1A1A]" />
            <h3 className="font-bold text-[#1A1A1A] text-lg font-sans">
              Test Case Playground.
            </h3>
          </div>
          <button
            onClick={onResetFields}
            className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg text-xs font-bold uppercase tracking-wider text-[#1A1A1A] transition-all cursor-pointer shadow-sm"
            id="reset-form-state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Card</span>
          </button>
        </div>

        <p className="text-sm text-[#717171] mb-6 font-sans leading-relaxed">
          Select or trigger automated testing routines to stress-test our verification sequence. Evaluates credential patterns, boundary errors, and threat parsing client-side.
        </p>

        {/* List of Test Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="test-suite-selector-grid">
          {testCases.map((test) => {
            const isSelected = selectedTestCaseId === test.id;
            
            // Minimal Category badges
            const badgeColors = {
              Success: 'bg-emerald-50 text-emerald-800 border-emerald-200',
              Validation: 'bg-neutral-100 text-neutral-800 border-neutral-300',
              Security: 'bg-rose-50 text-rose-800 border-rose-200',
              Boundary: 'bg-amber-50 text-amber-800 border-amber-200'
            };

            return (
              <div
                key={test.id}
                className={`group border rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between gap-5 text-left bg-white ${
                  isSelected
                    ? 'border-[#1A1A1A] shadow-md ring-2 ring-[#1A1A1A]/5'
                    : 'border-[#E5E5E5] hover:border-[#1A1A1A]/40 hover:shadow-xs'
                }`}
                id={`test-case-card-${test.id}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 border rounded ${badgeColors[test.category]}`}>
                      {test.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] font-sans tracking-tight">{test.name}</h4>
                  <p className="text-xs text-[#717171] leading-relaxed line-clamp-2">{test.description}</p>
                </div>

                <div className="border-t border-[#F0F0F0] pt-3.5 flex items-center justify-between">
                  <div className="text-[10px] text-[#A1A1A1] font-bold uppercase tracking-wider">
                    Expect: <span className="text-[#1A1A1A] font-extrabold">{test.category === 'Success' ? 'Access OK' : 'Blocked'}</span>
                  </div>
                  <button
                    onClick={() => onRunTest(test)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A] hover:bg-neutral-800 text-white uppercase tracking-widest font-bold text-[9px] rounded-lg transition-colors cursor-pointer"
                    id={`btn-run-${test.id}`}
                  >
                    <Play className="w-2.5 h-2.5 fill-current" />
                    <span>Auto Run</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Aesthetic Customizer Controls */}
      <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8" id="design-control-panel">
        <div className="flex items-center gap-2.5 border-b border-[#E5E5E5] pb-4 mb-5">
          <Sliders className="w-5 h-5 text-[#1A1A1A]" />
          <h3 className="font-bold text-[#1A1A1A] text-lg font-sans">
            Brand Accents.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="controls-split">
          {/* Neon Glow Color selections */}
          <div className="space-y-3">
            <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
              Color Accent Type
            </label>
            <div className="flex items-center gap-2.5 animate-none" id="color-selectors">
              {(['cyan', 'purple', 'emerald', 'amber'] as const).map((color) => {
                const isActive = settings.glowColor === color;
                const activeBorders = {
                  cyan: 'border-[#1A1A1A] ring-[#1A1A1A]/10',
                  purple: 'border-[#1A1A1A] ring-[#1A1A1A]/10',
                  emerald: 'border-[#1A1A1A] ring-[#1A1A1A]/10',
                  amber: 'border-[#1A1A1A] ring-[#1A1A1A]/10',
                };
                const bgClasses = {
                  cyan: 'bg-[#1A1A1A]',
                  purple: 'bg-[#6B21A8]',
                  emerald: 'bg-[#065F46]',
                  amber: 'bg-[#92400E]',
                };
                return (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-150 flex items-center justify-center cursor-pointer ${
                      isActive ? `${activeBorders[color]} scale-110 ring-4` : 'border-transparent hover:scale-105 bg-white shadow-xs'
                    }`}
                    title={`Accent: ${color}`}
                    id={`btn-color-${color}`}
                  >
                    <span className={`w-4 h-4 rounded-full ${bgClasses[color]} block`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Frosted Neon Intensity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold tracking-widest text-[#A1A1A1] uppercase block">
                Visual Scale Level
              </label>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A] bg-[#F0F0F0] px-2 py-0.5 rounded">
                LVL {settings.neonIntensity}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={4}
              step={1}
              value={settings.neonIntensity}
              onChange={(e) => setSettings((prev) => ({ ...prev, neonIntensity: parseInt(e.target.value) }))}
              className="w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer accent-[#1A1A1A]"
              id="border-thickness-range"
            />
          </div>
        </div>
      </div>

      {/* Cyber Audit Logs Section */}
      <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8" id="audit-log-terminal">
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-[#1A1A1A]" />
            <h3 className="font-bold text-[#1A1A1A] text-lg font-sans">
              Validation Audit Register.
            </h3>
          </div>
          <button
            onClick={onClearLogs}
            className="text-[10px] uppercase tracking-wider font-bold text-[#717171] hover:text-[#1A1A1A] transition-colors flex items-center gap-1 cursor-pointer bg-white border border-[#E5E5E5] shadow-xs px-2.5 py-1.5 rounded-lg"
            title="Clear Logs"
            id="clear-logs-btn"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Trace</span>
          </button>
        </div>

        {/* Real-time logging terminal rendered beautifully in off-white minimalist container */}
        <div className="w-full h-40 bg-white rounded-2xl p-4 border border-[#E5E5E5] font-mono text-[11px] overflow-y-auto space-y-2 text-left scroll-smooth" id="logs-display-panel">
          <AnimatePresence initial={false}>
            {logs.length === 0 ? (
              <div className="text-[#A1A1A1] italic h-full flex items-center justify-center select-none font-sans text-xs">
                No security system handshakes caught in buffer.
              </div>
            ) : (
              logs.map((log) => {
                const logColors = {
                  info: 'text-[#717171]',
                  success: 'text-emerald-700 font-bold',
                  error: 'text-rose-700 font-bold',
                  warning: 'text-amber-700 font-bold'
                };
                const logPrefix = {
                  info: '[INFO]',
                  success: '[PASS]',
                  error: '[FAIL]',
                  warning: '[WARN]'
                };
                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2 leading-relaxed tracking-tight ${logColors[log.type]}`}
                    id={`log-entry-${log.id}`}
                  >
                    <span className="text-[#A1A1A1] select-none font-bold shrink-0">{log.timestamp}</span>
                    <span className="shrink-0">{logPrefix[log.type]}</span>
                    <span className="text-[#1A1A1A]">{log.message}</span>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Secure authentication tips card */}
      <div className="bg-[#F9F9F9] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8" id="login-guidelines">
        <div className="flex items-center gap-2.5 border-b border-[#E5E5E5] pb-4 mb-5">
          <BookOpen className="w-5 h-5 text-[#1A1A1A]" />
          <h3 className="font-bold text-[#1A1A1A] text-lg font-sans">
            Security Directives.
          </h3>
        </div>

        <div className="space-y-5 text-left" id="guidelines-stack">
          {GENERAL_GUIDELINES.map((item, index) => (
            <div key={index} className="space-y-1.5" id={`guidelines-item-${index}`}>
              <h4 className="text-xs font-bold text-[#1A1A1A] tracking-wider uppercase font-sans">
                0{index + 1}. {item.title}
              </h4>
              <p className="text-xs text-[#717171] leading-relaxed font-sans font-light">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
