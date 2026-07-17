import React from 'react';
import { ArrowUpRight, Linkedin, Mail, MessageSquare, Youtube } from 'lucide-react';
import { TikTokIcon, XIcon } from './SocialIcons';

const socials = [
  { name: 'LinkedIn', icon: <Linkedin size={20} aria-hidden="true" />, href: 'https://www.linkedin.com/in/gustavo-cantino-1530731b6/', label: 'Gustavo Cantino' },
  { name: 'X / Twitter', icon: <XIcon size={20} />, href: 'https://x.com/Guga_028', label: '@Guga_028' },
  { name: 'YouTube', icon: <Youtube size={20} aria-hidden="true" />, href: 'https://www.youtube.com/@Guga028', label: '@Guga028' },
  { name: 'TikTok', icon: <TikTokIcon size={20} />, href: 'https://www.tiktok.com/@guga_028', label: '@guga_028' },
  { name: 'Discord', icon: <MessageSquare size={20} aria-hidden="true" />, href: 'https://discord.com/users/168572769', label: 'guga028' },
  { name: 'Email', icon: <Mail size={20} aria-hidden="true" />, href: 'mailto:contato.guga028@gmail.com', label: 'contato.guga028@gmail.com' },
];

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__background" aria-hidden="true">
        <span>CONNECT</span>
        <i />
      </div>

      <div className="container contact__inner">
        <div className="contact__heading" data-reveal="up">
          <p className="eyebrow">Contact / 06</p>
          <h2 id="contact-title">Let's<br /><span>connect.</span></h2>
          <p>
            Available for high-impact production and creative direction. Let's build the next generation of experiences together.
          </p>
        </div>

        <a className="contact__email" href="mailto:contato.guga028@gmail.com" data-reveal="up">
          <span>Start a conversation</span>
          <strong>contato.guga028@gmail.com</strong>
          <i><ArrowUpRight size={28} aria-hidden="true" /></i>
        </a>

        <div className="contact__socials" data-reveal="up">
          {socials.map((social) => {
            const external = social.href.startsWith('http');
            return (
              <a
                key={social.name}
                href={social.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                <span className="contact__social-icon">{social.icon}</span>
                <span>
                  <small>{social.name}</small>
                  <strong>{social.label}</strong>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
