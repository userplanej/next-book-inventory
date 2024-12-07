
import Link from 'next/link';
import { Book } from '@/lib/db/schema';
import { Photo } from './photo';
import { SearchParams, stringifySearchParams } from '@/lib/url-state';

export function BookLink({
  priority,
  book,
  searchParams,
}: {
  priority: boolean;
  book: Book;
  searchParams: SearchParams;
}) {

  let noFilters = Object.values(searchParams).every((v) => v === undefined);

  return (
    <Link
      href={`/${book.id}?${stringifySearchParams(searchParams)}`}
      key={book.id}
      className="block transition ease-in-out md:hover:scale-105"
      prefetch={noFilters ? true : null}
    >
      <Photo
        src={book.image_url!}
        title={book.title}
        priority={priority}
      />
    </Link>
  );
}