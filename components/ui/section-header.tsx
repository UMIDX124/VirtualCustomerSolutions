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
    <Reveal className={cn(isCentered ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]", className)}>
      <Kicker tone={isLight ? "light" : "default"}>{eyebrow}</Kicker>
      <h2
        id={id}
        className={cn(
          "mt-6 text-[32px] font-semibold leading-[1.2] md:text-[36px] lg:text-[40px]",
          isLight ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-6 text-base leading-[1.7]",
          isCentered ? "mx-auto max-w-[720px]" : "max-w-[720px]",
          isLight ? "text-white/72" : "text-muted",
        )}
      >
        {description}
      </p>
    </Reveal>
  );
}
