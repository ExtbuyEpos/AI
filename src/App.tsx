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
  Camera,
  Video,
  Image as ImageIcon,
  TrendingUp,
  Coins,
  Share2,
  Globe2,
  Search,
  Settings,
  Menu,
  X,
  Sparkles,
  Play,
  Satellite
} from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-prestige rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">AI FUTURE</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-400">
          {['Vision', 'Intelligence', 'Ecosystem', 'Trading', 'Social'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-all hover:tracking-widest duration-300 uppercase tracking-wider text-[11px]">{item}</a>
          ))}
          <button className="px-6 py-2.5 bg-white text-black rounded-full font-bold hover:bg-accent transition-all hover:scale-105 shadow-xl">
            ENTER PORTAL
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
    <div className="absolute inset-0 bg-mesh opacity-50" />
    <div className="max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
          <Satellite size={14} className="animate-pulse" />
          Satellite Link Established
        </div>
        <h1 className="text-7xl md:text-[10rem] font-extrabold tracking-tighter leading-[0.85] mb-8">
          THE <span className="text-glow text-accent">FUTURE</span> <br />
          IS <span className="italic font-light opacity-80">ALL-IN-ONE.</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light">
          Voice, Video, Trading, and Global Intelligence. One platform to solve every problem, generate any reality, and handle your digital life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
          <button className="px-10 py-5 bg-accent text-black font-black rounded-2xl hover:bg-white transition-all hover:scale-105 shadow-[0_0_30px_rgba(0,242,255,0.4)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
            Launch Intelligence
            <ChevronRight size={20} />
          </button>
          <button className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
            View Ecosystem
          </button>
        </div>
      </motion.div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] aspect-square bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute left-[-10%] bottom-0 w-[40%] aspect-square bg-prestige/10 rounded-full blur-[100px] pointer-events-none" />
  </section>
);

const FeatureSection = () => (
  <section className="py-24 px-6 bg-[#050508]" id="ecosystem">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">ALL-IN-ONE <span className="text-accent">DOMINANCE.</span></h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">AI FUTURE isn't just a tool. It's your digital sovereign agent.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: ImageIcon, title: 'Reality Engine', desc: 'Generate 4K images and cinematic video from simple neural prompts.' },
          { icon: Coins, title: 'Quantum Trading', desc: 'Real-time crypto and stock analysis with automated execution logic.' },
          { icon: Share2, title: 'Social Architect', desc: 'Full handling of your social presence, content creation, and engagement.' },
          { icon: Globe, title: 'Global Grounding', desc: 'Live satellite and internet access for up-to-the-second world data.' },
          { icon: ShieldCheck, title: 'Neural Security', desc: 'End-to-end encrypted intelligence that protects your digital identity.' },
          { icon: Zap, title: 'Instant Solutions', desc: 'From coding to complex problem solving, get answers in milliseconds.' },
        ].map((f, i) => (
          <div key={i} className="p-10 glass rounded-[2.5rem] hover:border-accent/50 transition-all group">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-black transition-all duration-500">
              <f.icon size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
            <p className="text-zinc-400 leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Sparkles className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tighter">AI FUTURE</span>
        </div>
        <p className="text-zinc-500 max-w-sm leading-relaxed">
          The ultimate convergence of human intent and artificial intelligence. Built for the next century of digital evolution.
        </p>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Intelligence</h4>
        <ul className="space-y-4 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-accent transition-colors">Neural Link</a></li>
          <li><a href="#" className="hover:text-accent transition-colors">Reality Engine</a></li>
          <li><a href="#" className="hover:text-accent transition-colors">Market Pulse</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Connect</h4>
        <div className="flex gap-6">
          <Github className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          <Share2 className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
          <Globe className="text-zinc-500 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
      <span>© 2026 AI FUTURE CORP</span>
      <span>System Status: Optimal</span>
    </div>
  </footer>
);

const RealTimePortal = () => {
  const [mode, setMode] = useState<'text' | 'voice' | 'video' | 'system'>('text');
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string, type?: 'image' | 'video' | 'data' | 'system', data?: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkApiKey();
  }, []);

  const openKeySelector = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  useEffect(() => {
    if (mode === 'video') {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch(err => console.error("Media Error:", err));
    } else {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    }
  }, [mode]);

  const handleAction = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsProcessing(true);

    try {
      // Detect if user wants to generate image or video
      const isImageRequest = userMsg.toLowerCase().includes('generate image') || userMsg.toLowerCase().includes('draw') || userMsg.toLowerCase().includes('picture');
      const isVideoRequest = userMsg.toLowerCase().includes('generate video') || userMsg.toLowerCase().includes('make a video');
      const isSystemRequest = userMsg.toLowerCase().includes('install') || userMsg.toLowerCase().includes('docker') || userMsg.toLowerCase().includes('setup');

      if (isImageRequest) {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: userMsg }] },
        });
        
        let imageUrl = '';
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
        
        if (imageUrl) {
          setMessages(prev => [...prev, { role: 'ai', text: "Image generated successfully.", type: 'image', data: imageUrl }]);
        } else {
          setMessages(prev => [...prev, { role: 'ai', text: response.text || "I couldn't generate the image." }]);
        }
      } else if (isVideoRequest) {
        if (!hasApiKey) {
          setMessages(prev => [...prev, { role: 'ai', text: "Video generation requires a paid API key. Please select one using the button below." }]);
          return;
        }

        setMessages(prev => [...prev, { role: 'ai', text: "Initializing Veo Engine... This may take a few minutes." }]);
        
        let operation = await ai.models.generateVideos({
          model: 'veo-3.1-fast-generate-preview',
          prompt: userMsg,
          config: { numberOfVideos: 1, resolution: '720p', aspectRatio: '16:9' }
        });

        while (!operation.done) {
          await new Promise(resolve => setTimeout(resolve, 10000));
          operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (downloadLink) {
          setMessages(prev => [...prev, { role: 'ai', text: "Video generation complete.", type: 'video', data: downloadLink }]);
        }
      } else if (isSystemRequest) {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          text: "Accessing PicoClaw Deployment Protocols...", 
          type: 'system' 
        }]);
      } else {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-pro-preview",
          contents: userMsg,
          config: {
            tools: [{ googleSearch: {} }],
            systemInstruction: "You are AI FUTURE, the ultimate all-in-one intelligence. You have full access to internet, satellite data, trading markets, and creative generation. Be bold, futuristic, and extremely helpful. If asked for trading/crypto, provide real-time insights using your search tool. If asked about installation or docker, refer to the PicoClaw deployment protocols.",
          }
        });

        const aiText = response.text || "Intelligence link unstable. Retrying...";
        setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
        
        if (mode !== 'text') {
          speak(aiText);
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Critical system error in neural link." }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const speak = async (text: string) => {
    try {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
          },
        },
      });
      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        audioRef.current = new Audio(`data:audio/wav;base64,${base64Audio}`);
        await audioRef.current.play();
      }
    } catch (e) { console.error(e); }
  };

  return (
    <section className="py-24 px-6 relative" id="vision">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Main Interface */}
          <div className="glass rounded-[2rem] overflow-hidden flex flex-col h-[700px] relative">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex gap-2">
                {['text', 'voice', 'video', 'system'].map((m) => (
                  <button 
                    key={m}
                    onClick={() => setMode(m as any)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                      mode === m ? "bg-accent text-black" : "hover:bg-white/10 text-zinc-400"
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-accent text-[10px] font-mono">
                <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                LIVE_UPLINK_ACTIVE
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {mode === 'system' && (
                <div className="space-y-6 font-mono">
                  <div className="p-6 glass rounded-2xl border-accent/20">
                    <h4 className="text-accent text-xs font-bold mb-4 uppercase tracking-widest">PicoClaw Deployment Protocols</h4>
                    <div className="space-y-3 text-[11px]">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-zinc-500">OS Target</span>
                        <span className="text-white">Linux / macOS / Windows</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-zinc-500">Docker Status</span>
                        <span className="text-emerald-400">Ready</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-zinc-500">NPU Driver</span>
                        <span className="text-accent">Maix-III Active</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-black rounded-xl border border-white/10">
                      <code className="text-[10px] text-accent">git clone https://github.com/sipeed/picoclaw && cd picoclaw && picoclaw onboard</code>
                    </div>
                    <div className="mt-3 p-4 bg-black rounded-xl border border-white/10">
                      <code className="text-[10px] text-emerald-400">picoclaw docker install && picoclaw ai full setup</code>
                    </div>
                  </div>
                  <div className="p-6 glass rounded-2xl border-prestige/20">
                    <h4 className="text-prestige text-xs font-bold mb-4 uppercase tracking-widest">Neural Link Status</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ width: ['20%', '90%', '40%', '80%'] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="h-full bg-prestige"
                        />
                      </div>
                      <span className="text-[10px] text-zinc-500">LATENCY: 12ms</span>
                    </div>
                  </div>
                </div>
              )}

              {mode === 'video' && (
                <div className="absolute inset-0 z-0 bg-black">
                  <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover opacity-40 grayscale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="w-24 h-24 border-2 border-accent rounded-full flex items-center justify-center animate-pulse">
                      <Video className="text-accent w-10 h-10" />
                    </div>
                    <p className="mt-4 text-accent font-mono text-xs tracking-widest">ANALYZING_VISUAL_FEED</p>
                  </div>
                </div>
              )}

              <div className="relative z-10 space-y-6">
                {messages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i}
                    className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}
                  >
                    <div className={cn(
                      "px-6 py-4 rounded-2xl max-w-[85%] text-sm leading-relaxed",
                      msg.role === 'user' ? "bg-accent text-black font-bold" : "glass border-white/10 text-zinc-200"
                    )}>
                      {msg.text}
                      {msg.type === 'image' && msg.data && (
                        <img src={msg.data} alt="Generated" className="mt-4 rounded-xl w-full border border-white/10" />
                      )}
                      {msg.type === 'video' && msg.data && (
                        <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                          <Video className="text-accent" />
                          <span className="text-xs font-mono">Video Ready: {msg.data}</span>
                        </div>
                      )}
                      {msg.type === 'system' && (
                        <div className="mt-4 space-y-2">
                          <div className="p-3 bg-black rounded-lg border border-white/10 font-mono text-[10px] text-accent">
                            $ picoclaw docker install
                          </div>
                          <div className="p-3 bg-black rounded-lg border border-white/10 font-mono text-[10px] text-emerald-400">
                            $ picoclaw ai full setup
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isProcessing && (
                  <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.3em]">
                    <Loader2 size={14} className="animate-spin" />
                    PROCESSING_NEURAL_DATA
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 bg-black/40 border-t border-white/5 flex flex-col gap-4 relative z-10">
              {!hasApiKey && (
                <div className="flex items-center justify-between px-4 py-2 bg-prestige/10 border border-prestige/20 rounded-xl">
                  <span className="text-[10px] font-bold text-prestige uppercase tracking-widest">Veo Video Engine Locked</span>
                  <button 
                    onClick={openKeySelector}
                    className="px-3 py-1 bg-prestige text-white text-[10px] font-bold rounded-lg hover:bg-white hover:text-black transition-all"
                  >
                    Select Key
                  </button>
                </div>
              )}
              <div className="flex gap-4">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAction()}
                  placeholder="Command AI Future..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent transition-all"
                />
                <button 
                  onClick={handleAction}
                  className="w-14 h-14 bg-accent text-black rounded-2xl flex items-center justify-center hover:scale-105 transition-all shadow-lg"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel - Real-time Data */}
          <div className="space-y-6">
            <div className="glass rounded-[2rem] p-8">
              <h3 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <TrendingUp size={14} />
                Market Pulse
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'BTC/USD', price: '98,432.10', change: '+4.2%' },
                  { name: 'ETH/USD', price: '3,124.50', change: '+2.1%' },
                  { name: 'SOL/USD', price: '184.22', change: '+8.4%' },
                ].map((coin) => (
                  <div key={coin.name} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <div className="text-[10px] text-zinc-500 font-bold">{coin.name}</div>
                      <div className="text-sm font-mono font-bold">{coin.price}</div>
                    </div>
                    <div className="text-emerald-400 text-xs font-bold">{coin.change}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-[2rem] p-8">
              <h3 className="text-xs font-bold text-prestige uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Globe2 size={14} />
                Satellite Feed
              </h3>
              <div className="aspect-video bg-black rounded-2xl overflow-hidden relative group cursor-pointer mb-4">
                <img src="https://picsum.photos/seed/satellite/400/225" className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white w-8 h-8 opacity-50 group-hover:opacity-100 transition-all" />
                </div>
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/40">LAT: 34.0522 N | LON: 118.2437 W</div>
              </div>
              <button className="w-full py-3 glass border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-accent hover:border-accent/30 transition-all">
                Request Global Uplink
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#020205] text-white font-sans selection:bg-accent/30 selection:text-accent">
      <Nav />
      <main>
        <Hero />
        <RealTimePortal />
        <FeatureSection />
        
        {/* CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tighter">EVOLVE <br /> <span className="text-accent">TODAY.</span></h2>
            <button className="px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-accent transition-all hover:scale-110 shadow-2xl uppercase tracking-[0.2em] text-sm">
              Initialize Neural Link
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
