import clsx from 'clsx';

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionHeading = ({ kicker, title, description, align = 'left' }: SectionHeadingProps) => (
  <div
    className={clsx('flex flex-col gap-3', {
      'text-center sm:items-center': align === 'center',
    })}
  >
    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-200">{kicker}</span>
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
      {title}
    </h2>
    {description ? (
      <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionHeading;
