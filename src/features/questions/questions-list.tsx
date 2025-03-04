import { getTranslations } from 'next-intl/server';

import { CardBorderBeam, Glow } from '@/components';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { questions } from '@/constants';

const QuestionsList = async () => {
  const t = await getTranslations('QuestionsPage.questionsSection');

  return (
    <section className="s-block relative">
      <div className="s-container">
        <header className="s-block__title">
          <h2 className="text-4xl font-bold sm:text-5xl">{t('title')}</h2>
          <p className="text-muted-foreground text-lg sm:w-[35.5rem]">
            {t('text')}
          </p>
        </header>
        <div className="bg-foreground/[.02] border-border/70 relative mx-auto rounded-xl border p-8 lg:w-7/12">
          <Accordion type="single" collapsible>
            {questions.map(({ id, title, text }, index) => (
              <AccordionItem
                key={id}
                value={`qty-${index + 1}`}
                className="border-border/30"
              >
                <AccordionTrigger className="hover:text-primary-second dark:hover:text-primary cursor-pointer text-lg">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {text}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <CardBorderBeam
            size={100}
            darkFrom="#3cb089"
            darkTo="#f0d982"
            from="#1A4C3B"
            to="#C0B177"
          />
        </div>
      </div>
      <Glow className="opacity-50" />
    </section>
  );
};

export default QuestionsList;
