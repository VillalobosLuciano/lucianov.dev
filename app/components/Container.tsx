export default function Container({ children }) {
  return (
    <div className="max-w-3xl px-2 mx-auto sm:px-6 xl:max-w-4xl xl:px-0">
      {children}
    </div>
  );
}
