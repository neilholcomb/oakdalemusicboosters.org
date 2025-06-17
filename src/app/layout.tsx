// oxlint-disable-next-line no-unassigned-import
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  description:
    'Supporting music programs in the Oakdale Joint Unified School District',
  title: 'Oakdale Music Boosters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
