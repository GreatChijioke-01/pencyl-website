import Image from 'next/image'
import { Header } from '@/components/Header';
import { 
  Zap, 
  ShieldCheck, 
  Command, 
  Cpu, 
  HardDrive, 
  Sparkles,
  HelpCircle,
  Star,
  ArrowRight,
  Monitor,
  Apple,
  Terminal,
  Download,
} from 'lucide-react';

export default function Home() {
  // You can easily replace these with Pencyl's actual stats!
  const stats = [
    { value: "< 6MB", label: "APP SIZE" },
    { value: "100%", label: "FREE" },
    { value: "No telemetry", label: "EVER" },
    { value: "Apache-2.0", label: "OPEN SOURCE" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-5xl mx-auto w-full">
        {/* Transparent Glass Badge linking to GitHub Releases */}
        <a 
          href="https://github.com/GreatChijioke-01/pencyl/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100/50 dark:bg-white/5 hover:bg-slate-200/80 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 backdrop-blur-md mb-8 transition-all cursor-pointer active:scale-95"
        >
          <span className="flex h-2 w-2 rounded-full bg-slate-500 dark:bg-slate-400 animate-pulse" />
          Pencyl v1.2 Live
          <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ml-0.5">
            →
          </span>
        </a>

        {/* Monochromatic Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight mb-6">
          The lightweight, local-first
          <span className="block text-slate-500 dark:text-slate-400 mt-2">
            development workspace.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
          A Fast, offline-ready IDE with BYOK or local AI integration built for the modern developer. 
        </p>

        {/* Transparent Glass Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <a
            href="#download"
            className="px-8 py-3.5 rounded-xl bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 border border-slate-300/80 dark:border-white/15 backdrop-blur-md text-slate-900 dark:text-white font-medium shadow-sm transition-all cursor-pointer active:scale-95"
          >
            Download Pencyl
          </a>
          <a
            href="https://github.com/GreatChijioke-01/pencyl/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-100/50 dark:bg-transparent hover:bg-slate-200/50 dark:hover:bg-white/5 border border-transparent dark:border-white/5 text-slate-700 dark:text-slate-300 font-medium transition-all cursor-pointer active:scale-95"
          >
            View Documentation
          </a>
        </div>

        {/* NEW: Stats Bar (Image Match) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 bg-slate-100/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-2xl backdrop-blur-md divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-white/10 overflow-hidden">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 lg:p-8 hover:bg-slate-200/30 dark:hover:bg-white/5 transition-colors"
            >
              {/* Monospace font for the value, mimicking the screenshot */}
              <span className="text-2xl lg:text-3xl font-mono font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {stat.value}
              </span>
              {/* Widely tracked, uppercase font for the label */}
              <span className="text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        {/* App UI Preview Mockup */}
        <div className="w-full mt-24 mb-12 relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Decorative glow behind the mockup */}
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-400/20 via-slate-200/20 to-slate-400/20 dark:from-white/10 dark:via-white/5 dark:to-white/10 rounded-2xl blur-xl opacity-50" />
          
          <div className="relative rounded-2xl bg-white/50 dark:bg-[#0a0a0a]/80 border border-slate-200/50 dark:border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window Header (macOS style traffic lights) */}
            <div className="flex items-center px-4 h-12 border-b border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-white/20" />
              </div>
              <div className="mx-auto flex items-center justify-center">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  pencyl-workspace
                </span>
              </div>
            </div>
            
            {/* App Content Area - Full Screenshot (No Cropping) */}
            <div className="relative w-full bg-slate-50/50 dark:bg-[#0a0a0a]">
              <Image
                src="/firstpreview.png"
                alt="Pencyl App Interface"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-b-2xl"
                priority
              />
            </div>
          </div>
        </div>
        {/* Features Bento Grid Section */}
        <section id="features" className="w-full pt-20 pb-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3">
              Built Different
            </h2>
            <p className="text-3xl sm:text-4xl font-serif tracking-tight text-slate-900 dark:text-white">
              Everything you need for speed and focus.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* Feature 1: Main Highlight Card (Spans 2 columns on desktop) */}
            <div className="md:col-span-2 p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <HardDrive className="w-5 h-5 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  100% Local-First Architecture
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
                  Your files, notes, and code never leave your device. Pencyl reads directly from your local filesystem with zero mandatory cloud sync or external dependencies.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Fast I/O</span>
                <span>•</span>
                <span>Works 100% Offline</span>
              </div>
            </div>

            {/* Feature 2: High Performance */}
            <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Instant Launch
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Sub-second startup times designed to get you straight into your flow state without waiting.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400">
                Native Rust Backend
              </div>
            </div>

            {/* Feature 3: Command Palette */}
            <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Command className="w-5 h-5 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Keyboard Driven
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Full command palette integration to control actions without ever taking your hands off the keyboard.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400">
                <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/20">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/20">K</kbd> Everywhere
              </div>
            </div>

            {/* Feature 4: Privacy & Security */}
            <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Zero Telemetry
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  No tracking scripts, analytics, or silent data collection. What you write stays on your machine.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400">
                Private By Design
              </div>
            </div>

            {/* Feature 5: AI Capabilities */}
            <div className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-slate-900 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Extensible AI Support
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Connect custom local models via Ollama or bring your own API keys for intelligent contextual assistance.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/40 dark:border-white/5 text-xs font-mono text-slate-500 dark:text-slate-400">
                Ollama / Custom API
              </div>
            </div>

          </div>
        </section>
        {/* Alternating Feature Showcase Section */}
        <section id="features" className="w-full pt-16 pb-24 space-y-24">
          
          {/* Feature 1: Side by Side (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                01 — Multi-Pane Workspace
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-slate-900 dark:text-white">
                Compare and edit side-by-side.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Work across multiple documents effortlessly. Keep your reference notes on one side and your code on the other with seamless pane management.
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-2.5 pt-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Split windows vertically or horizontally
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Independent scroll and focus state per pane
                </li>
              </ul>
            </div>

            {/* Image Window Side */}
            <div className="lg:col-span-7 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 h-10 border-b border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                </div>
                <span className="ml-auto text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  sidebyside.png
                </span>
              </div>
              <div className="relative w-full bg-slate-900/10 dark:bg-black/40">
                <Image
                  src="/sidebyside.png"
                  alt="Side by side preview"
                  width={1400}
                  height={875}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>


          {/* Feature 2: Terminal Request (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image Window Side (Shows first on desktop) */}
            <div className="lg:col-span-7 order-2 lg:order-1 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 h-10 border-b border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                </div>
                <span className="ml-auto text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  terminalrequest.png
                </span>
              </div>
              <div className="relative w-full bg-slate-900/10 dark:bg-black/40">
                <Image
                  src="/terminalrequest.png"
                  alt="Terminal request preview"
                  width={1400}
                  height={875}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-5 order-1 lg:order-2 text-left space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                02 — Embedded Terminal
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-slate-900 dark:text-white">
                Execute without context switching.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Run local scripts, inspect build processes, and interact directly with your workspace shell without ever leaving the application.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 pt-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Integrated CLI execution and task management
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Low-latency local terminal rendering
                </li>
              </ul>
            </div>
          </div>


          {/* Feature 3: Themes Choice (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text Side */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                03 — Customization
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-slate-900 dark:text-white">
                Tailored theme engine.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Choose the aesthetic that fits your environment. Switch seamlessly between dark obsidian tones and high-clarity light modes with a single click.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-2.5 pt-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Multiple built-in dark & light themes
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  Eye-strain reducing color contrast profiles
                </li>
              </ul>
            </div>

            {/* Image Window Side */}
            <div className="lg:col-span-7 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 h-10 border-b border-slate-200/50 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-white/20" />
                </div>
                <span className="ml-auto text-[10px] font-mono text-slate-400 dark:text-slate-500">
                  themeschoice.png
                </span>
              </div>
              <div className="relative w-full bg-slate-900/10 dark:bg-black/40">
                <Image
                  src="/themeschoice.png"
                  alt="Themes choice preview"
                  width={1400}
                  height={875}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </section>
        {/* FAQ Section */}
        <section id="faq" className="w-full pt-16 pb-20 border-t border-slate-200/50 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-mono font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-3">
              Got Questions?
            </h2>
            <p className="text-3xl sm:text-4xl font-serif tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {/* Question 1 */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Is Pencyl completely free and open source?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Yes! Pencyl is licensed under Apache-2.0. You can inspect the source code, build it from scratch, or contribute on GitHub.
              </p>
            </div>

            {/* Question 2 */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Where is my data stored?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Everything is stored 100% locally on your machine's file system. We do not operate remote servers or store your files in the cloud.
              </p>
            </div>

            {/* Question 3 */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Which operating systems are supported?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Pencyl runs natively on Windows, macOS (Intel & Apple Silicon), and Linux distributions.
              </p>
            </div>

            {/* Question 4 */}
            <div className="p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 backdrop-blur-md">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-400" />
                Can I use local LLMs with Pencyl?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Absolutely. You can connect local inference engines like Ollama or LM Studio directly via local endpoints.
              </p>
            </div>
          </div>
        </section>

        {/* CTA / OS Download Section */}
        <section id="download" className="w-full my-12">
          <div className="relative rounded-3xl bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-slate-500/10 dark:bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4 relative z-10">
              Ready to elevate your local workspace?
            </h2>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto mb-10 text-base sm:text-lg relative z-10">
              Download Pencyl for your operating system and take full control of your files.
            </p>

            {/* OS Download Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto relative z-10 mb-8">
              
              {/* Windows (.exe) */}
              <a
                href="https://github.com/GreatChijioke-01/pencyl/releases/download/v0.1.2/Pencyl_0.1.2_x64-setup.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 cursor-pointer active:scale-95 shadow-xl group border border-white/20"
              >
                <Monitor className="w-8 h-8 mb-3 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">Windows</span>
                <span className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-1">
                  <Download className="w-3 h-3" /> .exe Installer
                </span>
              </a>

              {/* macOS (.dmg) */}
              <a
                href="https://github.com/GreatChijioke-01/pencyl/releases/download/v0.1.2/Pencyl_0.1.2_aarch64.dmg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 cursor-pointer active:scale-95 shadow-xl group border border-white/20"
              >
                <Apple className="w-8 h-8 mb-3 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">macOS</span>
                <span className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-1">
                  <Download className="w-3 h-3" /> .dmg Disk Image
                </span>
              </a>

              {/* Linux (.AppImage) */}
              <a
                href="https://github.com/GreatChijioke-01/pencyl/releases/download/v0.1.2/Pencyl_0.1.2_amd64.AppImage"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 transition-all duration-200 cursor-pointer active:scale-95 shadow-xl group border border-white/20"
              >
                <Terminal className="w-8 h-8 mb-3 text-slate-800 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-base">Linux</span>
                <span className="text-xs text-slate-500 font-mono mt-1 flex items-center gap-1">
                  <Download className="w-3 h-3" /> .AppImage
                </span>
              </a>

            </div>

            {/* Secondary GitHub Source Link */}
            <div className="flex justify-center relative z-10">
              <a
                href="https://github.com/GreatChijioke-01/pencyl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <Star className="w-4 h-4" />
                View source code on GitHub
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200/50 dark:border-white/10 py-12 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900 dark:text-white text-sm">Pencyl</span>
            <span>•</span>
            <span>Local-first development tools.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</a>
            <a href="https://github.com/GreatChijioke-01/pencyl" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/company/pencyl-workspace" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/GreatChijioke-01/pencyl/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">License</a>
          </div>

          <p>© {new Date().getFullYear()} Pencyl. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}