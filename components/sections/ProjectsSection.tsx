import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { projects } from '@/lib/content';

const categoryLabel: Record<'school' | 'client' | 'personal', string> = {
  school: 'Studieproject',
  client: 'Klantproject',
  personal: 'Persoonlijk project',
};

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 sm:py-28">
    <div className="absolute inset-x-0 top-10 -z-10 h-[360px] bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent 65%)] blur-3xl" />

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Projecten"
        title="Projecten waar ik trots op ben"
        description="Van studieopdrachten tot klantprojecten: elk project bracht me nieuwe inzichten in design, techniek en samenwerking."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <SpotlightCard key={project.title}>
            <article className="flex h-full flex-col gap-6">
              <div className="-mx-6 -mt-6 overflow-hidden rounded-t-[calc(1.5rem-2px)] border-b border-white/5 bg-slate-900/60 sm:-mx-8 sm:-mt-8">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Badge>{categoryLabel[project.category]}</Badge>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-200">
                  {project.summary}
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>
              </div>

              <div className="mt-auto">
                {project.href ? (
                  <a
                    href={project.href}
                    target={project.href.startsWith('http') ? '_blank' : undefined}
                    rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-white"
                  >
                    Bekijk project
                    <RiArrowRightLine className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-400">Case study in voorbereiding</span>
                )}
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
