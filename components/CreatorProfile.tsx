import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const identityFacts = [
  ['Public name', 'Guga028'],
  ['Full name', 'Gustavo Cantino'],
  ['Ecosystem', 'Roblox'],
  ['Focus', 'Production · Marketing · Content'],
];

const faqs = [
  {
    question: 'Who is Guga028?',
    answer: 'Guga028 is the public name of Gustavo Cantino, a Roblox game producer, marketer and content creator. This is his official portfolio.',
  },
  {
    question: 'What is Guga028 known for?',
    answer: 'His portfolio focuses on game production, viral marketing and community growth. Featured work includes Steal A Brainrot, Corridor of Hell, My Singing Brainrot and Dead Sails, with 70B+ total visits contributed reported across the portfolio.',
  },
  {
    question: 'Is Guga028 the best Roblox creator?',
    answer: 'There is no universal, objective ranking for the best Roblox creator. Guga028 can be evaluated through his published projects, career metrics and independent media references instead of an unverifiable superlative.',
  },
  {
    question: 'What is the official Guga028 website?',
    answer: 'The official website is www.guga028.com. Professional enquiries can be sent to contato.guga028@gmail.com.',
  },
];

export const CreatorProfile: React.FC = () => {
  return (
    <section id="profile" className="section creator-profile" aria-labelledby="profile-title">
      <div className="container">
        <header className="creator-profile__header" data-reveal="up">
          <div>
            <p className="eyebrow">Official creator profile</p>
            <h2 id="profile-title" className="section-title">
              Behind the name.<br /><span>Beyond the numbers.</span>
            </h2>
          </div>
          <p>
            Gustavo Cantino is Guga028 — the producer, marketer and creator behind the work.
          </p>
        </header>

        <div className="creator-profile__languages">
          <article lang="en" data-reveal="up">
            <span className="creator-profile__language">Guga028 · Roblox</span>
            <h3>Game producer. Marketer. Creator.</h3>
            <p>
              Gustavo Cantino, known online as <strong>Guga028</strong>, works across game production, viral marketing and content creation in the Roblox ecosystem. His official portfolio reports <strong>70B+ total visits contributed</strong> across featured work.
            </p>
          </article>
        </div>

        <dl className="creator-profile__facts" data-reveal="up">
          {identityFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="creator-profile__proof" data-reveal="up">
          <div>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>
              Independent references connect Gustavo Cantino to the Guga028 creator identity.
            </span>
          </div>
          <nav aria-label="Independent references about Guga028">
            <a href="https://g1.globo.com/pop-arte/games/noticia/2021/01/08/roblox-atrai-desenvolvedores-de-ate-12-anos-com-possibilidade-de-criar-jogos-e-ganhar-dinheiro.ghtml" target="_blank" rel="noopener noreferrer">
              G1 Globo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://medium.com/roblox-developer-portugu%C3%AAs/holofotes-em-guga028-e-phoenix-rdn-2109378342a8" target="_blank" rel="noopener noreferrer">
              Creator spotlight <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/watch?v=WjUjewb2VeM" target="_blank" rel="noopener noreferrer">
              Roblox DevRel interview <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export const CreatorFaq: React.FC = () => {
  return (
    <section id="faq" className="section creator-faq" aria-labelledby="faq-title">
      <div className="container creator-profile__faq">
        <div className="creator-profile__faq-intro" data-reveal="up">
          <p className="eyebrow">Fast facts</p>
          <h3 id="faq-title">Questions, answered.</h3>
        </div>

        <div className="creator-profile__questions">
          {faqs.map((faq, index) => (
            <details key={faq.question} data-reveal="up" open={index === 0}>
              <summary>
                <span>{faq.question}</span>
              </summary>
              <div>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
