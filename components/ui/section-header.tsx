import { Reveal } from "@/components/motion/reveal";
import { Kicker } from "@/components/ui/kicker";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  id?: string;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  tone = "default",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isLight = tone === "light";

  return (
    <Reveal className={cn(isCentered ? "mx-auto max-w-[780px] text-center" : "max-w-[760px]", className)}>
      <Kicker
        tone={isLight ? "light" : "default"}
        className={cn(
          "px-4 py-2 text-[11px] font-semibold tracking-[0.24em]",
          isLight ? "border-white/16 bg-white/8 text-white/74" : "border-brand-primary/10 bg-white/70 text-brand-primary/72",
        )}
      >
        {eyebrow}
      </Kicker>
      <div
        aria-hidden="true"
        className={cn(
          "mt-4 h-px w-20 bg-[linear-gradient(90deg,rgba(62,30,104,0.28),rgba(228,90,146,0.18),transparent)]",
          isCentered && "mx-auto",
          isLight && "bg-[linear-gradient(90deg,rgba(255,255,255,0.45),rgba(255,255,255,0.16),transparent)]",
        )}
      />
      <h2
        id={id}
        className={cn(
          "mt-6 max-w-[15ch] text-[35px] font-semibold leading-[1.1] tracking-[-0.052em] md:text-[41px] lg:text-[47px]",
          isCentered && "mx-auto",
          isLight ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-6 text-[16px] leading-[1.82] md:text-[17px]",
          isCentered ? "mx-auto max-w-[660px]" : "max-w-[630px]",
          isLight ? "text-white/70" : "text-muted/95",
        )}
      >
        {description}
      </p>
    </Reveal>
  );
}
