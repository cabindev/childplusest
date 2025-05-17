// app/content/page.tsx
import { Suspense } from 'react';
import ContentPageClient from './components/content-page-client';

export default function ContentPage() {
  return (
    <Suspense fallback={<div className="container mx-auto py-12 px-4 text-center">กำลังโหลด...</div>}>
      <ContentPageClient />
    </Suspense>
  );
}