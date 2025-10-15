import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import AvatarSection from "@/components/AvatarSection";
import IntroSection from "@/components/IntroSection";
import InterestsSection from "@/components/InterestsSection";
import ExperienceFreelance from "@/components/ExperienceFreelance";
import ExperienceMeetzed from "@/components/ExperienceMeetzed";
import DesignToolsSection from "@/components/DesignToolsSection";
import EducationSection from "@/components/EducationSection";
import EditingToolsSection from "@/components/EditingToolsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ThemeToggle from "@/components/ThemeToggle";
import PortfolioSection from "@/components/PortfolioSection";
import DetailsSection from "@/components/DetailsSection";
export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <ThemeToggle />
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        <AvatarSection />
        <IntroSection text={dict.intro} />
        <InterestsSection data={dict.sections.interests} />
        <ExperienceFreelance data={dict.sections.experience.freelance} />
        <ExperienceMeetzed data={dict.sections.experience.meetzed} />
        <DesignToolsSection title={dict.sections.designTools} />
        <EducationSection data={dict.sections.education} />
        <EditingToolsSection title={dict.sections.editingTools} />
        <LanguagesSection title={dict.sections.languages} />
        <PortfolioSection />
        <DetailsSection />
      </main>
    </div>
  );
}
