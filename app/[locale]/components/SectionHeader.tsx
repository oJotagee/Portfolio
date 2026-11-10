type Props = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ index, label, title, description }: Props) {
  return (
    <header className="mb-14">
      <div className="flex items-center gap-3 border-t border-line-strong pt-3 font-mono text-xs tracking-widest text-faint uppercase">
        <span className="text-ink">{index}</span>
        <span>{label}</span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-md self-end text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
