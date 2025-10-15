export default function DesignToolsSection({ title }: { title: string }) {
  return (
    <ul className="flex flex-col sm:flex-row gap-4 items-center col-span-6 rounded-2xl bg-foreground dark:bg-dark-foreground p-6 sm:p-10">
      <li className="text-white dark:text-dark-white text-lg sm:text-xl font-bold border-r-0 sm:border-r border-r-grey dark:border-r-dark-grey pr-0 sm:pr-4 pb-2 sm:pb-0">
        {title}
      </li>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <li className="flex items-center bg-[#360300] dark:bg-[#5a1a00] rounded-lg font-bold text-[#da9f4c] dark:text-[#f0b96e] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Ai
        </li>
        <li className="flex items-center bg-[#0b172a] dark:bg-[#1a2d4a] rounded-lg font-bold text-[#74aaf2] dark:text-[#8fbfff] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Ps
        </li>
        <li className="flex items-center bg-[#59051e] dark:bg-[#7a0a29] rounded-lg font-bold text-[#d84b6f] dark:text-[#f06d8e] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Id
        </li>
        <li className="flex items-center bg-[#480d30] dark:bg-[#6a1545] rounded-lg font-bold text-[#de6ff0] dark:text-[#f28fff] text-base sm:text-xl px-3 sm:px-4 py-1 sm:py-2">
          Xd
        </li>
      </div>
    </ul>
  );
}