'use client';

import Link from 'next/link';
import { Lang, languages } from '@/app/i18n/config';

export default function LanguageSwitcher({
  currentLang,
}: {
  currentLang: Lang;
}) {
  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex gap-1 sm:gap-2">
      {languages.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
            currentLang === l
              ? 'bg-foreground dark:bg-dark-foreground text-white dark:text-dark-white'
              : 'bg-background dark:bg-dark-background text-white dark:text-dark-white border border-grey dark:border-dark-grey'
          }`}
          aria-current={currentLang === l ? 'true' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}