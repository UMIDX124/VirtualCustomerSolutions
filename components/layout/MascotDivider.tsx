import { Mascot } from './Mascot';

export function MascotDivider() {
  return (
    <div className="hidden md:flex items-center gap-4 py-4 container-wide">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#22C55E]/15" />
      <div className="opacity-40">
        <Mascot size={32} disableInteraction />
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#22C55E]/15" />
    </div>
  );
}
