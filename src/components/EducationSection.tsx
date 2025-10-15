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
    <section className="flex flex-col gap-4 items-center col-span-6 row-span-3 rounded-2xl bg-foreground p-10">
      <article className="flex items-center justify-between w-full border-b border-b-grey pb-8">
        <span className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">
            {data.highSchool.title}
          </h2>
          <p className="text-grey text-lg">
            {data.highSchool.field}
          </p>
          <p className="text-grey text-sm">
            {data.highSchool.location}
          </p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-4">
          {data.highSchool.period}
        </span>
      </article>

      <article className="flex items-center justify-between w-full border-b border-b-grey pb-8">
        <span className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">
            {data.diploma.title}
          </h2>
          <p className="text-grey text-lg">
            {data.diploma.field}
          </p>
          <p className="text-grey text-sm">
            {data.diploma.location}
          </p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-4">
          {data.diploma.period}
        </span>
      </article>

      <article className="flex items-center justify-between w-full">
        <span className="flex flex-col">
          <h2 className="text-white text-3xl font-bold">
            {data.graduation.title}
          </h2>
          <p className="text-grey text-lg">
            {data.graduation.field}
          </p>
          <p className="text-grey text-sm">
            {data.graduation.location}
          </p>
        </span>
        <span className="bg-background rounded-lg text-white text-sm p-4">
          {data.graduation.period}
        </span>
      </article>
    </section>
  );
}