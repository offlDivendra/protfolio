import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Venkatesh, a passionate engineer blending cutting-edge AI models with beautiful, high-performance web applications.',
  openGraph: {
    title: 'About | Venkatesh',
    description: 'Learn more about Venkatesh, a passionate engineer blending AI and web development.',
    type: 'profile',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
