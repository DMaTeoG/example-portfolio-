export default function DesignToolsSection({ title }: { title: string }) {
  return (
    <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
      <li className="text-white text-xl font-bold border-r pr-4">
        {title}
      </li>
      <li className="flex items-center bg-[#360300] rounded-lg font-bold text-[#da9f4c] text-xl px-4 py-2">
        Ai
      </li>
      <li className="flex items-center bg-[#0b172a] rounded-lg font-bold text-[#74aaf2] text-xl px-4 py-2">
        Ps
      </li>
      <li className="flex items-center bg-[#59051e] rounded-lg font-bold text-[#d84b6f] text-xl px-4 py-2">
        Id
      </li>
      <li className="flex items-center bg-[#480d30] rounded-lg font-bold text-[#de6ff0] text-xl px-4 py-2">
        Xd
      </li>
    </ul>
  );
}
