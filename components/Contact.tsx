'use client';

import { FormEvent, useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { TbArrowsCross } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import useWOW from '@/hooks/useWOW';
import { iconButtonClasses, primaryButtonClasses, sectionSubtitleClasses, sectionTitleClasses } from '@/lib/styles';
import Socials from './Socials';

const formEndpoint = 'https://formspree.io/f/xknlznnl';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [isDisordered, setIsDisordered] = useState(false);

  useWOW();

  const toggleDisordered = () => {
    setIsDisordered((prev) => !prev);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString() ?? '',
      email: formData.get('email')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
    };

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (data.ok) {
        setStatus(t('messageSent'));
        form.reset();
      } else {
        setStatus(t('somethingWentWrong'));
      }
    } catch (error) {
      console.error(error);
      setStatus(t('somethingWentWrong'));
    }
  };

  const getFieldAnimation = (speedClass: string) =>
    isDisordered
      ? `animate__animated animate__bounceInDown ${speedClass}`
      : `wow animate__animated animate__flipInX ${speedClass}`;

  const getFieldWrapperClasses = (field: 'name' | 'email' | 'message') => {
    const base = 'flex w-full flex-col items-center gap-2 text-center sm:items-start sm:text-left';
    if (!isDisordered) {
      return base;
    }

    const skewClasses = field === 'email' ? '-skew-x-[14deg] -skew-y-[14deg]' : 'skew-x-[14deg] skew-y-[14deg]';
    const extraMargin = field === 'message' ? 'mt-12' : '';
    return `${base} ${skewClasses} ${extraMargin}`;
  };

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-5" id="contact">
      <div className="flex w-full items-center justify-center gap-4">
        <h2 className={sectionTitleClasses}>{t('getInTouch')}</h2>
        <button
          className={`${iconButtonClasses} text-2xl`}
          onClick={toggleDisordered}
          type="button"
          aria-label="Toggle animations"
        >
          {isDisordered ? <TbArrowsCross /> : <FaGripLines />}
        </button>
      </div>
      <h3 className={sectionSubtitleClasses}>{t('friendRequestAccepted')}</h3>
      <form className="flex w-full max-w-[550px] flex-col items-center gap-5 transition-all duration-500" onSubmit={handleSubmit}>
        <div className={`${getFieldWrapperClasses('name')} ${getFieldAnimation('animate__slower')}`}>
          <label className="font-heading text-lg" htmlFor="name">
            {t('nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 h-10 w-full rounded-md border-2 border-accent bg-secondary px-3 font-body text-base text-primary outline-none transition-shadow duration-300 focus:shadow-[0_0_10px_1px_var(--accent)]"
          />
        </div>
        <div className={`${getFieldWrapperClasses('email')} ${getFieldAnimation('animate__slow')}`}>
          <label className="font-heading text-lg" htmlFor="email">
            {t('emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 h-10 w-full rounded-md border-2 border-accent bg-secondary px-3 font-body text-base text-primary outline-none transition-shadow duration-300 focus:shadow-[0_0_10px_1px_var(--accent)]"
          />
        </div>
        <div className={`${getFieldWrapperClasses('message')} ${getFieldAnimation('animate__fast')}`}>
          <label className="font-heading text-lg" htmlFor="message">
            {t('messageLabel')}
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="mt-1 min-h-[120px] w-full rounded-md border-2 border-accent bg-secondary px-3 py-2 font-body text-base text-primary outline-none transition-shadow duration-300 focus:shadow-[0_0_10px_1px_var(--accent)]"
            onInput={(event) => {
              const target = event.currentTarget;
              target.style.height = '';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
        </div>
        <div
          className={`flex w-full justify-center ${
            isDisordered
              ? 'animate__animated animate__bounceInDown animate__faster'
              : 'wow animate__animated animate__bounceInDown animate__flipInX'
          }`}
        >
          <button type="submit" className={primaryButtonClasses}>
            {t('sendButton')}
          </button>
        </div>
        <div className="flex w-full justify-center">
          {status && (
            <p className="animate__animated animate__fadeInLeft rounded-md bg-secondary px-4 py-3 font-medium text-white shadow-[0_0_10px_1px_var(--accent)]">
              {status}
            </p>
          )}
        </div>
      </form>
      <h3 className={`${sectionSubtitleClasses} !mt-4`} id="findme">
        {t('orFindMeOn')}
      </h3>

      <Socials />
    </section>
  );
};

export default Contact;
