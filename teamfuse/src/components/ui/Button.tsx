// src/components/ui/Button.tsx
export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black ${props.className ?? ""}`}
    />
  );
}
