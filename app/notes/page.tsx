import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export const dynamic = 'force-dynamic';

const PER_PAGE = 12;

export default async function NotesPage() {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery({
        queryKey: ['notes', 1, ''],
        queryFn: () => fetchNotes({ page: 1, perPage: PER_PAGE, search: '' }),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient />
        </HydrationBoundary>
    );
}
