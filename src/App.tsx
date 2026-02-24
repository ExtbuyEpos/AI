/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Globe, 
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
  Loader2
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Cpu className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-xl tracking-tighter">PICOCLAW</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Documentation</a>
        <a href="#" className="hover:text-white transition-colors">Hardware</a>
        <a href="#" className="hover:text-white transition-colors">Community</a>
        <a href="https://github.com/sipeed/picoclaw" className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full hover:bg-emerald-400 transition-colors">
          <Github size={16} />
          GitHub
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
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
            <Zap size={12} />
            DOCKER + AI WORKFLOW ENABLED
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
            DOCKER FIRST. <br />
            <span className="text-emerald-500 italic">AI POWERED.</span> <br />
            FULL SETUP.
          </h1>
          <p className="text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
            Install Docker with one command, then launch the full PicoClaw AI suite inside your containerized environment. The ultimate embedded AI workflow.
          </p>
          
          <div className="space-y-6 max-w-xl">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Step 1: Install PicoClaw</label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-emerald-500 rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <button 
                  onClick={() => copyToClipboard(installCmd, 'base')}
                  className="relative flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-white/10 rounded-xl font-mono text-sm hover:border-emerald-500/50 transition-all w-full"
                >
                  <Terminal size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 truncate flex-1 text-left">{installCmd}</span>
                  {copied === 'base' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-zinc-500" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Step 2: Docker + AI Full Setup</label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-emerald-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <button 
                  onClick={() => copyToClipboard(workflowCmd, 'workflow')}
                  className="relative flex items-center gap-3 px-6 py-5 bg-zinc-900 border border-emerald-500/20 rounded-xl font-mono text-sm hover:border-emerald-500/50 transition-all w-full"
                >
                  <Zap size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-emerald-400 font-bold truncate flex-1 text-left">{workflowCmd}</span>
                  {copied === 'workflow' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} className="text-zinc-500" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl w-full">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-auto text-[10px] font-mono text-zinc-500 uppercase tracking-widest">picoclaw-workflow-v1.2.0</div>
            </div>
            <div className="font-mono text-sm space-y-2 p-4 bg-black/50 rounded-lg border border-white/5">
              <div className="text-emerald-400">$ picoclaw docker install</div>
              <div className="text-zinc-500">Detecting OS: Ubuntu 22.04 LTS...</div>
              <div className="text-zinc-300 flex items-center gap-2">
                <Check size={14} className="text-emerald-500" />
                Docker Engine installed successfully
              </div>
              <div className="text-emerald-400 pt-2">$ picoclaw ai full setup</div>
              <div className="text-zinc-500">Initializing AI container...</div>
              <div className="text-zinc-300 flex items-center gap-2">
                <Check size={14} className="text-emerald-500" />
                NPU Driver: Maix-III Active
              </div>
              <div className="text-zinc-500">Pulling AI models into Docker...</div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-emerald-500 h-full"
                />
              </div>
              <div className="text-emerald-400 pt-2">Workflow complete. System ready.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-all group">
    <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 px-6 bg-zinc-950">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Built for Speed.</h2>
        <p className="text-zinc-400 max-w-2xl">Everything you need to get your Sipeed hardware running in seconds, not hours.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={Layers} 
          title="Docker Ready" 
          description="Instant Docker engine installation and container management for embedded systems."
        />
        <FeatureCard 
          icon={Cpu} 
          title="AI Full Setup" 
          description="Automated NPU driver loading and model deployment toolchains for Maix-III and more."
        />
        <FeatureCard 
          icon={Monitor} 
          title="Cross-Platform" 
          description="Native support for Windows, macOS (Intel/M1), and Linux distributions."
        />
        <FeatureCard 
          icon={ShieldCheck} 
          title="Secure & Reliable" 
          description="Verified toolchains and automated hardware detection for peace of mind."
        />
      </div>
    </div>
  </section>
);

const PlatformBadge = ({ name }: { name: string }) => (
  <div className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-full text-sm font-mono text-zinc-400 flex items-center gap-2">
    <Globe size={14} />
    {name}
  </div>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
            <Cpu className="text-black w-4 h-4" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tighter">PICOCLAW</span>
        </div>
        <p className="text-zinc-500 text-sm">© 2026 Sipeed. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <PlatformBadge name="Windows" />
        <PlatformBadge name="macOS" />
        <PlatformBadge name="Linux" />
        <PlatformBadge name="FreeBSD" />
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
        <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Globe size={20} /></a>
      </div>
    </div>
  </footer>
);

const AIConsole = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are the PicoClaw AI Assistant. You help users with Sipeed hardware, Docker, and AI deployments. Keep responses concise and technical.",
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
      
      // Auto-speak the response
      speak(aiText);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI engine." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const speak = async (text: string) => {
    setIsSpeaking(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Speak this clearly: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Puck' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
        audio.onended = () => setIsSpeaking(false);
        await audio.play();
      } else {
        setIsSpeaking(false);
      }
    } catch (error) {
      console.error("TTS Error:", error);
      setIsSpeaking(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Volume2 size={12} />
            LIVE AI INTERFACE
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Real-time AI Console</h2>
          <p className="text-zinc-400">Experience the power of PicoClaw AI with real-time text and voice interaction.</p>
        </div>

        <div className="bg-zinc-900/80 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="h-[400px] overflow-y-auto p-6 space-y-4 font-mono text-sm scrollbar-hide">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
                <MessageSquare size={48} className="opacity-20" />
                <p>System initialized. Waiting for input...</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={i} 
                className={cn(
                  "flex flex-col max-w-[80%]",
                  msg.role === 'user' ? "ml-auto items-end" : "items-start"
                )}
              >
                <div className={cn(
                  "px-4 py-2 rounded-2xl",
                  msg.role === 'user' ? "bg-emerald-500 text-black font-bold" : "bg-zinc-800 text-zinc-300 border border-white/5"
                )}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest">
                  {msg.role === 'user' ? 'Local User' : 'PicoClaw AI'}
                </span>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-emerald-500">
                <Loader2 size={14} className="animate-spin" />
                <span className="text-xs animate-pulse">AI is thinking...</span>
              </div>
            )}
          </div>

          <div className="p-4 bg-black/40 border-t border-white/5 flex gap-3">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Maix-III, Docker, or NPU setup..."
                className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500/50 transition-all pr-12"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <button 
              className={cn(
                "p-3 rounded-xl border transition-all flex items-center justify-center",
                isSpeaking 
                  ? "bg-emerald-500 text-black border-emerald-500 animate-pulse" 
                  : "bg-zinc-800 text-zinc-400 border-white/10 hover:border-emerald-500/50"
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

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
      <Nav />
      <main>
        <Hero />
        <AIConsole />
        <Features />
        
        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 tracking-tight">Ready to start?</h2>
            <p className="text-xl text-zinc-400 mb-12">Join thousands of developers using PicoClaw for their Sipeed projects.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-10 py-5 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Get Started Now
                <ChevronRight size={20} />
              </button>
              <button className="px-10 py-5 bg-zinc-900 border border-white/10 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                View on GitHub
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
