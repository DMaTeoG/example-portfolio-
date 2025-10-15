export default function LanguagesSection({ title }: { title: string }) {
  return (
    <ul className="flex flex-col sm:flex-row gap-4 items-center col-span-6 rounded-2xl bg-foreground dark:bg-dark-foreground p-6 sm:p-8 lg:p-10">
      <li className="text-white dark:text-dark-white text-lg sm:text-xl font-bold border-r-0 sm:border-r border-r-grey dark:border-r-dark-grey pr-0 sm:pr-4 pb-2 sm:pb-0">
        {title}
      </li>
      <div className="flex gap-3 sm:gap-4">
        <li className="text-3xl sm:text-4xl">🇧🇴</li>
        <li className="text-3xl sm:text-4xl">🇬🇧</li>
        <li className="text-3xl sm:text-4xl">🇺🇸</li>
      </div>
    </ul>
  );
}