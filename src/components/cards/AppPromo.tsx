import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  desc: string;
  cta: string;
  badge: string;
  image: string;
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rlpsicologia.levelup";

const AppPromo = ({ title, subtitle, desc, cta, badge, image }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground/5 bg-card shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Banner image */}
        <div className="relative w-full lg:w-2/5 overflow-hidden bg-muted">
          <Image
            src={image}
            alt={`${title} - ${subtitle}`}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-48 sm:h-56 lg:h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 flex-wrap">
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <span className="text-sm text-secondary">{subtitle}</span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {badge}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-2.5 py-1 text-xs font-medium text-foreground/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84 1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0 0 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 0 0 6 7h12c0-2.21-1.2-4.15-2.97-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
              Android
            </span>
          </div>
          <p className="text-base text-secondary leading-relaxed">
            {desc}
          </p>
          <div className="mt-2">
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92ZM14.852 13.06l2.29 2.29-11.2 6.451 8.91-8.741ZM20.16 10.6c.68.394.84 1.006.84 1.4s-.16 1.006-.84 1.4l-2.396 1.383-2.52-2.52 2.52-2.52L20.16 10.6ZM5.942 2.199l11.2 6.452-2.29 2.29-8.91-8.742Z" />
              </svg>
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
