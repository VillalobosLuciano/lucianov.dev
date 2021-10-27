export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-6xl font-bold leading-snug text-center text-gray-100 md:text-7xl lg:text-8xl md:leading-none md:text-left">
      {children}
    </h1>
  );
}
