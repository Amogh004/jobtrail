const companies = [
  "Northwind",
  "Acme Corp",
  "Lumen",
  "Hyperline",
  "Cascade",
  "Meridian",
];

export function LogoCloud() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by candidates who landed roles at
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {companies.map((name) => (
          <span
            key={name}
            className="text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
