'use client';

import { FormEvent, useState } from 'react';
import { RiArrowRightUpLine, RiCheckLine, RiDiscordFill, RiErrorWarningLine, RiLoader4Line } from 'react-icons/ri';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { contactCopy, socialLinks } from '@/lib/content';

const inputStyles =
  'block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300/40';

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('idle');
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      form.reset();
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyDiscord = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(contactCopy.discordHandle);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[320px] bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent 60%)] blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Contact"
          title={contactCopy.title}
          description={contactCopy.description}
          align="center"
        />

        <div className="mt-12">
          <SpotlightCard>
            <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                      Naam
                    </label>
                    <input id="name" name="name" type="text" required className={inputStyles} autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputStyles}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className={`${inputStyles} min-h-[160px] resize-none`}
                  />
                </div>

                <p className="text-xs text-slate-500">
                  Deze demo stuurt nog geen e-mail, maar ik reageer graag via de kanalen hiernaast.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <RiLoader4Line className="h-4 w-4 animate-spin" />
                      Verzenden...
                    </>
                  ) : (
                    <>
                      Bericht versturen
                      <RiArrowRightUpLine className="h-4 w-4" />
                    </>
                  )}
                </button>

                {status !== 'idle' ? (
                  <div
                    className={
                      status === 'success'
                        ? 'inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300'
                        : 'inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-300'
                    }
                  >
                    {status === 'success' ? <RiCheckLine className="h-4 w-4" /> : <RiErrorWarningLine className="h-4 w-4" />}
                    {status === 'success'
                      ? 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact op.'
                      : 'Er ging iets mis. Probeer het opnieuw of stuur me een DM.'}
                  </div>
                ) : null}
              </form>

              <aside className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 backdrop-blur">
                <div className="space-y-2">
                  <p className="font-semibold text-white">Lievere een DM?</p>
                  <button
                    type="button"
                    onClick={copyDiscord}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-300 hover:text-white"
                  >
                    <RiDiscordFill className="h-5 w-5" />
                    {copied ? 'Gekopieerd!' : contactCopy.discordHandle}
                  </button>
                  <p className="text-xs text-slate-500">Klik om mijn Discord gebruikersnaam te kopiëren.</p>
                </div>

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">Volg mee</p>
                  <ul className="flex gap-3">
                    {socialLinks.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-brand-300 hover:text-white"
                          aria-label={social.tooltip}
                        >
                          <social.icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
