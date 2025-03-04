import { QuestionsList } from '@/features/questions';
import { PageHeader } from '@/features/share';

const Questions = () => {
  return (
    <>
      <PageHeader title="QuestionsPage.title" />
      <QuestionsList />
    </>
  );
};

export default Questions;
