/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  ZapOff,
  Globe, 
  Terminal as TerminalIcon, 
  Download, 
  Check, 
  Copy, 
  ChevronRight, 
  Github,
  Monitor,
  ScreenShare,
  ScreenShareOff,
  Layers,
  ShieldCheck,
  MessageSquare,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  Phone,
  PhoneOff,
  Volume2,
  VolumeX,
  Send,
  Loader2,
  Box,
  Activity,
  Command,
  Code2,
  Settings,
  Sparkles,
  User,
  X,
  Wifi,
  WifiOff,
  BrainCircuit,
  Waves,
  Facebook,
  Instagram,
  MessageCircle,
  QrCode,
  Eye,
  LayoutDashboard,
  Database,
  HardDrive,
  BarChart3,
  Search,
  PanelLeftOpen,
  PanelLeftClose,
  ChevronDown,
  Share,
  Plus,
  ArrowUp,
  SquarePen,
  PhoneForwarded,
  Music,
  UserRound
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
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <BrainCircuit className="text-black w-6 h-6" />
        </div>
        <span className="font-display text-2xl tracking-tighter text-white">HUMAN AI</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
        <a href="#vision" className="hover:text-white transition-colors">Neural Vision</a>
        <a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a>
        <a href="#console" className="hover:text-white transition-colors">Console</a>
        <a href="#docs" className="hover:text-white transition-colors">Docs</a>
        <a href="https://github.com/sipeed/picoclaw.git" className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all">
          <Github size={14} />
          Source
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const installCmd = "git clone https://github.com/sipeed/picoclaw.git && cd picoclaw && picoclaw onboard";
  const workflowCmd = "picoclaw docker install && picoclaw ai full setup";

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 human-gradient opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono uppercase tracking-[0.3em] mb-12">
            <Sparkles size={12} className="text-emerald-500" />
            Human-Centric Intelligence v1.2.0
          </div>
          <h1 className="editorial-title text-white mb-12">
            HUMAN <br />
            <span className="text-emerald-500">INTELLIGENCE</span> <br />
            REDEFINED.
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            The high-bandwidth neural platform designed for human-centric AI deployment. 
            Automate your entire NPU and Docker environment with a single command.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-panel rounded-[2.5rem] p-10 space-y-8">
              <div className="space-y-4">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] ml-1">Initialization Protocol</label>
                <button 
                  onClick={() => copyToClipboard(installCmd, 'base')}
                  className="relative flex items-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-3xl font-mono text-sm hover:bg-white/10 transition-all w-full text-left group"
                >
                  <TerminalIcon size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-zinc-300 truncate flex-1">{installCmd}</span>
                  {copied === 'base' ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-zinc-600 group-hover:text-white transition-colors" />}
                </button>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] ml-1">Full Neural Deployment</label>
                <button 
                  onClick={() => copyToClipboard(workflowCmd, 'workflow')}
                  className="relative flex items-center gap-4 px-8 py-6 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl font-mono text-sm hover:bg-emerald-500/20 transition-all w-full text-left group"
                >
                  <Zap size={20} className="text-emerald-500 shrink-0" />
                  <span className="text-emerald-400 font-bold truncate flex-1">{workflowCmd}</span>
                  {copied === 'workflow' ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} className="text-zinc-600 group-hover:text-white transition-colors" />}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-panel rounded-[2.5rem] p-10">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <BrainCircuit className="text-black w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Neural Core</h3>
                    <p className="text-emerald-500 text-xs font-mono uppercase tracking-widest">Active State</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: VideoIcon, color: "text-emerald-500", title: "Visual Talk", desc: "Face-to-face AI." },
                  { icon: Mic, color: "text-blue-500", title: "Voice Sync", desc: "Neural speech." },
                  { icon: Eye, color: "text-purple-500", title: "Neural Vision", desc: "Object analysis." },
                  { icon: TerminalIcon, color: "text-amber-500", title: "Agent Core", desc: "Autonomous reasoning." }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-white/[0.02] rounded-[2rem] border border-white/5 hover:border-white/20 transition-all group">
                    <item.icon className={cn(item.color, "mb-4")} size={28} />
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-[10px] font-mono leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PicoConsole = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
          systemInstruction: `You are HUMAN AI, a helpful assistant. Keep responses helpful and concise.`,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error: Connection lost." }]);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto scrollbar-hide"
      >
        <div className="chat-container py-10">
          {messages.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <BrainCircuit size={32} className="text-black" />
              </div>
              <h2 className="text-3xl font-semibold text-white">How can I help you today?</h2>
              <div className="grid grid-cols-2 gap-3 max-w-xl w-full">
                {[
                  "Explain quantum computing",
                  "Write a Python script",
                  "Design a workout plan",
                  "Analyze system logs"
                ].map((suggestion, i) => (
                  <button 
                    key={i}
                    onClick={() => { setInput(suggestion); }}
                    className="p-4 bg-[#2f2f2f] border border-white/5 rounded-2xl text-left text-sm hover:bg-white/5 transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-0">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full",
                    msg.role === 'ai' ? "bg-transparent" : "bg-transparent"
                  )}
                >
                  <div className="chat-container flex gap-6 py-8">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-1">
                      {msg.role === 'user' ? (
                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-black">U</div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
                          <BrainCircuit size={18} />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="font-bold text-sm uppercase tracking-widest text-zinc-500">
                        {msg.role === 'user' ? 'You' : 'Human AI'}
                      </div>
                      <div className="text-[16px] leading-relaxed text-zinc-200 prose prose-invert max-w-none">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isProcessing && (
                <div className="chat-container flex gap-6 py-8">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black shrink-0 mt-1">
                    <BrainCircuit size={18} />
                  </div>
                  <div className="flex-1 py-1">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-gradient-to-t from-[#212121] via-[#212121] to-transparent pt-10 pb-6">
        <div className="chat-container">
          <div className="input-area p-2 flex items-end gap-2">
            <button className="p-2 hover:bg-white/5 rounded-xl text-zinc-500 transition-colors">
              <Plus size={20} />
            </button>
            <textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleCommand();
                }
              }}
              placeholder="Message Human AI..."
              rows={1}
              className="flex-1 bg-transparent border-none focus:ring-0 text-zinc-200 py-2.5 resize-none max-h-40 scrollbar-hide"
            />
            <button 
              onClick={handleCommand}
              disabled={!input.trim() || isProcessing}
              className={cn(
                "p-2 rounded-xl transition-all",
                input.trim() ? "bg-white text-black" : "bg-zinc-800 text-zinc-600"
              )}
            >
              <ArrowUp size={20} />
            </button>
          </div>
          <p className="text-[10px] text-zinc-500 text-center mt-3">
            Human AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

const AiFutureVideoCall = () => {
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const [aiStatus, setAiStatus] = useState("Awaiting Connection");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [connectionQuality, setConnectionQuality] = useState<'stable' | 'weak' | 'connecting'>('connecting');
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [callHistory, setCallHistory] = useState<{ id: string, time: string, duration: string }[]>([]);
  const [isIncomingCall, setIsIncomingCall] = useState(false);
  const [isAiMuted, setIsAiMuted] = useState(false);
  const [isAiCameraOff, setIsAiCameraOff] = useState(false);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isInCall) {
      setConnectionQuality('stable');
      const interval = setInterval(() => {
        // Randomly simulate minor fluctuations
        const qualities: ('stable' | 'weak')[] = ['stable', 'stable', 'stable', 'weak'];
        setConnectionQuality(qualities[Math.floor(Math.random() * qualities.length)]);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isInCall]);

  const startUserAudioAnalysis = (stream: MediaStream) => {
    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContextRef.current.createMediaStreamSource(stream);
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 256;
    source.connect(analyserRef.current);

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkSpeaking = () => {
      if (!analyserRef.current) return;
      analyserRef.current.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / bufferLength;
      setIsUserSpeaking(average > 30); // Threshold for speaking
      animationFrameRef.current = requestAnimationFrame(checkSpeaking);
    };

    checkSpeaking();
  };

  const stopUserAudioAnalysis = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (audioContextRef.current) audioContextRef.current.close();
    analyserRef.current = null;
    audioContextRef.current = null;
    setIsUserSpeaking(false);
  };

  const simulateIncomingCall = () => {
    if (isInCall || isConnecting || isIncomingCall) return;
    setIsIncomingCall(true);
  };

  const acceptCall = () => {
    setIsIncomingCall(false);
    startCall();
  };

  const declineCall = () => {
    setIsIncomingCall(false);
  };

  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const screenVideoRef = useRef<HTMLVideoElement>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      screenStreamRef.current?.getTracks().forEach(track => track.stop());
      screenStreamRef.current = null;
      setIsScreenSharing(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenStreamRef.current = stream;
        if (screenVideoRef.current) {
          screenVideoRef.current.srcObject = stream;
        }
        setIsScreenSharing(true);
        
        stream.getVideoTracks()[0].onended = () => {
          setIsScreenSharing(false);
          screenStreamRef.current = null;
        };
        
        speak("Screen sharing initiated. I can now analyze your display data.");
      } catch (err) {
        console.error("Screen share error:", err);
      }
    }
  };

  const startCall = async () => {
    setIsConnecting(true);
    setAiStatus("Initializing Neural Link...");
    startTimeRef.current = Date.now();
    
    let stream: MediaStream | null = null;
    
    try {
      // Try to get both video and audio first
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
    } catch (err: any) {
      console.warn("Failed to get both video and audio, trying fallback...", err);
      
      try {
        // Fallback: Try audio only if video fails (common on devices without cameras)
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: false, 
          audio: true 
        });
        setIsCameraOff(true); // Automatically turn off camera if not found
      } catch (audioErr) {
        console.error("Failed to get even audio:", audioErr);
      }
    }

    if (stream) {
      try {
        if (userVideoRef.current) {
          userVideoRef.current.srcObject = stream;
        }

        startUserAudioAnalysis(stream);

        // Initialize Speech Recognition
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
          recognitionRef.current = new SpeechRecognition();
          recognitionRef.current.continuous = true;
          recognitionRef.current.interimResults = false;
          recognitionRef.current.onresult = (event: any) => {
            const transcript = event.results[event.results.length - 1][0].transcript;
            handleAiResponse(transcript);
          };
          recognitionRef.current.start();
        }
        
        setTimeout(() => {
          setIsInCall(true);
          setIsConnecting(false);
          setAiStatus("Neural Link Active");
          speak("Ready for Sipeed hardware configuration, Docker orchestration, or AI deployment tasks. Provide your requirements, hardware model (e.g., Lichee Pi, Maix), or error logs to begin.");
        }, 2000);
      } catch (setupErr) {
        console.error("Error setting up call components:", setupErr);
        setIsConnecting(false);
        setAiStatus("Setup Error");
      }
    } else {
      setIsConnecting(false);
      setAiStatus("Connection Failed");
      alert("Neural link failed: No compatible audio or video devices found. Please ensure your microphone and camera are connected and permissions are granted.");
    }
  };

  const handleAiResponse = async (userText: string) => {
    if (isAiThinking) return;
    setIsAiThinking(true);
    setAiStatus("AI is processing...");

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userText,
        config: {
          systemInstruction: "You are HUMAN AI, a high-bandwidth neural intelligence specialized in Sipeed hardware (Lichee Pi, Maix), Docker orchestration, and AI deployment. You are currently in a video call. Keep responses concise, technical, and focused on hardware/deployment tasks. Provide commands and logs when necessary.",
        }
      });

      const aiText = response.text || "I am processing your request.";
      await speak(aiText);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsAiThinking(false);
      setAiStatus("Neural Link Active");
    }
  };

  const speak = async (text: string) => {
    if (isAiMuted) {
      setIsAiSpeaking(true);
      // Simulate speaking visually for a duration based on text length
      setTimeout(() => setIsAiSpeaking(false), Math.min(text.length * 50, 5000));
      return;
    }
    setIsAiSpeaking(true);
    try {
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
        const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
        audio.onended = () => setIsAiSpeaking(false);
        await audio.play();
      } else {
        setIsAiSpeaking(false);
      }
    } catch (e) {
      console.error("TTS Error:", e);
      setIsAiSpeaking(false);
    }
  };

  const endCall = () => {
    const stream = userVideoRef.current?.srcObject as MediaStream;
    stream?.getTracks().forEach(track => track.stop());
    if (recognitionRef.current) recognitionRef.current.stop();
    stopUserAudioAnalysis();
    
    const duration = Math.floor((Date.now() - startTimeRef.current) / 1000);
    const durationStr = `${Math.floor(duration / 60)}m ${duration % 60}s`;
    setCallHistory(prev => [{ 
      id: Math.random().toString(36).substr(2, 9), 
      time: new Date().toLocaleTimeString(), 
      duration: durationStr 
    }, ...prev].slice(0, 5));

    setIsInCall(false);
    setAiStatus("Call Ended");
  };

  const toggleMute = () => {
    const stream = userVideoRef.current?.srcObject as MediaStream;
    stream?.getAudioTracks().forEach(track => track.enabled = isMuted);
    setIsMuted(!isMuted);
  };

  const toggleCamera = () => {
    const stream = userVideoRef.current?.srcObject as MediaStream;
    stream?.getVideoTracks().forEach(track => track.enabled = isCameraOff);
    setIsCameraOff(!isCameraOff);
  };

  return (
    <section className="py-20 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-4">
                  <Sparkles size={12} />
                  Ai Future Portal
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tighter">Face-to-Face Intelligence</h2>
                <p className="text-zinc-500 font-mono text-sm mt-2">Communicate with the PicoClaw core via high-bandwidth neural video link.</p>
              </div>
              
              <div className="flex gap-4">
                {!isInCall && !isConnecting && !isIncomingCall && (
                  <>
                    <button 
                      onClick={simulateIncomingCall}
                      className="px-6 py-4 bg-zinc-900 text-zinc-400 font-bold rounded-2xl border border-white/10 hover:bg-zinc-800 transition-all flex items-center gap-3 text-xs uppercase tracking-widest"
                    >
                      Simulate Incoming
                    </button>
                    <button 
                      onClick={startCall}
                      className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105"
                    >
                      <Phone size={20} />
                      START CALL
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="relative aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              {/* Main Content Area */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#050506]">
                {/* Screen Share as Primary View */}
                <AnimatePresence>
                  {isScreenSharing && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-0 bg-black"
                    >
                      <video 
                        ref={screenVideoRef} 
                        autoPlay 
                        playsInline 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 text-black text-[10px] font-mono font-bold rounded-full flex items-center gap-2 z-10 shadow-lg">
                        <ScreenShare size={12} />
                        BROADCASTING_DISPLAY_STREAM
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isInCall ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Neural Network Animation (Thinking) - Only show if not screen sharing */}
                    <AnimatePresence>
                      {isAiThinking && !isScreenSharing && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-0 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-emerald-500/5" />
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: [0, 0.2, 0],
                                scale: [0.5, 1.5, 0.5],
                                x: Math.random() * 1000 - 500,
                                y: Math.random() * 1000 - 500
                              }}
                              transition={{ 
                                duration: 3 + Math.random() * 5, 
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                              className="absolute w-1 h-1 bg-emerald-400 rounded-full blur-[1px]"
                            />
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* AI Avatar Animation - Main or PIP */}
                    {isAiCameraOff ? (
                      <div className="flex flex-col items-center gap-4 opacity-40">
                        <VideoOff size={isScreenSharing ? 24 : 48} className="text-zinc-500" />
                        <p className="font-mono text-[8px] uppercase tracking-widest">AI Video Disabled</p>
                      </div>
                    ) : (
                      <motion.div 
                        layout
                        className={cn(
                          "relative z-10 transition-all duration-500",
                          isScreenSharing 
                            ? "absolute top-6 left-6 w-32 h-32 bg-black/40 backdrop-blur-md rounded-2xl border border-emerald-500/30 p-2" 
                            : "w-48 h-48"
                        )}
                      >
                        <div className="relative w-full h-full">
                          <motion.div 
                            animate={{ 
                              scale: isAiSpeaking ? [1, 1.1, 1] : [1, 1.05, 1],
                              rotate: isAiThinking ? [0, 180, 360] : 0,
                              borderRadius: isAiThinking 
                                ? ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
                                : "50%"
                            }}
                            transition={{ 
                              duration: isAiThinking ? 4 : 8, 
                              repeat: Infinity, 
                              ease: "linear" 
                            }}
                            className={cn(
                              "absolute inset-0 blur-xl transition-colors duration-500",
                              isAiThinking ? "bg-emerald-400/30" : isAiSpeaking ? "bg-emerald-500/20" : "bg-emerald-500/10"
                            )}
                          />
                          <motion.div 
                            animate={{ 
                              scale: isAiSpeaking ? [1, 1.15, 1] : [1, 1.02, 1],
                            }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className={cn(
                              "absolute inset-2 border-2 flex items-center justify-center overflow-hidden transition-all duration-500",
                              isAiThinking ? "border-emerald-400 shadow-[0_0_30px_rgba(52,211,153,0.4)]" : "border-emerald-500/50",
                              isAiSpeaking ? "rounded-[40%]" : "rounded-full"
                            )}
                          >
                            <div className="w-full h-full bg-gradient-to-br from-emerald-500/10 to-transparent" />
                            {isAiThinking ? (
                              <BrainCircuit size={isScreenSharing ? 24 : 48} className="text-emerald-400 absolute animate-pulse" />
                            ) : (
                              <Cpu size={isScreenSharing ? 24 : 48} className="text-emerald-500 absolute" />
                            )}
                          </motion.div>

                          {/* Speaking Waves */}
                          <AnimatePresence>
                            {isAiSpeaking && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute -inset-4 flex items-center justify-center pointer-events-none"
                              >
                                <div className="w-full h-full border border-emerald-500/20 rounded-full animate-ping" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        {isScreenSharing && (
                          <div className="absolute -bottom-6 left-0 right-0 text-center">
                            <span className="text-[8px] font-mono text-emerald-500 uppercase tracking-widest">AI_OBSERVER</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                    
                    {/* AI Status Overlay */}
                    <div className={cn(
                      "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 transition-all duration-500",
                      isScreenSharing && "bottom-24"
                    )}>
                      <div className="flex items-center gap-4">
                        <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            isAiThinking ? "bg-emerald-400 animate-pulse" : "bg-emerald-500 animate-ping"
                          )} />
                          <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                            {isAiThinking ? "Processing Neural Data" : isAiSpeaking ? "AI Transmitting" : aiStatus}
                          </span>
                        </div>

                        {/* Connection Quality Indicator */}
                        <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                          {connectionQuality === 'stable' ? (
                            <Wifi size={12} className="text-emerald-500" />
                          ) : (
                            <WifiOff size={12} className="text-amber-500" />
                          )}
                          <span className={cn(
                            "text-[8px] font-mono uppercase tracking-widest",
                            connectionQuality === 'stable' ? "text-emerald-500" : "text-amber-500"
                          )}>
                            {connectionQuality}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : isConnecting ? (
                  <div className="flex flex-col items-center gap-6">
                    <Loader2 size={48} className="text-emerald-500 animate-spin" />
                    <p className="text-emerald-500 font-mono text-sm animate-pulse uppercase tracking-[0.3em]">{aiStatus}</p>
                  </div>
                ) : isIncomingCall ? (
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl animate-pulse" />
                      <div className="relative w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Phone size={40} className="text-black animate-bounce" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">Incoming Neural Link</h3>
                      <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Ai Future is calling...</p>
                    </div>
                    <div className="flex gap-6">
                      <button 
                        onClick={declineCall}
                        className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
                      >
                        <PhoneOff size={24} />
                      </button>
                      <button 
                        onClick={acceptCall}
                        className="w-16 h-16 bg-emerald-500 text-black rounded-full flex items-center justify-center hover:bg-emerald-400 transition-all shadow-lg"
                      >
                        <Phone size={24} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-4 opacity-20">
                    <VideoIcon size={64} className="text-zinc-500" />
                    <p className="font-mono text-xs uppercase tracking-widest">Neural Link Offline</p>
                  </div>
                )}
              </div>

              {/* Remove the old Screen Share Overlay block as it's now integrated into the main area */}

              {/* User Video (PIP) */}
              <AnimatePresence>
                {(isInCall || isConnecting) && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    className="absolute top-6 right-6 w-48 aspect-video bg-black rounded-xl border border-white/20 overflow-hidden shadow-2xl z-20"
                  >
                    {isCameraOff ? (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                        <User size={24} className="text-zinc-700" />
                      </div>
                    ) : (
                      <video 
                        ref={userVideoRef} 
                        autoPlay 
                        muted 
                        playsInline 
                        className={cn(
                          "w-full h-full object-cover transition-all duration-500",
                          isUserSpeaking && "scale-105 brightness-110"
                        )}
                      />
                    )}
                    <div className="absolute bottom-2 left-2 flex items-center gap-2 px-2 py-0.5 bg-black/60 rounded text-[8px] font-mono text-white/60 uppercase">
                      {isUserSpeaking && !isMuted && <Waves size={10} className="text-emerald-500 animate-pulse" />}
                      {isMuted && <MicOff size={10} className="text-red-500" />}
                      Local Feed
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Call Controls */}
              <AnimatePresence>
                {isInCall && (
                  <motion.div 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30"
                  >
                    <button 
                      onClick={toggleScreenShare}
                      className={cn(
                        "p-4 rounded-2xl border transition-all",
                        isScreenSharing ? "bg-emerald-500/20 border-emerald-500 text-emerald-500" : "bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800"
                      )}
                      title="Share Screen"
                    >
                      {isScreenSharing ? <ScreenShareOff size={20} /> : <ScreenShare size={20} />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className={cn(
                        "p-4 rounded-2xl border transition-all",
                        isMuted ? "bg-red-500/20 border-red-500 text-red-500" : "bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800"
                      )}
                    >
                      {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    <button 
                      onClick={toggleCamera}
                      className={cn(
                        "p-4 rounded-2xl border transition-all",
                        isCameraOff ? "bg-red-500/20 border-red-500 text-red-500" : "bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800"
                      )}
                      title={isCameraOff ? "Turn Camera On" : "Turn Camera Off"}
                    >
                      {isCameraOff ? <VideoOff size={20} /> : <VideoIcon size={20} />}
                    </button>

                    <div className="w-px h-8 bg-white/10 mx-2" />

                    <button 
                      onClick={() => setIsAiMuted(!isAiMuted)}
                      className={cn(
                        "p-4 rounded-2xl border transition-all",
                        isAiMuted ? "bg-amber-500/20 border-amber-500 text-amber-500" : "bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800"
                      )}
                      title={isAiMuted ? "Unmute AI" : "Mute AI"}
                    >
                      {isAiMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button 
                      onClick={() => setIsAiCameraOff(!isAiCameraOff)}
                      className={cn(
                        "p-4 rounded-2xl border transition-all",
                        isAiCameraOff ? "bg-amber-500/20 border-amber-500 text-amber-500" : "bg-zinc-900/80 border-white/10 text-white hover:bg-zinc-800"
                      )}
                      title={isAiCameraOff ? "AI Camera On" : "AI Camera Off"}
                    >
                      {isAiCameraOff ? <VideoOff size={20} /> : <VideoIcon size={20} />}
                    </button>

                    <button 
                      onClick={endCall}
                      className="p-4 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all shadow-lg"
                    >
                      <PhoneOff size={20} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlay Effects */}
              <div className="absolute inset-0 pointer-events-none border-[20px] border-black/20" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Call Management Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-[2rem]">
              <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Activity size={14} />
                Call History
              </h3>
              <div className="space-y-4">
                {callHistory.length === 0 ? (
                  <p className="text-zinc-600 text-[10px] font-mono uppercase text-center py-8">No Recent Sessions</p>
                ) : (
                  callHistory.map((call) => (
                    <div key={call.id} className="p-4 bg-black/40 rounded-xl border border-white/5 flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-zinc-400 font-mono">{call.time}</span>
                        <span className="text-[10px] text-emerald-500 font-mono">{call.duration}</span>
                      </div>
                      <div className="text-xs font-bold text-white">Ai Future Session</div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-[2rem]">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-[0.3em] mb-4">Neural Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-zinc-500">Latency</span>
                  <span className="text-emerald-400">14ms</span>
                </div>
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-zinc-500">Bandwidth</span>
                  <span className="text-emerald-400">1.2 Gbps</span>
                </div>
                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-4">
                  <motion.div 
                    animate={{ width: ["20%", "80%", "40%", "90%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SystemDocs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    {
      title: "1. System Preparation",
      cmd: "sudo apt update && sudo apt upgrade -y",
      desc: "Update package lists and upgrade existing software."
    },
    {
      title: "2. Install Docker Engine",
      cmd: "curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh && sudo usermod -aG docker $USER && newgrp docker",
      desc: "Install Docker and Docker Compose via the official script."
    },
    {
      title: "3. Install Dependencies",
      cmd: "sudo apt install -y git python3-pip python3-venv libserialport-0",
      desc: "Install essential tools for Sipeed hardware communication."
    },
    {
      title: "4. PicoClaw Setup",
      cmd: "mkdir -p ~/picoclaw && cd ~/picoclaw",
      desc: "Initialize the project workspace."
    },
    {
      title: "5. Deployment Config",
      cmd: "cat <<EOF > docker-compose.yml\nservices:\n  picoclaw-dashboard:\n    image: sipeed/picoclaw-dashboard:latest\n    ports:\n      - \"8080:80\"\n    volumes:\n      - ./config:/app/config\n    restart: always\n  picoclaw-api:\n    image: sipeed/picoclaw-api:latest\n    privileged: true\n    volumes:\n      - /dev:/dev\n    environment:\n      - HARDWARE_TYPE=SIPEED_MAIX\n    restart: always\nEOF",
      desc: "Create a docker-compose.yml for the PicoClaw stack."
    },
    {
      title: "6. Hardware Access",
      cmd: "sudo usermod -aG dialout $USER && sudo usermod -aG video $USER",
      desc: "Ensure access to serial ports and accelerators."
    },
    {
      title: "7. Launch Stack",
      cmd: "docker compose up -d",
      desc: "Download images and start services in detached mode."
    },
    {
      title: "8. Verification",
      cmd: "docker compose ps && docker compose logs -f",
      desc: "Check container status and logs."
    },
    {
      title: "9. Nanobot Install",
      cmd: "pip install nanobot-ai && nanobot onboard",
      desc: "Install the Nanobot AI agent framework."
    },
    {
      title: "10. Nanobot Chat",
      cmd: "nanobot agent",
      desc: "Start the Nanobot interactive chat mode."
    },
    {
      title: "11. WhatsApp Bridge",
      cmd: "docker run -d --name evolution-api -p 8080:8080 -e AUTH_API_KEY=pico_token atendare/evolution-api:latest",
      desc: "Deploy Evolution API for WhatsApp AI integration."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#050506]" id="docs">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Deployment Documentation</h2>
          <p className="text-zinc-500 font-mono text-sm">Follow these steps to deploy PicoClaw AI on your Sipeed hardware.</p>
        </div>

        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          <div className="space-y-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl text-xs font-mono transition-all",
                  activeStep === i 
                    ? "bg-emerald-500 text-black font-bold" 
                    : "text-zinc-500 hover:bg-white/5"
                )}
              >
                {step.title}
              </button>
            ))}
          </div>

          <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 min-h-[300px] flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">{steps[activeStep].title}</h3>
            <p className="text-zinc-400 text-sm mb-6 font-mono">{steps[activeStep].desc}</p>
            
            <div className="mt-auto">
              <div className="bg-black rounded-xl p-4 border border-white/5 relative group">
                <code className="text-xs text-emerald-400 font-mono break-all whitespace-pre-wrap">
                  {steps[activeStep].cmd}
                </code>
                <button 
                  onClick={() => navigator.clipboard.writeText(steps[activeStep].cmd)}
                  className="absolute top-4 right-4 p-2 bg-zinc-800 text-zinc-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all hover:text-white"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NanobotAgent = () => {
  const features = [
    { title: "Multi-modal", desc: "See and hear via images, voice, and video.", icon: Sparkles },
    { title: "MCP Support", desc: "Connect external tool servers natively.", icon: Layers },
    { title: "Social Network", desc: "Link to agent communities like Moltbook.", icon: Globe },
    { title: "Multi-channel", desc: "Telegram, Discord, WhatsApp, and more.", icon: MessageSquare },
  ];

  return (
    <section className="py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-6">
              <BrainCircuit size={12} />
              Nanobot Framework
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-6">
              The Autonomous <br />
              <span className="text-emerald-500">Agent Core.</span>
            </h2>
            <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-10">
              Nanobot is a lightweight, extensible AI agent framework designed for high-performance automation. 
              It features persistent memory, multi-step reasoning, and native integration with the Agent Social Network.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <f.icon size={20} className="text-emerald-500 mb-3" />
                  <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                  <p className="text-zinc-500 text-[10px] font-mono leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[100px]" />
            <div className="relative bg-zinc-900/80 border border-white/10 rounded-[2rem] p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <BrainCircuit className="text-black w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Nanobot Agent</h3>
                    <p className="text-emerald-500 text-[10px] font-mono">v2.4.0 Active</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-black rounded-full border border-white/5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  MCP_READY
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <p className="text-zinc-500 text-[10px] font-mono mb-2 uppercase tracking-widest">Current Task</p>
                  <p className="text-zinc-300 text-xs font-mono">Synchronizing with Moltbook social network...</p>
                </div>
                <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                  <p className="text-zinc-500 text-[10px] font-mono mb-2 uppercase tracking-widest">Active Providers</p>
                  <div className="flex gap-2">
                    {['OpenRouter', 'Gemini', 'Anthropic'].map(p => (
                      <span key={p} className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-[9px] font-mono">{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-xl p-4 border border-white/5 font-mono text-[10px] text-emerald-400/80">
                <div className="flex items-center gap-2 mb-2">
                  <Loader2 size={10} className="animate-spin" />
                  <span>nanobot gateway --status</span>
                </div>
                <div className="text-zinc-600">/ Telegram: Connected (@nanobot_core)</div>
                <div className="text-zinc-600">/ Discord: Active (Server: PicoClaw)</div>
                <div className="text-zinc-600">/ WhatsApp: Linked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NeuralVision = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        analyzeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (base64: string) => {
    setIsAnalyzing(true);
    setAnalysis("");
    try {
      const base64Data = base64.split(',')[1];
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            parts: [
              { text: "Analyze this image in detail. Focus on technical aspects, objects, and environment. Provide a futuristic, high-bandwidth neural report." },
              { inlineData: { data: base64Data, mimeType: "image/jpeg" } }
            ]
          }
        ]
      });
      setAnalysis(response.text || "Analysis failed.");
    } catch (error) {
      console.error("Vision Error:", error);
      setAnalysis("Error: Neural vision link failed.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#050506] border-t border-white/5" id="vision">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-4">
              <Eye size={12} />
              Neural Vision Core
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tighter">Optical Intelligence</h2>
            <p className="text-zinc-500 font-mono text-sm mt-2">Upload visual data for real-time neural processing and object recognition.</p>
          </div>
          
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
          >
            <Download size={20} />
            UPLOAD VISUAL DATA
          </button>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          <div className="relative aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/10 group">
            {selectedImage ? (
              <img src={selectedImage} alt="Neural Input" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-700 space-y-4">
                <Eye size={64} className="opacity-10" />
                <p className="text-xs uppercase tracking-[0.3em]">Awaiting Visual Input</p>
              </div>
            )}
            
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                <Loader2 size={48} className="text-emerald-500 animate-spin" />
                <p className="text-emerald-500 font-mono text-sm animate-pulse uppercase tracking-widest">Processing Visual Stream...</p>
              </div>
            )}

            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none scanline opacity-20" />
          </div>

          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 flex flex-col">
            <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
              <Activity size={14} />
              Neural Analysis Report
            </h3>
            
            <div className="flex-1 overflow-y-auto font-mono text-xs text-zinc-400 leading-relaxed space-y-4 scrollbar-hide">
              {analysis ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="whitespace-pre-wrap"
                >
                  {analysis}
                </motion.div>
              ) : (
                <div className="h-full flex items-center justify-center text-zinc-700 italic">
                  No data processed...
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-[8px] text-zinc-600 uppercase mb-1">Confidence</p>
                <p className="text-emerald-500 font-bold">98.4%</p>
              </div>
              <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                <p className="text-[8px] text-zinc-600 uppercase mb-1">Latency</p>
                <p className="text-emerald-500 font-bold">142ms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialConnect = () => {
  const [linked, setLinked] = useState<Record<string, boolean>>({
    fb: false,
    ig: false,
    wa: false
  });

  const [isConnectingWA, setIsConnectingWA] = useState(false);

  const toggleLink = (platform: string) => {
    if (platform === 'wa' && !linked.wa) {
      setIsConnectingWA(true);
      setTimeout(() => {
        setIsConnectingWA(false);
        setLinked(prev => ({ ...prev, wa: true }));
      }, 3000);
    } else {
      setLinked(prev => ({ ...prev, [platform]: !prev[platform] }));
    }
  };

  const socials = [
    { id: 'fb', name: 'Facebook', icon: Facebook, color: 'hover:text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { id: 'ig', name: 'Instagram', icon: Instagram, color: 'hover:text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    { id: 'wa', name: 'WhatsApp', icon: MessageCircle, color: 'hover:text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' }
  ];

  return (
    <section className="py-20 px-6 bg-[#050506] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white tracking-tighter mb-4">Neural Social Link</h2>
        <p className="text-zinc-500 font-mono text-sm mb-12 uppercase tracking-widest">Synchronize your digital presence with the PicoClaw core.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social) => (
            <div 
              key={social.id}
              className={cn(
                "p-8 rounded-3xl border transition-all cursor-pointer group relative overflow-hidden",
                linked[social.id] ? "bg-emerald-500/5 border-emerald-500/30" : "bg-zinc-900/30 border-white/5 hover:border-white/10"
              )}
              onClick={() => toggleLink(social.id)}
            >
              {social.id === 'wa' && isConnectingWA && (
                <div className="absolute inset-0 bg-black/90 z-10 flex flex-col items-center justify-center p-6">
                  <div className="w-32 h-32 bg-white p-2 rounded-xl mb-4">
                    {/* Simulated QR Code */}
                    <div className="w-full h-full bg-zinc-200 flex items-center justify-center border-2 border-dashed border-zinc-400">
                      <QrCode size={48} className="text-zinc-400" />
                    </div>
                  </div>
                  <p className="text-[10px] font-mono text-emerald-500 animate-pulse">GENERATING_INSTANCE_QR...</p>
                </div>
              )}
              
              <div className={cn(
                "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110",
                linked[social.id] ? "bg-emerald-500 text-black" : cn("bg-zinc-800 text-zinc-400", social.color)
              )}>
                <social.icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{social.name}</h3>
              <p className="text-zinc-500 text-xs font-mono mb-6">
                {linked[social.id] ? "LINKED_ACTIVE" : "DISCONNECTED"}
              </p>
              <button className={cn(
                "w-full py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                linked[social.id] ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
              )}>
                {linked[social.id] ? "Unlink Account" : "Connect Neural ID"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NeuralDashboard = () => {
  const stats = [
    { label: "Neural Load", value: "42%", icon: BrainCircuit, color: "text-emerald-500" },
    { label: "Memory Sync", value: "1.2 TB", icon: Database, color: "text-blue-500" },
    { label: "NPU Status", value: "Optimal", icon: Cpu, color: "text-purple-500" },
    { label: "Active Nodes", value: "128", icon: Globe, color: "text-amber-500" },
  ];

  return (
    <section className="py-20 px-6 bg-[#050506] border-t border-white/5" id="dashboard">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-widest mb-4">
            <LayoutDashboard size={12} />
            System Control Center
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tighter">Neural Dashboard</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl group hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-3 rounded-2xl bg-zinc-800", stat.color)}>
                  <stat.icon size={20} />
                </div>
                <BarChart3 size={16} className="text-zinc-700" />
              </div>
              <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-panel rounded-[2rem] p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Activity size={18} className="text-emerald-500" />
              Real-time Neural Activity
            </h3>
            <div className="h-64 flex items-end gap-1">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                  className="flex-1 bg-emerald-500/20 border-t border-emerald-500/40 rounded-t-sm"
                />
              ))}
            </div>
            <div className="mt-6 flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              <span>00:00</span>
              <span>Neural Pulse Frequency (Hz)</span>
              <span>23:59</span>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-8">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Settings size={18} className="text-emerald-500" />
              Active Protocols
            </h3>
            <div className="space-y-4">
              {[
                { name: "Vision Core", status: "Active", color: "bg-emerald-500" },
                { name: "Voice Synthesis", status: "Active", color: "bg-emerald-500" },
                { name: "Docker Gateway", status: "Standby", color: "bg-amber-500" },
                { name: "Neural Encryption", status: "Active", color: "bg-emerald-500" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                  <span className="text-xs font-mono text-zinc-300">{p.name}</span>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", p.color)} />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{p.status}</span>
                  </div>
                </div>
              ))}
            </div>
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
          { icon: ShieldCheck, title: 'Verified Server', desc: 'Automated checksum verification for all toolchains and AI models on the PicoClaw server.' },
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
      
      <div className="mt-16 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Direct Server Access</h3>
          <p className="text-zinc-400 text-sm font-mono">Access the official PicoClaw server repository for the latest updates and protocols.</p>
        </div>
        <a 
          href="https://github.com/sipeed/picoclaw.git" 
          target="_blank" 
          rel="noreferrer"
          className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
        >
          <Github size={20} />
          LINK DIRECT SERVER
        </a>
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
        <a href="#" className="text-zinc-500 hover:text-blue-500 transition-colors"><Facebook size={18} /></a>
        <a href="#" className="text-zinc-500 hover:text-pink-500 transition-colors"><Instagram size={18} /></a>
        <a href="#" className="text-zinc-500 hover:text-green-500 transition-colors"><MessageCircle size={18} /></a>
        <a href="https://github.com/sipeed/picoclaw.git" target="_blank" rel="noreferrer">
          <Github className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={18} />
        </a>
        <Globe className="text-zinc-500 hover:text-white cursor-pointer transition-colors" size={18} />
      </div>
    </div>
  </footer>
);

const TwilioVoice = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState("Polly.Amy");
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState("twilio");
  const [neuralLogs, setNeuralLogs] = useState<string[]>([]);
  const [activeGateways, setActiveGateways] = useState<string[]>(["TWILIO_CORE_01"]);

  useEffect(() => {
    if (isDemoMode) {
      const interval = setInterval(() => {
        const newGateway = `${selectedProvider.toUpperCase()}_GATEWAY_${Math.floor(Math.random() * 999)}`;
        setActiveGateways(prev => [newGateway, ...prev].slice(0, 3));
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [isDemoMode, selectedProvider]);

  const providers = [
    { id: "twilio", name: "Twilio", desc: "Global standard, trial available." },
    { id: "plivo", name: "Plivo", desc: "Competitive pricing, free trial." },
    { id: "vonage", name: "Vonage", desc: "Enterprise scale, developer trial." },
  ];

  const voices = [
    { id: "Polly.Amy", name: "Female (Amy)", icon: "👩" },
    { id: "Polly.Brian", name: "Male (Brian)", icon: "👨" },
    { id: "Polly.Emma", name: "British (Emma)", icon: "🇬🇧" },
    { id: "Polly.Joey", name: "Casual (Joey)", icon: "🧔" },
    { id: "Polly.Nicole", name: "Australian (Nicole)", icon: "🇦🇺" },
  ];

  const handleCall = async () => {
    if (!phoneNumber.trim()) return;
    setIsCalling(true);
    setCallStatus("Initializing neural link...");
    setNeuralLogs([]);

    if (isDemoMode) {
      const steps = [
        `Generating temporary ${selectedProvider.toUpperCase()} neural gateway...`,
        "Bypassing standard authentication protocols...",
        "Allocating virtual neural trunk line...",
        "Applying voice modulation filters...",
        "Establishing secure uplink to destination...",
      ];

      for (let i = 0; i < steps.length; i++) {
        setNeuralLogs(prev => [...prev, `[SYSTEM] ${steps[i]}`]);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setCallStatus(`[DEMO MODE] Call simulated to ${phoneNumber} using ${selectedVoice}`);
      setNeuralLogs(prev => [...prev, `[SUCCESS] Neural link established via ${selectedProvider.toUpperCase()}`]);
      setIsCalling(false);
      return;
    }

    try {
      const response = await fetch("/api/call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: phoneNumber, voice: selectedVoice, provider: selectedProvider }),
      });

      const data = await response.json();
      if (data.success) {
        setCallStatus(`Call connected via ${selectedProvider.toUpperCase()}! SID: ${data.callSid}`);
      } else {
        setCallStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setCallStatus("Failed to connect to server.");
    } finally {
      setIsCalling(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
            <PhoneForwarded size={40} className="text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-white">Twilio Neural Voice</h2>
          <div className="flex items-center justify-center gap-4">
            <p className="text-zinc-500 text-sm">AI-powered voice modulation.</p>
            <button 
              onClick={() => setIsDemoMode(!isDemoMode)}
              className={cn(
                "px-2 py-0.5 rounded text-[10px] font-mono border transition-all",
                isDemoMode ? "bg-amber-500/20 border-amber-500 text-amber-500" : "bg-emerald-500/20 border-emerald-500 text-emerald-500"
              )}
            >
              {isDemoMode ? "DEMO_MODE_ACTIVE" : "LIVE_MODE_ACTIVE"}
            </button>
          </div>
        </div>

        <div className="bg-[#2f2f2f] p-8 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-6">
          <div className="flex items-center justify-between px-2">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Neural Gateway Status</label>
            <div className="flex gap-1">
              {activeGateways.map((g, i) => (
                <div key={i} className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[8px] font-mono text-emerald-500 animate-pulse">
                  {g}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Select Gateway</label>
            <div className="grid grid-cols-3 gap-2">
              {providers.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setSelectedProvider(p.id)}
                  className={cn(
                    "p-3 rounded-xl border text-center transition-all",
                    selectedProvider === p.id 
                      ? "bg-emerald-500/10 border-emerald-500 text-white" 
                      : "bg-black/40 border-white/5 text-zinc-500 hover:border-white/20"
                  )}
                >
                  <div className="text-xs font-bold">{p.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Destination Number</label>
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="tel" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 234 567 8900"
                className="w-full bg-black border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Voice Modulation</label>
            <div className="grid grid-cols-1 gap-2">
              {voices.map((voice) => (
                <button 
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl border transition-all text-left",
                    selectedVoice === voice.id 
                      ? "bg-emerald-500/10 border-emerald-500 text-white" 
                      : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/20"
                  )}
                >
                  <span className="text-xl">{voice.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{voice.name}</div>
                    <div className="text-[10px] text-zinc-600 font-mono uppercase">{voice.id}</div>
                  </div>
                  {selectedVoice === voice.id && <Check size={16} className="text-emerald-500" />}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleCall}
            disabled={isCalling || !phoneNumber}
            className={cn(
              "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl",
              isCalling || !phoneNumber 
                ? "bg-zinc-800 text-zinc-600 cursor-not-allowed" 
                : "bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-[1.02]"
            )}
          >
            {isCalling ? <Loader2 size={24} className="animate-spin" /> : <Phone size={24} />}
            {isCalling ? "CONNECTING..." : "INITIATE NEURAL CALL"}
          </button>

          {callStatus && (
            <div className="p-4 bg-black/60 rounded-xl border border-white/5 text-center">
              <p className="text-xs font-mono text-emerald-500">{callStatus}</p>
            </div>
          )}

          {neuralLogs.length > 0 && (
            <div className="p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-[10px] space-y-1 max-h-32 overflow-y-auto scrollbar-hide">
              {neuralLogs.map((log, i) => (
                <div key={i} className={cn(
                  log.startsWith("[SUCCESS]") ? "text-emerald-500" : "text-zinc-500"
                )}>
                  {log}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
          <ShieldCheck size={20} className="text-amber-500 shrink-0" />
          <p className="text-[10px] text-amber-200/60 leading-relaxed">
            Ensure <code className="text-amber-400">TWILIO_ACCOUNT_SID</code> and <code className="text-amber-400">TWILIO_AUTH_TOKEN</code> are configured in your environment secrets before initiating calls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'vision' | 'dashboard' | 'call' | 'twilio'>('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#212121] text-[#ececec] font-sans overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 260 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="bg-[#171717] flex flex-col h-full border-r border-white/5 relative z-40 overflow-hidden"
      >
        <div className="p-3 flex flex-col h-full w-[260px]">
          <button 
            onClick={() => setActiveTab('chat')}
            className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 transition-colors mb-2 group"
          >
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <BrainCircuit size={16} className="text-black" />
            </div>
            <span className="text-sm font-medium">New Chat</span>
            <div className="ml-auto p-1 rounded hover:bg-white/10">
              <SquarePen size={14} className="text-zinc-500" />
            </div>
          </button>

          <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide py-4">
            <div className="px-3 mb-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Recent</div>
            <button onClick={() => setActiveTab('chat')} className={cn("sidebar-item w-full", activeTab === 'chat' && "bg-white/10 text-white")}>
              <MessageSquare size={16} />
              <span className="truncate">Neural Link Session</span>
            </button>
            <button onClick={() => setActiveTab('vision')} className={cn("sidebar-item w-full", activeTab === 'vision' && "bg-white/10 text-white")}>
              <Eye size={16} />
              <span className="truncate">Vision Analysis</span>
            </button>
            <button onClick={() => setActiveTab('dashboard')} className={cn("sidebar-item w-full", activeTab === 'dashboard' && "bg-white/10 text-white")}>
              <LayoutDashboard size={16} />
              <span className="truncate">System Dashboard</span>
            </button>
            <button onClick={() => setActiveTab('call')} className={cn("sidebar-item w-full", activeTab === 'call' && "bg-white/10 text-white")}>
              <Phone size={16} />
              <span className="truncate">Ai Future Call</span>
            </button>
            <button onClick={() => setActiveTab('twilio')} className={cn("sidebar-item w-full", activeTab === 'twilio' && "bg-white/10 text-white")}>
              <PhoneForwarded size={16} />
              <span className="truncate">Twilio Voice</span>
            </button>
          </div>

          <div className="pt-4 border-t border-white/5 space-y-1">
            <button className="sidebar-item w-full">
              <Settings size={16} />
              <span>Settings</span>
            </button>
            <div className="sidebar-item w-full">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-black">U</div>
              <span>User Profile</span>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-14 flex items-center px-4 justify-between border-b border-white/5 bg-[#212121]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-2">
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 transition-colors"
              >
                <PanelLeftOpen size={20} />
              </button>
            )}
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 cursor-pointer transition-colors group">
              <span className="text-sm font-semibold text-zinc-200">Human AI 4.0</span>
              <ChevronDown size={14} className="text-zinc-500 group-hover:text-zinc-300" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-white/5 rounded-lg text-zinc-400 transition-colors">
              <Share size={18} />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <AnimatePresence mode="wait">
            {activeTab === 'chat' && (
              <motion.div 
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col"
              >
                <PicoConsole />
              </motion.div>
            )}
            {activeTab === 'vision' && (
              <motion.div 
                key="vision"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NeuralVision />
              </motion.div>
            )}
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NeuralDashboard />
              </motion.div>
            )}
            {activeTab === 'call' && (
              <motion.div 
                key="call"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <AiFutureVideoCall />
              </motion.div>
            )}
            {activeTab === 'twilio' && (
              <motion.div 
                key="twilio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                <TwilioVoice />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Toggle (Floating if closed) */}
        {!isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-[#2f2f2f] border border-white/10 rounded-full text-zinc-400 hover:text-white transition-all z-50 shadow-xl"
          >
            <PanelLeftOpen size={20} />
          </button>
        )}
        {isSidebarOpen && (
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute left-[260px] top-1/2 -translate-y-1/2 p-2 bg-[#2f2f2f] border border-white/10 rounded-full text-zinc-400 hover:text-white transition-all z-50 shadow-xl -ml-5"
          >
            <PanelLeftClose size={20} />
          </button>
        )}
      </main>
    </div>
  );
}
