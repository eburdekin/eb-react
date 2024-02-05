export default function SectionHeader({ children }) {
  return (
    <h2
      style={{ color: "#165634" }}
      className="text-3xl md:text-4xl font-bold text-center justify-center w-full mx-auto py-2 mt-10 md:mt-20 mb-2"
    >
      {children}
    </h2>
  );
}
