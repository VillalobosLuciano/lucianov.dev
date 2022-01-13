export default function ProseableText({ children }) {
  return (
    <div className="px-4 prose max-w-none dark:prose-invert prose-pre:lg:p-1 prose-pre:dark:bg-bgDark prose-headings:mb-4 prose-headings:mt-8 prose-pre:bg-bgLight prose-a:dark:text-amber-500/90 hover:prose-a:dark:text-amber-500 prose-headings:dark:text-gray-300">
      {children}
    </div>
  );
}
