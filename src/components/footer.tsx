import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";

const FingerprintIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-icon lucide-fingerprint text-current">
    <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
    <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
    <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/>
    <path d="M2 12a10 10 0 0 1 18-6"/>
    <path d="M2 16h.01"/>
    <path d="M21.8 16c.2-2 .131-5.354 0-6"/>
    <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/>
    <path d="M8.65 22c.21-.66.45-1.32.57-2"/>
    <path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>
  </svg>
);

const footerLinks = [
  {
    title: "Inicio",
    href: "#",
  },
  {
    title: "El Conflicto",
    href: "#conflicto",
  },
  {
    title: "Testimonios",
    href: "#actua",
  },
  {
    title: "Actúa",
    href: "#tu-indiferencia",
  },

  {
    title: "Contacto",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="py-6 flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FingerprintIcon />
            <h3 className="text-xl font-bold text-black dark:text-white">SUDÁN-FREE</h3>
          </div>

          <ul className="mt-4 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
          <Separator />
          <div className="py-4 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-3 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                Sudán: Anatomía del Silencio
              </a>
              . No dejes que gane el silencio.
            </span>

            <div className="flex items-center gap-5 text-gray-600 dark:text-gray-300">
              <a href="#" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                <DribbbleIcon className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                <TwitchIcon className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" className="hover:text-black dark:hover:text-white transition-colors">
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
