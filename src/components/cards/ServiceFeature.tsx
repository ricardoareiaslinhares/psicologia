import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  title: string;
  desc: string;
  link: string;
  imageUrl: string;
  highlights?: string[];
  learnMore?: string;
};

const ServiceFeature = ({ title, desc, link, imageUrl, highlights, learnMore = "Saber mais" }: Props) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-foreground/5 bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Decorative accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/80" />

      <div className="flex flex-col lg:flex-row">
        {/* Image side */}
        <div className="relative flex items-center justify-center overflow-hidden bg-muted p-8 lg:w-2/5 lg:p-12">
          {/* Soft radial glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <Image
            src={imageUrl}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="relative z-10 h-48 w-48 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105 sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>

        {/* Content side */}
        <div className="flex flex-1 flex-col justify-center gap-6 p-8 lg:p-12">
          <div>
            <h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight">
              {title}
            </h3>
            <p className="text-base leading-relaxed text-secondary">
              {desc}
            </p>
          </div>

          {/* Highlight pills */}
          {highlights && highlights.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {highlights.map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-colors duration-200 group-hover:bg-primary/10"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="pt-2">
            <Button asChild className="gap-2 rounded-full px-6 py-5 text-base font-semibold shadow-sm transition-all duration-200 hover:shadow-md">
              <Link href={link}>
                {learnMore}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeature;
