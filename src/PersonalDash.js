import React, { useState, useEffect } from 'react';
import { 
  Zap, LogOut, Terminal, Brain, Layers, Cpu, Shield, 
  TrendingUp, Lock, Unlock, Play, Send, CheckCircle2, 
  ChevronRight, BookOpen, AlertTriangle, User, RefreshCw
} from 'lucide-react';
import Editor from '@monaco-editor/react';

// ==========================================
// CENTRALIZED DASHBOARD INTERNAL STORAGE ENGINE
// ==========================================
const DASHBOARD_DATA = {
  programming: {
    courseTitle: "Core Python & Advanced Systems Engineering",
    mentorName: "Alex (Senior Systems Architect)",
    mentorRole: "Senior Software Engineer",
    initialCode: `# Topic 1.1: Advanced Memory Allocation\n# Task: Optimize the sequence tracker to prevent memory bloat.\n\nimport sys\n\ndef track_vector_allocation():\n    # Analyze deep vs shallow copy mutations below\n    matrix_node = [i for i in range(100000)]\n    print(f"Node Memory Footprint: {sys.getsizeof(matrix_node)} bytes")\n\ntrack_vector_allocation()`,
    chapters: [
      {
        id: "py_ch_1",
        title: "The Runtime & Foundations",
        topics: [
          { id: "py_top_1.1", title: "Memory Allocation & Deep vs Shallow Copies", duration: "45m", difficulty: "Advanced" },
          { id: "py_top_1.2", title: "Dunder Methods & Object Lifecycle Engineering", duration: "60m", difficulty: "Expert" }
        ]
      },
      {
        id: "py_ch_2",
        title: "Functional Architecture & Pipelines",
        topics: [
          { id: "py_top_2.1", title: "Closures, Decorators, and Metaprogramming", duration: "90m", difficulty: "Expert" },
          { id: "py_top_2.2", title: "High-Performance Generator Pipelines", duration: "50m", difficulty: "Intermediate" }
        ]
      }
    ]
  },
  trading: {
    courseTitle: "Technical Analysis & Advanced Derivatives",
    mentorName: "Marcus (Quantitative Risk Advisor)",
    mentorRole: "Strict Quantitative Risk Manager",
    initialCode: `// Options Greeks Greeks Exposure Analysis Core Engine\n// Asset: NIFTY 50 Near-Month Expiry Contract\n\nfunction calculateDeltaRisk(spotPrice, strikePrice, volatility, daysToExpiry) {\n    // Delta exposure mapping engine initialization\n    let variance = volatility * Math.sqrt(daysToExpiry / 365);\n    return "Risk Profile Stable // Expected Delta: 0.62";\n}`,
    chapters: [
      {
        id: "tr_ch_1",
        title: "Price Action & Market Psychology",
        topics: [
          { id: "tr_top_1.1", title: "Candlestick Volumetric Anatomy", duration: "40m", difficulty: "Intermediate" },
          { id: "tr_top_1.2", title: "Institutional Order Block Mapping", duration: "55m", difficulty: "Advanced" }
        ]
      },
      {
        id: "tr_ch_2",
        title: "Derivatives Mechanics & Greeks",
        topics: [
          { id: "tr_top_2.1", title: "Navigating Options Greeks (Delta/Gamma)", duration: "75m", difficulty: "Advanced" },
          { id: "tr_top_2.2", title: "Position Sizing & Strict Drawdown Math", duration: "60m", difficulty: "Expert" }
        ]
      }
    ]
  }
};

export default function Dashboard({ handleLogout }) {
  // --- LAYER STATE MANAGEMENT ---
  const [activeTrack, setActiveTrack] = useState('programming');
  const [selectedTopic, setSelectedTopic] = useState({ id: "py_top_1.1", title: "Memory Allocation & Deep vs Shallow Copies" });
  
  // Pay-As-You-Go Ledger: Instantly records unlocked tracks (Simulating your ₹125 entry ledger)
  const [unlockedLedger, setUnlockedLedger] = useState(['py_top_1.1']);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [topicPendingUnlock, setTopicPendingUnlock] = useState(null);

  // Workspace code state triggers
  const [code, setCode] = useState(DASHBOARD_DATA.programming.initialCode);
  const [terminalOutput, setTerminalOutput] = useState([`System Initialization Successful...`, `Ready for system execution diagnostics.`]);
  const [isRunning, setIsRunning] = useState(false);

  // AI Chat streams
  const [chatMessage, setChatMessage] = useState('');
  const [aiChatLogs, setAiChatLogs] = useState([
    { sender: 'ai', text: "Sequence initialized. Select an unlocked module, deploy your architecture inside the terminal loop, and request optimization parameters when ready." }
  ]);

  // Sync workspace templates dynamically when track alterations execute
  useEffect(() => {
    const defaultTopic = DASHBOARD_DATA[activeTrack].chapters[0].topics[0];
    setSelectedTopic(defaultTopic);
    setCode(DASHBOARD_DATA[activeTrack].initialCode);
    setTerminalOutput([`Switched workspace environment to: ${DASHBOARD_DATA[activeTrack].courseTitle}`, `System state ready.`]);
    setAiChatLogs([
      { sender: 'ai', text: `System context swapped. I am now acting as your ${DASHBOARD_DATA[activeTrack].mentorName}. Let's break down systems architecture.` }
    ]);
  }, [activeTrack]);

  // --- INTERACTIVE ARCHITECTURE FUNCTIONS ---
  const handleTopicSelection = (topic) => {
    if (unlockedLedger.includes(topic.id)) {
      setSelectedTopic(topic);
    } else {
      setTopicPendingUnlock(topic);
      setShowPaymentModal(true);
    }
  };

  const executeLedgerPaymentSimulation = () => {
    if (topicPendingUnlock) {
      setUnlockedLedger([...unlockedLedger, topicPendingUnlock.id]);
      setSelectedTopic(topicPendingUnlock);
      setShowPaymentModal(false);
      setTerminalOutput([
        ...terminalOutput, 
        `LEDGER SUCCESS: Transaction Verified. Topic [${topicPendingUnlock.title}] permanently unlocked via Micro-Transaction Ledger.`
      ]);
      setTopicPendingUnlock(null);
    }
  };

  const handleRunDiagnostics = () => {
    setIsRunning(true);
    setTerminalOutput([...terminalOutput, `⚙️ Compiling and running runtime test modules...`]);
    
    setTimeout(() => {
      setIsRunning(false);
      if (activeTrack === 'programming') {
        setTerminalOutput([
          ...terminalOutput,
          `>> Node Memory Footprint: 800024 bytes`,
          `>> Execution Matrix: Completed with 0 allocation leaks.`,
          `SUCCESS: Vector compilation execution vector stabilized at 12ms throughput.`
        ]);
      } else {
        setTerminalOutput([
          ...terminalOutput,
          `>> Delta Risk Variance: 0.6204`,
          `>> Gamma Sensitivity Factor: 0.041`,
          `DIAGNOSTIC CRITICAL: Position hedge ratios require rebalancing under extreme downside vectors.`
        ]);
      }
    }, 1200);
  };

  const handleSendAiComms = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage;
    const currentLogs = [...aiChatLogs, { sender: 'user', text: userMessage }];
    setAiChatLogs(currentLogs);
    setChatMessage('');

    // Simulated contextual AI responses matching premium platform vectors
    setTimeout(() => {
      let aiResponseText = "";
      if (activeTrack === 'programming') {
        aiResponseText = `Architectural analysis requested on: "${userMessage}". To optimize this allocation stack, minimize mutable pointer objects. Consider deploying explicit slots mapping inside tracking definitions.`;
      } else {
        aiResponseText = `Risk telemetry updated based on "${userMessage}". Under high volatility metrics, your gamma hedging parameters must compress. Ensure your stop-loss math scales with current implied volatility metrics.`;
      }
      setAiChatLogs([...currentLogs, { sender: 'ai', text: aiResponseText }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-gray-100 flex flex-col font-sans overflow-hidden">
      
      {/* APP TOP COMMAND HEADER NAVBAR */}
      <header className="bg-[#0a1020]/80 border-b border-white/5 px-6 py-4 flex items-center justify-between backdrop-blur-md shrink-0">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded-xl border border-emerald-500/20">
            <Zap className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white flex items-center">
              NEXUS<span className="text-emerald-400">DEV</span> 
              <span className="ml-3 text-xs tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full uppercase font-bold">LAB SUITE</span>
            </h1>
          </div>
        </div>

        {/* WORKSPACE CENTRAL HUB QUICK TUNER */}
        <div className="flex bg-[#020617] border border-white/15 p-1 rounded-xl">
          <button 
            onClick={() => setActiveTrack('programming')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-xs transition-all ${activeTrack === 'programming' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <Terminal className="w-3.5 h-3.5" /> <span>PROGRAMMING ENVIRONMENT</span>
          </button>
          <button 
            onClick={() => setActiveTrack('trading')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-xs transition-all ${activeTrack === 'trading' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> <span>TRADING RISK SIMULATOR</span>
          </button>
        </div>

        {/* OPERATOR DISCONNECT ACTION */}
        <button 
          onClick={handleLogout} 
          className="flex items-center space-x-2 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 px-4 py-2 rounded-xl text-xs font-bold text-gray-300 hover:text-red-400 transition-all"
        >
          <LogOut className="w-3.5 h-3.5" /> <span className="hidden md:inline">Disconnect Session</span>
        </button>
      </header>

      {/* THREE-PANEL CORE RUNTIME WORKSPACE */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* PANEL 1: MODULAR MICRO-CURRICULUM RAIL SIDEBAR */}
        <aside className="w-80 bg-[#060b18] border-r border-white/5 flex flex-col overflow-y-auto shrink-0 hidden lg:flex">
          <div className="p-4 border-b border-white/5 bg-[#0a1020]/40">
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Active Ledger Engine</div>
            <h2 className="text-sm font-black text-white truncate">{DASHBOARD_DATA[activeTrack].courseTitle}</h2>
          </div>

          <div className="p-4 space-y-6">
            {DASHBOARD_DATA[activeTrack].chapters.map((chapter, cIdx) => (
              <div key={chapter.id} className="space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  <span>Node {cIdx + 1}: {chapter.title}</span>
                </div>
                
                <div className="space-y-1">
                  {chapter.topics.map((topic) => {
                    const isUnlocked = unlockedLedger.includes(topic.id);
                    const isSelected = selectedTopic.id === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleTopicSelection(topic)}
                        className={`w-full flex flex-col p-3 rounded-xl border transition-all text-left group relative overflow-hidden ${
                          isSelected 
                            ? 'bg-gradient-to-br from-blue-900/30 to-[#020617] border-blue-500/40 shadow-inner' 
                            : 'bg-transparent border-transparent hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-start justify-between w-full">
                          <span className={`text-xs font-bold truncate pr-2 ${isSelected ? 'text-cyan-400' : 'text-gray-300 group-hover:text-white'}`}>
                            {topic.title}
                          </span>
                          <span className="shrink-0 pt-0.5">
                            {isUnlocked ? (
                              <Unlock className={`w-3 h-3 ${isSelected ? 'text-emerald-400' : 'text-gray-600'}`} />
                            ) : (
                              <Lock className="w-3 h-3 text-amber-500/70" />
                            )}
                          </span>
                        </div>
                        <div className="flex items-center justify-between w-full mt-2 text-[10px] font-mono text-gray-500">
                          <span>Length: {topic.duration}</span>
                          {isUnlocked ? (
                            <span className="text-emerald-500 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10 font-bold uppercase tracking-widest text-[9px]">READY</span>
                          ) : (
                            <span className="text-amber-400 bg-amber-400/5 px-1.5 py-0.5 rounded border border-amber-400/10 font-bold uppercase tracking-widest text-[9px]">₹125 NODE</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* PANEL 2: CORE RUNTIME DEVELOPMENT/TRADING SANDBOX GRID LAYER */}
        <main className="flex-1 flex flex-col bg-[#020617] overflow-hidden border-r border-white/5">
          {/* LAB NODE HEADER telemetry */}
          <div className="px-6 py-3 bg-[#0a1020]/30 border-b border-white/5 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-3 truncate">
              <span className="font-mono text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold">Active Workspace</span>
              <h3 className="font-bold text-white truncate">{selectedTopic.title}</h3>
            </div>
            <button 
              onClick={handleRunDiagnostics}
              disabled={isRunning}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 disabled:from-gray-800 disabled:to-gray-900 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isRunning ? "PROCESSING MODULE..." : "RUN INTERACTIVE DIX"}</span>
            </button>
          </div>

          {/* DYNAMIC INTERACTIVE LAB WORKSPACE VIEWPORT SWITCHER */}
          <div className="flex-1 overflow-hidden relative min-h-[300px]">
            {activeTrack === 'programming' ? (
              // MONACO LIVE DEVELOPMENT ENGINE SUB-ARRAY
              <Editor
                height="100%"
                defaultLanguage="python"
                theme="vs-dark"
                value={code}
                onChange={(val) => setCode(val)}
                options={{
                  fontSize: 13,
                  fontFamily: "Fira Code, Menlo, Monaco, monospace",
                  minimap: { enabled: false },
                  scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
                  padding: { top: 16 },
                  lineNumbersMinChars: 3
                }}
              />
            ) : (
              // HIGH-TECH SIMULATED LIVE HISTORICAL ORDER CHARTING ENGINE
              <div className="w-full h-full p-6 bg-[#040814] flex flex-col font-mono justify-between overflow-y-auto">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center space-x-6">
                    <div>
                      <span className="text-gray-500 text-xs block">UNDERLYING LINK</span>
                      <span className="text-white font-bold text-sm tracking-wider">NIFTY_50_INDEX_MOCK</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block">SPOT METRIC</span>
                      <span className="text-emerald-400 font-bold text-sm">22,453.80 (+0.84%)</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs block">VOL FREQUENCY</span>
                      <span className="text-cyan-400 font-bold text-sm">1.24M Base/s</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 text-[10px]">
                    <span className="px-2 py-0.5 bg-white/5 text-gray-400 border border-white/10 rounded">1m</span>
                    <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">5m</span>
                    <span className="px-2 py-0.5 bg-white/5 text-gray-400 border border-white/10 rounded">1H</span>
                  </div>
                </div>

                {/* HIGH-FIDELITY HIGH-CONTRAST DATA VECTOR GRID GRAPHICS */}
                <div className="flex-1 flex items-end justify-between px-4 py-8 relative">
                  {/* Grid Lines Overlay Background */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 py-4">
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="w-full h-px bg-white/10"></div>
                  </div>
                  
                  {/* Simulated Candle Stacks Matrix */}
                  <div className="flex items-end justify-between w-full h-48 z-10">
                    <div className="w-4 flex flex-col items-center h-16 justify-end"><div className="w-0.5 h-12 bg-red-500 absolute mb-2"></div><div className="w-3 h-8 bg-red-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-24 justify-end"><div className="w-0.5 h-16 bg-red-500 absolute mb-2"></div><div className="w-3 h-10 bg-red-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-32 justify-end"><div className="w-0.5 h-20 bg-emerald-500 absolute mb-4"></div><div className="w-3 h-14 bg-emerald-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-28 justify-end"><div className="w-0.5 h-14 bg-red-500 absolute mb-2"></div><div className="w-3 h-6 bg-red-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-40 justify-end"><div className="w-0.5 h-28 bg-emerald-500 absolute mb-6"></div><div className="w-3 h-20 bg-emerald-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-48 justify-end"><div className="w-0.5 h-36 bg-emerald-500 absolute mb-4"></div><div className="w-3 h-24 bg-emerald-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-44 justify-end"><div className="w-0.5 h-20 bg-red-500 absolute mb-8"></div><div className="w-3 h-12 bg-red-500 rounded-sm"></div></div>
                    <div className="w-4 flex flex-col items-center h-56 justify-end"><div className="w-0.5 h-44 bg-emerald-500 absolute mb-2"></div><div className="w-3 h-32 bg-emerald-500 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] border border-emerald-400/40"></div></div>
                  </div>
                </div>

                {/* TRADING ACTIONS EXECUTION MODULE LAYER */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 bg-[#060b18]">
                  <button onClick={() => setTerminalOutput([...terminalOutput, "ORDER TRANSMITTED: Simulated Buy Order executed at 22,453.80. Checking risk bounds..."])} className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold p-3 rounded-xl transition-all text-xs tracking-widest text-center">INITIALIZE SIMULATED BUY EXP NODE</button>
                  <button onClick={() => setTerminalOutput([...terminalOutput, "ORDER TRANSMITTED: Simulated Short Order executed at 22,453.80. Checking risk bounds..."])} className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold p-3 rounded-xl transition-all text-xs tracking-widest text-center">INITIALIZE SIMULATED SHORT CONTRACT</button>
                </div>
              </div>
            )}
          </div>

          {/* LOWER RUNTIME DIAGNOSTIC DIAGNOSTICS LOG HUB TERMINAL */}
          <div className="h-52 bg-[#040814] border-t border-white/5 font-mono text-xs flex flex-col shrink-0">
            <div className="px-4 py-2 bg-[#080d1a] border-b border-white/5 text-gray-500 font-bold uppercase tracking-widest flex items-center justify-between shrink-0">
              <span className="flex items-center"><Terminal className="w-3.5 h-3.5 text-cyan-400 mr-2" /> CORE DIAGNOSTIC OUTPUT TELEMETRY</span>
              <button onClick={() => setTerminalOutput([])} className="text-[10px] hover:text-white transition-colors uppercase font-bold tracking-widest">Clear Logs</button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-gray-400 selection:bg-blue-500/20">
              {terminalOutput.map((log, index) => (
                <div key={index} className="leading-relaxed whitespace-pre-wrap">
                  <span className="text-cyan-500/70 mr-2">nexus_core_dx://</span>{log}
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* PANEL 3: REAL-TIME CONTEXT-AWARE AI ADVISOR LAYER */}
        <aside className="w-80 bg-[#060b18] flex flex-col overflow-hidden shrink-0 hidden xl:flex">
          <div className="p-4 border-b border-white/5 bg-[#0a1020]/40 flex items-center space-x-3 shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center border border-white/10 shrink-0">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div className="truncate">
              <div className="text-xs font-black text-white truncate">{DASHBOARD_DATA[activeTrack].mentorName}</div>
              <div className="text-[10px] text-cyan-400 font-mono tracking-wider truncate uppercase">{DASHBOARD_DATA[activeTrack].mentorRole}</div>
            </div>
          </div>

          {/* CHAT LOG SCREEN AREA */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {aiChatLogs.map((log, idx) => (
              <div key={idx} className={`flex flex-col max-w-[85%] ${log.sender === 'user' ? 'ml-auto items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                  log.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-[#0a1020] text-gray-300 border border-white/5 rounded-bl-none shadow-md'
                }`}>
                  {log.text}
                </div>
                <span className="text-[9px] text-gray-600 font-mono mt-1 px-1">{log.sender === 'user' ? 'Operator' : 'Mentor AI'}</span>
              </div>
            ))}
          </div>

          {/* CHAT ENTRY INTERACTIVE TERMINAL LOOP FORM */}
          <form onSubmit={handleSendAiComms} className="p-3 border-t border-white/5 bg-[#040814] flex items-center space-x-2 shrink-0">
            <input 
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder={`Query ${DASHBOARD_DATA[activeTrack].mentorRole}...`}
              className="flex-1 bg-[#020617] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button type="submit" className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 p-2.5 rounded-xl transition-all shrink-0">
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </aside>
      </div>

      {/* ==========================================
          MODAL: UNIVERSAL ₹125 UPI SIMULATOR GATE
          ========================================== */}
      {showPaymentModal && topicPendingUnlock && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[#020617]/80" onClick={() => setShowPaymentModal(false)}></div>
          
          <div className="relative bg-[#0a1020] border border-amber-500/30 rounded-3xl p-6 w-full max-w-md shadow-2xl overflow-hidden animate-modal-pop">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full pointer-events-none"></div>
            
            <div className="flex items-center space-x-3 mb-4 text-amber-400">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-lg font-bold text-white tracking-wide">Secure Transaction Gate Required</h3>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              You are accessing a secured lecture payload node: <span className="text-white font-bold">[{topicPendingUnlock.title}]</span>. Under the micro-modular configuration, this track chunk requires localized validation.
            </p>

            <div className="bg-[#020617] rounded-2xl p-4 border border-white/5 space-y-3 mb-6 font-mono text-xs">
              <div className="flex justify-between text-gray-500"><span>Ledger Price Node</span><span className="text-white font-bold">₹125.00</span></div>
              <div className="flex justify-between text-gray-500"><span>Platform Surcharges</span><span className="text-emerald-400 font-bold">₹0.00 (Free)</span></div>
              <div className="w-full h-px bg-white/5 my-2"></div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Due (UPI Engine)</span>
                <span className="text-cyan-400 font-black">₹125.00</span>
              </div>
            </div>

            {/* ACTION SIMULATION CONTROLS */}
            <div className="flex flex-col gap-2.5">
              <button 
                onClick={executeLedgerPaymentSimulation}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-black py-3.5 rounded-xl text-xs tracking-widest shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                SIMULATE SUCCESSFUL UPI PAY (₹125)
              </button>
              <button 
                onClick={() => { setShowPaymentModal(false); setTopicPendingUnlock(null); }}
                className="w-full py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white text-xs font-bold transition-colors border border-transparent hover:border-white/10"
              >
                Abort Sequence Request
              </button>
            </div>
            
            <div className="mt-4 text-[10px] text-gray-600 text-center flex items-center justify-center space-x-2 font-mono">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Razorpay API Secure Payload Verification Layer</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}