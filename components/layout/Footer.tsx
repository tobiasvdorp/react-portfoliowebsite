import { Github, Linkedin, Mail } from 'lucide-react';
import { contactDetails } from '@/lib/content';

const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/70">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <div className="space-y-1 text-sm text-slate-400">
        <p className="font-medium text-slate-200">Laten we samenwerken</p>
        <a
          href={contactDetails.email}
          className="inline-flex items-center gap-2 text-slate-300 transition hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {contactDetails.emailLabel}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={contactDetails.socials[0].href}
          className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={contactDetails.socials[1].href}
          className="rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
    <div className="bg-slate-950/80 py-4">
      <p className="text-center text-xs text-slate-500">© {new Date().getFullYear()} Tobias van Dorp. Alle rechten voorbehouden.</p>
    </div>
  </footer>
);

export default Footer;
