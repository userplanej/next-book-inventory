'use client'
import { customAlphabet } from 'nanoid'
import { BookLink } from './book-link';
import { Book } from '@/lib/db/schema';

const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string



export default function BookGridInfinite({
  firstLooks,
  bookCount,
}: {
  firstLooks: Book[];
  bookCount: number;
}) {

  console.log('BookGridInfinite no of firstLooks', firstLooks.length);
  console.log('BookGridInfinite-bookCount', bookCount);
  
  // const key = nanoid();

  // const keyGenerator = useCallback(
  //   (size: number, prev: Book[]) => prev && prev.length === 0
  //     ? null
  //     : [key, size]
  //   , [key]
  // );

  // const fetcher = (url) => fetch(url).then((res) => res.json())

  // const { data, isLoading, isValidating, error, mutate, setSize } =
  // useSwrInfinite<Photo[]>(
  //   keyGenerator,
  //   fetcher,
  //   {
  //     initialSize: 2,
  //     revalidateFirstPage: false,
  //     revalidateOnFocus: Boolean(isUserSignedIn),
  //     revalidateOnReconnect: Boolean(isUserSignedIn),
  //   },
  // );


  return (
  <p>Loading...</p>
  // return (
  //   <InfiniteScroll>
  //     { () =>

  //       <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
  //         {!books?.length ? (
  //           <p className="text-center text-muted-foreground col-span-full">
  //             No books found.
  //           </p>
  //         ) : (
  //           books.map((book, index) => (
  //             <BookLink
  //               key={book.id}
  //               priority={index < 10}
  //               book={book}
  //               searchParams={searchParams}
  //             />
  //           ))
  //         )}
  //       </div>
  //     }
  //   </InfiniteScroll>
  // );

  );
}
