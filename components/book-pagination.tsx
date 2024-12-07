'use client';

import Form from 'next/form';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from '@/components/ui/pagination';
import { SearchParams } from '@/lib/url-state';
import Link from 'next/link';

function FormValues({
  searchParams,
  pageNumber,
}: {
  searchParams: SearchParams;
  pageNumber: number;
}) {
  let { pending } = useFormStatus();

  return (
    <div data-pending={pending ? '' : undefined}>
      {/* Keep the existing search params */}
      {Object.entries(searchParams).map(
        ([key, value]) =>
          key !== 'page' && (
            <input key={key} type="hidden" name={key} value={value as string} />
          )
      )}
      <input type="hidden" name="page" value={pageNumber.toString()} />
    </div>
  );
}

export function BookPagination({
  currentPage,
  totalPages,
  totalResults,
  searchParams,
}: {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  searchParams: SearchParams;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <Pagination>
      <PaginationContent className="flex items-center justify-between">
        <PaginationItem>
          <Form action="/">
            <FormValues
              searchParams={searchParams}
              pageNumber={Math.max(1, currentPage - 1)}
            />
            <Button
              variant="ghost"
              type="submit"
              size="icon"
              disabled={currentPage <= 1}
            >
              ←
            </Button>
          </Form>
        </PaginationItem>

        <div className="text-sm text-muted-foreground">
          {totalResults.toLocaleString()} results (
          {currentPage.toLocaleString()} of {totalPages.toLocaleString()})
        </div>

        <PaginationItem>
         
          <Link
            className="hover:text-white hover:bg-black hover:no-underline underline transition-colors"
            href={`/?page=${currentPage + 1}`}
            prefetch={true}
          >
           <Button
              variant="ghost"
              type="submit"
              size="icon"
              disabled={currentPage >= totalPages}
            >
              →
            </Button>
        </Link>
           
          
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
