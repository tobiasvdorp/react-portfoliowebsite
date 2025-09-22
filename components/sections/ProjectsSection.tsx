import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../common/FadeIn';
import { projects } from '@/lib/content';

const ProjectsSection = () => (
  <section id="projects" className="space-y-10">
    <SectionHeading
      eyebrow="Portfolio"
      title="Projecten waar ik trots op ben"
      description="Een mix van studieopdrachten en klantwerk waarin ik mijn liefde voor gebruiksvriendelijke interfaces kwijt kan."
    />
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <FadeIn
          key={project.title}
          delay={0.1 * index}
          className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 transition hover:border-emerald-300/40"
        >
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-1 text-sm text-emerald-200">{project.summary}</p>
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:border-emerald-300/50 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              ) : null}
            </div>
            <p className="text-sm text-slate-300">{project.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 text-xs text-emerald-200">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
