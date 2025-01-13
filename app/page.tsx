import { LanguageProvider } from '@/context/LanguageContext';
import { Portfolio } from '@/components/portfolio/Portfolio';

export default function Home() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}