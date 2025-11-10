// app/(app)/layout.tsx
import { LayoutWrapper } from "@/components";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // return <LayoutWrapper>{children}</LayoutWrapper>;
  return children;
}
