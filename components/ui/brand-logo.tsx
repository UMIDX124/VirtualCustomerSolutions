import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({ className, imageClassName, priority = false }: BrandLogoProps) {
  return (
    <span className={cn("flex items-center", className)}>
      <Image
        src="/digitalpoint-logo.png"
        alt="DigitalPoint LLC logo"
        width={1492}
        height={472}
        priority={priority}
        className={cn("h-auto w-full object-contain", imageClassName)}
      />
    </span>
  );
}
