import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

const SectionHeading = ({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) => (
  <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
    {eyebrow ? (
      <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-highlight" aria-hidden />
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
    {description ? <p className="max-w-3xl text-base text-muted-foreground sm:text-lg">{description}</p> : null}
  </div>
);

export default SectionHeading;
