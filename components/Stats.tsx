import React from 'react';

const stats = [
  { label: 'Total Visits', value: '70B+' },
  { label: 'Peak Concurrent Users — Owned', value: '33k' },
  { label: 'Peak Concurrent Users — Contributed', value: '24.9M' },
  { label: 'Subscribers', value: '650k' },
  { label: 'Total Views', value: '40M+' },
  { label: 'UGC Sales', value: '3M+' },
  { label: 'Community Members', value: '350k' },
];

export const Stats: React.FC = () => {
  return (
    <section className="stats" aria-label="Career metrics">
      <div className="stats__marquee" aria-hidden="true">
        <span>Production · Community · Growth · Games · Production · Community · Growth · Games ·</span>
        <span>Production · Community · Growth · Games · Production · Community · Growth · Games ·</span>
      </div>

      <dl className="stats__grid container">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat" data-reveal="up">
            <span className="stat__index">{String(index + 1).padStart(2, '0')}</span>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
