const industries = [
  'E-Commerce',
  'SaaS',
  'Healthcare',
  'Real Estate',
  'Finance',
  'Agencies',
  'Education',
  'Logistics',
];

export function TrustBar() {
  return (
    <section className="py-6 sm:py-8 border-b border-white/[0.04]">
      <div className="container-wide">
        <p className="text-center text-xs text-white/30 uppercase tracking-widest mb-4">
          Working with businesses in
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-x-10">
          {industries.map((name) => (
            <span
              key={name}
              className="text-sm sm:text-base font-medium text-white/20 hover:text-white/40 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
