// Root layout — delegates HTML structure to [locale]/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children as React.ReactElement;
}
