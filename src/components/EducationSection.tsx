interface EducationItem {
  title: string;
  field: string;
  location: string;
  period: string;
}

interface EducationData {
  highSchool: EducationItem;
  diploma: EducationItem;
  graduation: EducationItem;
}

export default function EducationSection({ data }: { data: EducationData }) {
  return (
    <section className="flex flex-col gap-4 sm:gap-6 items-center col-span-6 row-span-3 rounded-2xl bg-foreground dark:bg-dark-foreground p-6 sm:p-8 lg:p-10">
      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0 border-b border-b-grey dark:border-b-dark-grey pb-6 sm:pb-8">
        <span className="flex flex-col">
          <h2 className="text-white dark:text-dark-white text-xl sm:text-2xl lg:text-3xl font-bold">
            {data.highSchool.title}
          </h2>
          <p className="text-grey dark:text-dark-grey text-base sm:text-lg">
            {data.highSchool.field}
          </p>
          <p className="text-grey dark:text-dark-grey text-sm">
            {data.highSchool.location}
          </p>
        </span>
        <span className="bg-background dark:bg-dark-background rounded-lg text-white dark:text-dark-white text-sm px-3 py-2 sm:p-4 w-fit">
          {data.highSchool.period}
        </span>
      </article>

      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0 border-b border-b-grey dark:border-b-dark-grey pb-6 sm:pb-8">
        <span className="flex flex-col">
          <h2 className="text-white dark:text-dark-white text-xl sm:text-2xl lg:text-3xl font-bold">
            {data.diploma.title}
          </h2>
          <p className="text-grey dark:text-dark-grey text-base sm:text-lg">
            {data.diploma.field}
          </p>
          <p className="text-grey dark:text-dark-grey text-sm">
            {data.diploma.location}
          </p>
        </span>
        <span className="bg-background dark:bg-dark-background rounded-lg text-white dark:text-dark-white text-sm px-3 py-2 sm:p-4 w-fit">
          {data.diploma.period}
        </span>
      </article>

      <article className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 sm:gap-0">
        <span className="flex flex-col">
          <h2 className="text-white dark:text-dark-white text-xl sm:text-2xl lg:text-3xl font-bold">
            {data.graduation.title}
          </h2>
          <p className="text-grey dark:text-dark-grey text-base sm:text-lg">
            {data.graduation.field}
          </p>
          <p className="text-grey dark:text-dark-grey text-sm">
            {data.graduation.location}
          </p>
        </span>
        <span className="bg-background dark:bg-dark-background rounded-lg text-white dark:text-dark-white text-sm px-3 py-2 sm:p-4 w-fit">
          {data.graduation.period}
        </span>
      </article>
    </section>
  );
}