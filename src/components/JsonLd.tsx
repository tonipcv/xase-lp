import React from 'react';

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // @ts-ignore
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
