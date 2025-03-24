// app/search-page/page.tsx
import { redirect } from 'next/navigation';
import SearchPage from '@/components/search-page/SearchPage'; // Ensure this path is correct

export default function SearchResultPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  // If no search query is provided, redirect to home
  if (!searchParams.query) {
    redirect('/');
  }

  return <SearchPage searchQuery={searchParams.query} />;
}