import { Suspense } from 'react';
import { BooksGrid } from '@/components/grid';
import { BookPagination } from '@/components/book-pagination';
import {
  estimateTotalBooks,
  fetchBooksWithPagination,
  ITEMS_PER_PAGE,
} from '@/lib/db/queries';
import { parseSearchParams } from '@/lib/url-state';
import BookGridPage from '@/components/BookGridPage';

export default async function Page(
  props: {
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  }
) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = parseSearchParams(searchParams);

  const [firstLooks, estimatedTotal] = await Promise.all([
    fetchBooksWithPagination(parsedSearchParams),
    estimateTotalBooks(parsedSearchParams),
  ]);

  const totalPages = Math.ceil(estimatedTotal / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Number(parsedSearchParams.page) || 1);


  // BookGridPage - draw fisrt page
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-auto min-h-[200px]">
        <div className="group-has-[[data-pending]]:animate-pulse p-4">
          <BookGridPage firstLooks={firstLooks} bookCount={estimatedTotal} searchParams={parsedSearchParams} />
        </div>
      </div>
      <div className="mt-auto p-4 border-t">
        <Suspense fallback={null}>
          <BookPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={estimatedTotal}
            searchParams={parsedSearchParams}
          />
        </Suspense>
      </div>
    </div>
  );
}
