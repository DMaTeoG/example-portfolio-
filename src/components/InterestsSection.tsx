export default function InterestsSection({
  data,
}: {
  data: { title: string; items: string[] };
}) {
  return (
    <ul className="flex flex-col sm:flex-row items-center col-span-9 gap-4 p-4 sm:p-5 rounded-2xl bg-foreground dark:bg-dark-foreground">
      <li className="text-white dark:text-dark-white text-base sm:text-lg font-bold border-r-0 sm:border-r border-r-grey dark:border-r-dark-grey pr-0 sm:pr-4 pb-2 sm:pb-0">
        {data.title}
      </li>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {data.items.map((item) => (
          <li
            key={item}
            className="flex items-center bg-background dark:bg-dark-background rounded-lg text-white dark:text-dark-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2"
          >
            {item}
          </li>
        ))}
      </div>
    </ul>
  );
}