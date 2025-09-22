const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} Tobias van Dorp. Gemaakt met Next.js, Tailwind CSS en een gezonde dosis nieuwsgierigheid.
        </p>
        <p className="text-slate-500">
          Altijd open voor een kennismaking of een nieuw avontuur.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
