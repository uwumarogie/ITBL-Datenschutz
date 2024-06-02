import { InlineNavigation } from "@/components/inline-navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="px-6 h-full flex flex-col">
      <div className="hidden sm:block mb-2 shrink-0">
        <InlineNavigation />
      </div>
      <div className="h-full overflow-y-auto">{children}</div>
    </div>
  );
}
