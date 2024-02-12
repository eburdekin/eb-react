export default function SectionHeader({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-center justify-center w-full mx-auto py-2 mt-5 md:mt-10 mb-2">
      {children}
    </h2>
  );
}
