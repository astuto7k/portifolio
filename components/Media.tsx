import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';

const mediaArticles = [
  {
    outlet: 'G1 Globo',
    title: '“Roblox” attracts developers as young as 12 by offering the opportunity to create games and earn money',
    href: 'https://g1.globo.com/pop-arte/games/noticia/2021/01/08/roblox-atrai-desenvolvedores-de-ate-12-anos-com-possibilidade-de-criar-jogos-e-ganhar-dinheiro.ghtml',
  },
  {
    outlet: 'Medium',
    title: 'Spotlights in Guga028',
    href: 'https://medium.com/roblox-developer-portugu%C3%AAs/holofotes-em-guga028-e-phoenix-rdn-2109378342a8',
  },
  {
    outlet: 'Interview',
    title: 'Roblox DevRel Interview',
    href: 'https://www.youtube.com/watch?v=WjUjewb2VeM',
    isVideo: true,
  },
  {
    outlet: 'Showcase',
    title: 'Winner of BGS Roblox Gamejam Challenge',
    href: 'https://www.youtube.com/watch?v=gUM2RqX_MHs&pp=ygUYc2J0IGJncyByb2Jsb3ggY2hhbGxlbmdl2AYE',
    isVideo: true,
  },
];

const outlets = ['CNN Brasil', 'SBT', 'Brasil Game Show', 'Roblox DevRel', 'The Enemy'];

export const Media: React.FC = () => {
  return (
    <section className="section media" aria-labelledby="media-title">
      <div className="container">
        <div className="media__header" data-reveal="up">
          <div>
            <p className="eyebrow">Featured in / 05</p>
            <h2 id="media-title" className="section-title">Press &amp;<br /><span>recognition.</span></h2>
          </div>
          <p>Stories, interviews and milestones across the Roblox ecosystem.</p>
        </div>

        <div className="media__grid">
          {mediaArticles.map((article, index) => (
            <a
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`media-card ${index === 0 ? 'media-card--featured' : ''}`}
              data-reveal="up"
              aria-label={`${article.outlet}: ${article.title}`}
            >
              <div className="media-card__top">
                <span>{String(index + 1).padStart(2, '0')} / {article.outlet}</span>
                {article.isVideo ? <Play size={18} aria-hidden="true" /> : <ArrowUpRight size={18} aria-hidden="true" />}
              </div>
              <h3>{article.title}</h3>
              <div className="media-card__footer">
                <span>Read the full story</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>

        <div className="outlet-strip" data-reveal="up" aria-label="Additional media outlets">
          <span className="eyebrow">Also seen on</span>
          <div>
            {outlets.map((outlet) => <span key={outlet}>{outlet}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};
