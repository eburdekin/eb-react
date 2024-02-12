export default function SectionHeader({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold w-full mx-auto py-2 mt-10 md:mt-20 mb-2">
      {children}
    </h2>
  );
}
