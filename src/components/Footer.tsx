import { MapPin, Mail, Phone, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#1a1b35] to-[#0B0C20] border-t border-[#8B4DFF]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="/WhatsApp Image 2025-11-01 at 23.24.07_ddb5a4ff.jpg"
              alt="HAPPI MISS GLOBAL"
              className="h-20 w-auto"
            />
            <p className="text-[#CFCFD5] text-sm leading-relaxed">
              Happi Miss Global redefines pageantry as a celebration of youth, intellect, and purpose — empowering women to embody confidence with compassion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(139,77,255,0.6)] transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(139,77,255,0.6)] transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#00B8E6] to-[#8B4DFF] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-[0_0_15px_rgba(139,77,255,0.6)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#journey" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#CFCFD5] hover:text-[#00B8E6] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00B8E6] flex-shrink-0 mt-1" />
                <p className="text-[#CFCFD5] text-sm">The Beginning,
Bengaluru, Karnataka</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#00B8E6] flex-shrink-0 mt-1" />
                <p className="text-[#CFCFD5] text-sm">ea@happimissglobal.com
</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#00B8E6] flex-shrink-0 mt-1" />
                <p className="text-[#CFCFD5] text-sm">+91 98800 12482</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8B4DFF]/20 pt-8">
          <p className="text-center text-[#CFCFD5] text-sm">
            © 2025 Happi Miss Global. All rights reserved. Empowering elegance and confidence worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
