import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writings and thoughts on AI, technology, and career by Venkatesh.',
  openGraph: {
    title: 'Blog | Venkatesh',
    description: 'Writings and thoughts on AI, technology, and career by Venkatesh.',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
