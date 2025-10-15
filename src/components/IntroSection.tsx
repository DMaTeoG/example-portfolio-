export default function IntroSection({ text }: { text: string }) {
  return (
    <p className="p-4 sm:p-5 text-lg sm:text-xl lg:text-2xl text-white dark:text-dark-white col-span-9 rounded-2xl bg-foreground dark:bg-dark-foreground leading-relaxed">
      {text}
    </p>
  );
}