export default function EditingToolsSection({ title }: { title: string }) {
  return (
    <ul className="flex flex-col sm:flex-row gap-4 items-center col-span-6 rounded-2xl bg-foreground dark:bg-dark-foreground p-6 sm:p-10">
      <li className="text-white dark:text-dark-white text-lg sm:text-xl font-bold border-r-0 sm:border-r border-r-grey dark:border-r-dark-grey pr-0 sm:pr-4 pb-2 sm:pb-0">
        {title}
      </li>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <li className="flex items-center bg-[#000155] dark:bg-[#1a1a7a] rounded-lg font-bold text-[#a0a0f9] dark:text-[#b8b8ff] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Ae
        </li>
        <li className="flex items-center bg-[#02035e] dark:bg-[#1c1c85] rounded-lg font-bold text-[#9997f9] dark:text-[#b0afff] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Pr
        </li>
      </div>
    </ul>
  );
}