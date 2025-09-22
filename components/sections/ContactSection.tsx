import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../common/FadeIn';
import ContactForm from './ContactForm';
import { contactDetails } from '@/lib/content';

const ContactSection = () => (
  <section id="contact" className="space-y-10">
    <SectionHeading
      eyebrow="Contact"
      title="Laten we iets moois bouwen"
      description="Vertel me over je project of stuur gewoon een berichtje. Ik reageer meestal binnen één werkdag."
    />
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <FadeIn className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
        <h3 className="text-lg font-semibold text-slate-50">Direct contact</h3>
        <div className="space-y-4 text-sm text-slate-300">
          <a
            href={contactDetails.email}
            className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3 transition hover:border-emerald-300/40 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            <Mail className="h-5 w-5 flex-shrink-0 text-emerald-300" aria-hidden />
            <span>{contactDetails.emailLabel}</span>
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/50 px-4 py-3">
            <MessageCircle className="h-5 w-5 flex-shrink-0 text-emerald-300" aria-hidden />
            <span>Discord: {contactDetails.discord}</span>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-200">Volg mijn werk</p>
          <div className="flex gap-3">
            {contactDetails.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
              >
                {social.label === 'GitHub' ? <Github className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
        <h3 className="mb-4 text-lg font-semibold text-slate-50">Stuur een bericht</h3>
        <ContactForm endpoint={contactDetails.formEndpoint} />
      </div>
    </div>
  </section>
);

export default ContactSection;
