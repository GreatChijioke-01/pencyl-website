'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Docs', href: 'https://github.com/GreatChijioke-01/pencyl/blob/main/README.md', external: true },
    { label: 'GitHub', href: 'https://github.com/GreatChijioke-01/pencyl', external: true, icon: GithubIcon },
    { label: 'Changelogs', href: 'https://github.com/GreatChijioke-01/pencyl/releases', external: true },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-white/10 bg-white/30 dark:bg-slate-950/30 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left End: Website Title with App Icon */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2.5 group transition-transform active:scale-95"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-200/60 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:border-slate-400 dark:group-hover:border-white/30">
                {/* Light Mode Logo */}
                <Image
                  src="/app-icon.png"
                  alt="Pencyl Logo"
                  width={32}
                  height={32}
                  className="object-cover group-hover:scale-105 transition-transform duration-300 dark:hidden"
                  priority
                />
                {/* Dark Mode Logo */}
                <Image
                  src="/app-icon-white.png"
                  alt="Pencyl Logo"
                  width={32}
                  height={32}
                  className="object-cover group-hover:scale-105 transition-transform duration-300 hidden dark:block"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                Pencyl
              </span>
            </Link>

            {/* Desktop Navigation - Glass Ghost Buttons */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-200/50 dark:hover:bg-white/10 backdrop-blur-sm transition-all cursor-pointer"
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-200/50 dark:hover:bg-white/10 backdrop-blur-sm transition-all cursor-pointer"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right End: Actions & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Transparent Glass CTA Button */}
            <Link
              href="#download"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-900 dark:text-white bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 border border-slate-300/80 dark:border-white/15 backdrop-blur-md rounded-lg shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
            >
              Get Pencyl
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 backdrop-blur-sm transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-slate-950/70 backdrop-blur-2xl px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                <span className="flex items-center gap-2">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
          <div className="pt-2">
            <Link
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-base font-medium text-slate-900 dark:text-white bg-white/50 dark:bg-white/10 hover:bg-white/70 dark:hover:bg-white/20 border border-slate-300/80 dark:border-white/15 backdrop-blur-md rounded-lg shadow-sm transition-all"
            >
              Get Pencyl
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}