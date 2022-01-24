export default function ProseableText({ children }) {
  return (
    <div
      className="
      dark:prose-invert
      px-4 prose max-w-none 
      prose-pre:py-[3px] 
      prose-pre:px-2 
      prose-pre:bg-bgLight 
      prose-pre:dark:bg-bgDark 
      prose-headings:mb-4 
      prose-headings:mt-8 
      prose-a:dark:text-amber-500/90 
      prose-a:text-teal-600/90 
      hover:prose-a:dark:text-amber-500 
        hover:prose-a:text-teal-600 
      prose-headings:dark:text-gray-300  
      prose-headings:text-gray-600/90
      "
    >
      {children}
    </div>
  );
}
