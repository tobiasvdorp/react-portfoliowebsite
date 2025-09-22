import AnimatedEyebrow from './AnimatedEyebrow';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const alignmentMap = {
  left: 'text-left',
  center: 'text-center mx-auto',
} as const;

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <div className={`space-y-3 ${alignmentMap[align]} max-w-2xl`}> 
    {eyebrow ? (
      <AnimatedEyebrow text={eyebrow} className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300" />
    ) : null}
    <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
    {description ? (
      <p className="text-base text-slate-300 sm:text-lg">{description}</p>
    ) : null}
  </div>
);

export default SectionHeading;
