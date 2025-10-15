export default function InterestsSection({
  data,
}: {
  data: { title: string; items: string[] };
}) {
  return (
    <ul className="flex items-center col-span-9 gap-4 p-5 rounded-2xl bg-foreground">
      <li className="text-white text-lg font-bold border-r pr-4">
        {data.title}
      </li>
      {data.items.map((item) => (
        <li
          key={item}
          className="flex items-center bg-background rounded-lg text-white text-sm px-4 py-2"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
