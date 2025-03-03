import { getTranslations } from 'next-intl/server';

import { Marquee } from '@/components/magicui/marquee';
import ReviewCard from './reviews-card';
import { reviews } from '@/constants';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewsContainer = async () => {
  const t = await getTranslations('HomePage.reviews');

  return (
    <section className="s-block lg:!mt-56">
      <header className="s-block__title">
        <h2 className="text-center text-5xl font-bold sm:max-w-[647px]">
          {t.rich('title', {
            span: chunks => <span className="text-primary">{chunks}</span>,
          })}
        </h2>
      </header>
      <div className="flex-column relative w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </section>
  );
};

export default ReviewsContainer;
