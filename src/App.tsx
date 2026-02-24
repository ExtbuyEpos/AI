/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  Globe, 
  Terminal as TerminalIcon, 
  Download, 
  Check, 
  Copy, 
  ChevronRight, 
  Github,
  Monitor,
  Layers,
  ShieldCheck,
  MessageSquare,
  Mic,
  Volume2,
  Send,
  Loader2,
  Box,
  Activity,
  Command,
  Code2,
  Settings
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Initialize AI with the automatically provided key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <TerminalIcon className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-lg tracking-tighter text-white">PICOCLAW AI</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-mono uppercase tracking-widest text-zinc-500">
        <a href="#" className="hover:text-emerald-400 transition-colors">Docs</a>
        <a href="#" className="hover:text-emerald-400 transition-colors">Hardware</a>
        <a href="https://github.com/sipeed/picoclaw" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-white/10 text-zinc-300 rounded-lg hover:bg-zinc-800 transition-all">
          <Github size={14} />
          Source
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const installCmd = "git clone https://github.com/sipeed/picoclaw && cd picoclaw && picoclaw onboard";
  const workflowCmd = "picoclaw docker install && picoclaw ai full setup";

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-6">
            <Activity size={12} />
            System v1.2.0 Stable
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9] text-white">
            AI POWERED. <br />
            <span className="text-emerald-500">DOCKERIZED.</span> <br />
            ONE COMMAND.
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed font-mono">
            Direct access to embedded intelligence. PicoClaw AI automates your entire NPU and Docker environment in seconds.
          </p>
          
          <div className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-1">Initialization</label>
              <div className="relative group">
                <button 
                  onClick={() => copyToClipboard(installCmd, 'base')}
                  className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900/50 border border-white/10 rounded-xl font-mono text-sm hover:border-emerald-500/50 transition-all w-full text-left"
                >
                  <TerminalIcon size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 truncate flex-1">{installCmd}</span>
                  {copied === 'base' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-zinc-600" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest ml-1">Full AI + Docker Deployment</label>
              <div className="relative group">
                <button 
                  onClick={() => copyToClipboard(workflowCmd, 'workflow')}
                  className="relative flex items-center gap-3 px-6 py-5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl font-mono text-sm hover:border-emerald-500/50 transition-all w-full text-left"
                >
                  <Zap size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-emerald-400 font-bold truncate flex-1">{workflowCmd}</span>
                  {copied === 'workflow' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-zinc-600" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[100px]" />
          <div className="relative z-10 bg-[#0a0a0b] border border-white/10 rounded-2xl p-1 shadow-2xl terminal-glow">
            <div className="bg-zinc-900/50 rounded-t-xl p-3 border-b border-white/5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="ml-auto text-[10px] font-mono text-zinc-600">picoclaw-ai-terminal</div>
            </div>
            <div className="p-6 font-mono text-xs space-y-3 min-h-[300px]">
              <div className="text-emerald-500">$ picoclaw docker install</div>
              <div className="text-zinc-500">/ Checking system architecture: x86_64</div>
              <div className="text-zinc-500">/ Installing Docker Engine...</div>
              <div className="text-zinc-300 flex items-center gap-2">
                <Check size={12} className="text-emerald-500" />
                Docker 24.0.7 active
              </div>
              <div className="text-emerald-500 pt-2">$ picoclaw ai full setup</div>
              <div className="text-zinc-500">/ Initializing NPU drivers (Maix-III)</div>
              <div className="text-zinc-500">/ Pulling AI runtime container...</div>
              <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="bg-emerald-500 h-full"
                />
              </div>
              <div className="text-emerald-400 pt-2">System Ready. Neural Link Active.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PicoConsole = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isProcessing]);

  const handleCommand = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsProcessing(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are the PicoClaw AI Engine. You provide direct, technical, and helpful assistance for Sipeed hardware, Docker, and AI deployments. Keep responses concise and focused on commands and technical details. No fluff.",
        }
      });

      const aiText = response.text || "Command failed. Check connection.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
      
      // Optional voice feedback
      speak(aiText);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error: Neural link interrupted." }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const speak = async (text: string) => {
    setIsSpeaking(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Fenrir' } },
          },
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (audioRef.current) audioRef.current.pause();
        audioRef.current = new Audio(`data:audio/wav;base64,${base64Audio}`);
        audioRef.current.onended = () => setIsSpeaking(false);
        await audioRef.current.play();
      } else {
        setIsSpeaking(false);
      }
    } catch (e) {
      setIsSpeaking(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0a0a0b]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">PicoClaw AI Engine</h2>
            <p className="text-zinc-500 text-sm font-mono">Direct interface with local intelligence.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Online</span>
            </div>
          </div>
        </div>

        <div className="bg-black border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
          <div 
            ref={scrollRef}
            className="h-[450px] overflow-y-auto p-6 space-y-6 font-mono text-sm scrollbar-hide"
          >
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-zinc-700 space-y-4">
                <Command size={40} className="opacity-20" />
                <p className="text-xs uppercase tracking-[0.3em]">Awaiting Command Input</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i}
                className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}
              >
                <div className={cn(
                  "px-4 py-2 rounded-xl max-w-[90%] leading-relaxed",
                  msg.role === 'user' ? "bg-emerald-500 text-black font-bold" : "bg-zinc-900 text-zinc-300 border border-white/5"
                )}>
                  {msg.role === 'user' && <span className="mr-2 opacity-50">$</span>}
                  {msg.text}
                </div>
                <span className="text-[9px] text-zinc-600 mt-1 uppercase tracking-widest">
                  {msg.role === 'user' ? 'Local User' : 'PicoClaw AI'}
                </span>
              </motion.div>
            ))}
            {isProcessing && (
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs">
                <Loader2 size={14} className="animate-spin" />
                <span>Processing...</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900/50 border-t border-white/5 flex gap-3">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 font-mono text-sm">$</div>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                placeholder="Enter command or query..."
                className="w-full bg-black border border-white/10 rounded-xl pl-8 pr-12 py-3.5 text-sm font-mono text-emerald-400 focus:outline-none focus:border-emerald-500/50 transition-all"
              />
              <button 
                onClick={handleCommand}
                disabled={isProcessing}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <button 
              className={cn(
                "p-3.5 rounded-xl border transition-all flex items-center justify-center",
                isSpeaking 
                  ? "bg-emerald-500 text-black border-emerald-500" 
                  : "bg-black text-zinc-500 border-white/10 hover:border-emerald-500/50"
              )}
            >
              <Mic size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureGrid = () => (
  <section className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Box, title: 'Containerized', desc: 'Full Docker integration for isolated, reproducible AI environments.' },
          { icon: Code2, title: 'NPU Optimized', desc: 'Direct driver access for Maix-III and other Sipeed hardware accelerators.' },
          { icon: ShieldCheck, title: 'Verified', desc: 'Automated checksum verification for all toolchains and AI models.' },
        ].map((f, i) => (
          <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
              <f.icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-mono">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
          <TerminalIcon className="text-black w-4 h-4" />
        </div>
        <span className="font-mono font-bold text-sm tracking-tighter text-white">PICOCLAW AI</span>
      </div>
      <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
        © 2026 Sipeed Intelligence. All systems operational.
      </div>
      <div className="flex gap-6">
        <Github className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={18} />
        <Globe className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={18} />
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050506] text-zinc-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <Nav />
      <main>
        <Hero />
        <PicoConsole />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
