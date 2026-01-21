'use client';

import { useState } from 'react';
import BookCallModal from '../../components/BookCallModal';

export default function DocsHeaderClient() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setBookOpen(true)}
        className="h-8 px-4 text-[13px] font-medium bg-white text-black rounded-md hover:bg-neutral-200 transition-colors flex items-center"
      >
        Request Demo
      </button>

      <BookCallModal
        isOpen={bookOpen}
        onClose={() => setBookOpen(false)}
        plan="Demo"
        redirectUrl="https://app.cal.eu/xaseai/30min?overlayCalendar=true"
      />
    </>
  );
}
