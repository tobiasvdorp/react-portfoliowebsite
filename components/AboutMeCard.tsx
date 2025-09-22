'use client';

import type { ReactNode } from 'react';
import useWOW from '@/hooks/useWOW';

type AboutMeCardProps = {
  title: string;
  date: string;
  location: string;
  description: ReactNode;
  className?: string;
};

const AboutMeCard = ({ title, date, location, description, className = 'animate__fadeInRight animate__animated' }: AboutMeCardProps) => {
  useWOW();

  return (
    <li className="relative pl-6 before:absolute before:-left-[19px] before:top-9 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-accent before:shadow-[0_0_8px_1px_var(--accent)] before:content-['']">
      <div className={`wow ${className} relative rounded-lg border border-accent/40 bg-secondary px-6 py-6 text-left text-white shadow-card`}>
        <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
        <div className="absolute right-6 top-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-70">
          <i className="fa fa-calendar" />
          {date}
        </div>
        <h4 className="mt-10 flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-white/80">
          <i className="fa fa-flag fa-sm" />
          {location}
        </h4>
        <p className="mt-4 text-base text-white/80">{description}</p>
      </div>
    </li>
  );
};

export default AboutMeCard;
