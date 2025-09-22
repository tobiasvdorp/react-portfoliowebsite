'use client';

import { FormEvent, useState } from 'react';
import FadeIn from '../common/FadeIn';

type ContactFormProps = {
  endpoint: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = ({ endpoint }: ContactFormProps) => {
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFeedback('Bedankt voor je bericht! Ik reageer zo snel mogelijk.');
        form.reset();
      } else {
        setStatus('error');
        setFeedback('Er ging iets mis. Probeer het later nog een keer.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('Er ging iets mis. Probeer het later nog een keer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <FadeIn className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-200">
          Naam
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="Hoe kan ik je noemen?"
        />
      </FadeIn>
      <FadeIn delay={0.1} className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-200">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="Waar kan ik je bereiken?"
        />
      </FadeIn>
      <FadeIn delay={0.2} className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-[160px] rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          placeholder="Vertel me meer over je idee of vraag"
        />
      </FadeIn>
      <FadeIn delay={0.3}>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-emerald-400/60"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Versturen…' : 'Bericht versturen'}
        </button>
      </FadeIn>
      {feedback ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-300' : 'text-red-300'}`}>{feedback}</p>
      ) : null}
    </form>
  );
};

export default ContactForm;
