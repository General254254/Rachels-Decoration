import { footerConfig } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  if (!footerConfig.logo) return null;

  return (
    <footer className="relative w-full bg-[#0B0B0D] border-t border-white/10 py-8">
      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-black text-xl text-white hover:text-pink transition-colors duration-300"
          >
            {footerConfig.logo}<span className="text-pink">{footerConfig.logoAccent}</span>
          </a>

          {/* Copyright */}
          {footerConfig.copyrightText && (
            <p className="font-body text-white/30 text-sm">
              © {currentYear} {footerConfig.copyrightText}
            </p>
          )}

          {/* Legal links */}
          {footerConfig.legalLinks.length > 0 && (
            <div className="flex gap-6">
              {footerConfig.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-white/30 text-sm hover:text-pink transition-colors duration-300"
                  data-cursor-hover
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Large decorative text */}
      {footerConfig.decorativeText && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="font-display font-black text-[15vw] text-white/[0.02] leading-none text-center translate-y-1/3">
            {footerConfig.decorativeText}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
