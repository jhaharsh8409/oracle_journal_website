import { motion } from 'framer-motion';
import { 
  Bot, 
  Brain, 
  LineChart, 
  ShieldCheck, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  TrendingUp,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const features = [
    {
      icon: <Bot className="w-8 h-8 text-oracle-emerald" />,
      title: "AI Coaching",
      description: "Real-time analysis of your trades powered by Llama 3.1 8B. Get actionable feedback on every entry and exit."
    },
    {
      icon: <Brain className="w-8 h-8 text-oracle-gold" />,
      title: "Psychology Tracking",
      description: "Tag emotions like FOMO, Greed, and Discipline. Visualize how your mindset impacts your PnL over time."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-400" />,
      title: "Advanced Metrics",
      description: "Equity curves, Drawdown charts, and Hourly Heatmaps. Professional analytics to refine your edge."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Biometric Security",
      description: "Keep your trade data private with Fingerprint and Face ID authentication. Your edge is your business."
    }
  ];

  return (
    <div className="min-h-screen bg-midnight-black selection:bg-oracle-emerald/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-oracle-emerald to-oracle-gold rounded-xl flex items-center justify-center oracle-glow transition-transform group-hover:scale-110">
              <Brain className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-oracle-emerald transition-colors">
              Oracle <span className="text-oracle-emerald">Journal</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#install" className="text-gray-400 hover:text-white transition-colors">Install Guide</a>
            <a 
              href="/downloads/oracle-journal.apk" 
              className="px-6 py-2 bg-oracle-emerald hover:bg-oracle-emerald/80 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-midnight-black/95 backdrop-blur-xl p-6 border-b border-white/10 flex flex-col gap-4"
          >
            <a href="#features" className="text-xl text-gray-400" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#install" className="text-xl text-gray-400" onClick={() => setIsMenuOpen(false)}>Install Guide</a>
            <a href="/downloads/oracle-journal.apk" className="w-full py-3 bg-oracle-emerald text-black text-center font-bold rounded-xl">
              Download APK
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-oracle-emerald/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-oracle-gold/5 blur-[100px] rounded-full -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-oracle-emerald/20 bg-oracle-emerald/5 text-oracle-emerald text-sm font-semibold mb-6 uppercase tracking-wider">
              Powered by AI & Psychology
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Master Your <span className="text-gradient">Trades</span> <br className="hidden md:block" /> with AI Wisdom
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Oracle Journal is the elite trading companion that tracks your performance and coaches your psychology for disciplined growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/downloads/oracle-journal.apk" 
                className="group relative px-10 py-5 bg-white text-black font-black text-xl rounded-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-oracle-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-3">
                  <Download className="w-6 h-6" /> Download Oracle Journal
                </span>
              </a>
              <a href="#features" className="text-white hover:text-oracle-emerald font-bold text-lg flex items-center gap-2 group">
                Explore Features <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* App UI Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-24 relative max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] glass-morphism rounded-3xl p-4 md:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-transparent to-transparent z-10" />
              
              {/* Fake UI Elements */}
              <div className="flex gap-4 items-start h-full">
                <div className="w-1/3 space-y-4">
                  <div className="h-32 bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs text-gray-400">Total Equity</span>
                      <TrendingUp className="w-4 h-4 text-oracle-emerald" />
                    </div>
                    <div className="text-2xl font-bold">$124,500.00</div>
                    <div className="text-xs text-oracle-emerald">+12.4% this month</div>
                  </div>
                  <div className="h-48 bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col justify-between">
                    <span className="text-xs text-gray-400">Emotions Index</span>
                    <div className="flex gap-2 items-end h-20">
                      {[40, 70, 45, 90, 65, 30].map((h, i) => (
                        <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-oracle-gold/40 rounded-t-sm" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-400">FOMO levels are peaking</div>
                  </div>
                </div>
                <div className="flex-1 space-y-4 h-full relative">
                   <div className="h-full bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-oracle-emerald flex items-center justify-center text-black font-bold">AI</div>
                        <span className="font-bold">Oracle AI Coach</span>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl text-sm text-left">
                          Analyze my last 5 losing trades on XAUUSD.
                        </div>
                        <div className="bg-oracle-emerald/10 p-4 rounded-xl text-sm text-left border border-oracle-emerald/20 text-oracle-emerald">
                          "I've detected a pattern. You are entering Gold shorts near support levels when FOMO is high. Your win rate drops to 12% in these conditions. Consider waiting for a retest of the supply zone at 2150."
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Built for the <span className="text-gradient">Disciplined</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every feature is designed to help you treat trading like a business, not a gamble.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-morphism p-8 rounded-3xl group hover:border-oracle-emerald/50 transition-colors"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed italic text-sm">
                  "{feature.description}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className="py-32 px-6 bg-gradient-to-b from-transparent to-oracle-emerald/5">
        <div className="max-w-4xl mx-auto glass-morphism p-10 md:p-16 rounded-[40px] border-oracle-emerald/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Smartphone className="w-40 h-40 text-oracle-emerald" />
          </div>

          <h2 className="text-4xl font-black mb-12 flex items-center gap-4">
            <CheckCircle2 className="w-10 h-10 text-oracle-emerald" />
            Easy Installation
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-oracle-emerald text-black flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Download the APK</h4>
                <p className="text-gray-400">Click the download button to save the "oracle-journal.apk" file to your Android device.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-oracle-emerald text-black flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Enable Unknown Sources</h4>
                <p className="text-gray-400">If prompted, allow your browser to "Install unknown apps". This is standard for direct APK downloads outside of the Play Store.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full bg-oracle-emerald text-black flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Launch Oracle</h4>
                <p className="text-gray-400">Open the file, follow the prompts, and start your journey with your new AI trading coach.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
            <a 
              href="/downloads/app.apk" 
              className="px-12 py-5 bg-oracle-emerald hover:bg-oracle-emerald/80 text-black font-black text-xl rounded-2xl transition-all flex items-center gap-3 w-full md:w-auto justify-center"
            >
              <Download className="w-6 h-6" /> Start Download Now
            </a>
            <div className="text-gray-500 text-sm">
              Version: 1.0.0+1 | Build: Oracle-Rel-2026
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Brain className="text-oracle-emerald w-8 h-8" />
            <span className="text-2xl font-bold text-white">
              Oracle <span className="text-oracle-emerald">Journal</span>
            </span>
          </div>
          <p className="text-gray-500 mb-8 max-w-md mx-auto italic">
            "The market is a device for transferring money from the impatient to the patient." – Warren Buffett
          </p>
          <div className="text-gray-600 text-sm">
            © 2026 Oracle Journal. Built for Traders. <br />
            Oracle Journal is not financial advice. Trade at your own risk.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
