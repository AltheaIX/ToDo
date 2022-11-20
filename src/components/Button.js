export function Button({ className, children }) {
  const addClassName = className ? ` ${className}` : '';
  return (
    <a className={`bg-yellow-500 py-3 px-5 text-black font-sora font-semibold rounded-lg inline-block${addClassName}`}>
      {children}
    </a>
  );
}
