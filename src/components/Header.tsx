import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0C20]/95 backdrop-blur-lg border-b border-[#8B4DFF]/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <img
            src="/WhatsApp Image 2025-11-01 at 23.24.07_ddb5a4ff.jpg"
            alt="HAPPI MISS GLOBAL"
            className="h-12 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white hover:text-[#00B8E6] transition-colors uppercase text-sm tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-2 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] text-white uppercase tracking-wider text-sm font-semibold rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(139,77,255,0.6)] transition-all duration-300"
            >
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-[#0B0C20]/95 backdrop-blur-lg rounded-lg border border-[#8B4DFF]/20">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-[#00B8E6] transition-colors uppercase text-sm tracking-wider font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="px-8 py-2 bg-gradient-to-r from-[#00B8E6] to-[#8B4DFF] text-white uppercase tracking-wider text-sm font-semibold rounded-full hover:scale-105 transition-all duration-300 text-center"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
