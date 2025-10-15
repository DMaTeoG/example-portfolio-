interface ExperienceMeetzedData {
  title?: string;
  role?: string;
  period?: string;
  bullets?: string[];
}

export default function ExperienceMeetzed({ data }: { data: ExperienceMeetzedData }) {
  return (
    <article className="col-span-6 rounded-2xl bg-foreground dark:bg-dark-foreground p-6 sm:p-8 lg:p-10">
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 border-b border-b-grey dark:border-b-dark-grey pb-6 sm:pb-10">
        <header className="flex flex-col">
          <h3 className="text-white dark:text-dark-white text-xl sm:text-2xl font-bold">
            {data.title}
          </h3>
          <p className="text-grey dark:text-dark-grey text-sm mt-1">
            {data.role}
          </p>
        </header>
        <span className="bg-background dark:bg-dark-background rounded-lg text-white dark:text-dark-white text-sm px-3 py-2 sm:p-4 w-fit">
          {data.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-white dark:text-dark-white text-sm mt-4 sm:mt-6 space-y-2">
        {data.bullets?.map((b: string) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}