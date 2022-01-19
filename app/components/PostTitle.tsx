export default function PostTitle({ children }) {
  return (
    <h1 className="max-w-3xl pt-1 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 capitalize dark:text-gray-300 sm:text-4xl sm:leading-10 md:text-6xl md:leading-11">
      {children}
    </h1>
  );
}
