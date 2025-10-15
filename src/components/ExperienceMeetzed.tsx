export default function ExperienceMeetzed({ data }: { data: any }) {
  return (
    <article className="col-span-6 rounded-2xl bg-foreground p-10">
      <section className="flex items-center justify-between border-b border-b-grey pb-10">
        <header className="flex flex-col">
          <h3 className="text-2xl font-bold text-white">
            {data.title}
          </h3>
          <p className="text-grey text-sm">
            {data.role}
          </p>
        </header>
        <span className="bg-background rounded-lg text-white text-sm p-4">
          {data.period}
        </span>
      </section>
      <ul className="list-disc list-inside text-white text-sm mt-6">
        {data.bullets.map((b: string) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
