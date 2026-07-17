import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Gustavo Cantino</p>

        <p className="footer__credit">
          <span>Crafted for the virtual age · Powered by</span>
          <a
            href="https://discord.com/channels/@me/1057488804497326152"
            target="_blank"
            rel="noopener noreferrer"
          >
            Astuto
          </a>
        </p>

        <a href="#home" className="footer__top">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
