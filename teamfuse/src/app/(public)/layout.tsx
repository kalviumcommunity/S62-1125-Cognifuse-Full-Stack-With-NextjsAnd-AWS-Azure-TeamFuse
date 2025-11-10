// app/(public)/layout.tsx
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // return (
  //   <div className="min-h-screen">
  //     {/* No sidebar/header here */}
  //     <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
  //     <footer className="mt-16 border-t py-6 text-center text-sm text-gray-500">
  //       © {new Date().getFullYear()} TeamFuse • <span>Privacy</span> •{" "}
  //       <span>GitHub</span>
  //     </footer>
  //   </div>
  // );
  return children;
}
