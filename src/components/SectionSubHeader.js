export default function SectionHeader({ children }) {
  return (
    <h2
      style={{ color: "#165634" }}
      className="text-xl md:text-2xl font-bold text-center justify-center w-max mx-auto p-2 mb-2"
    >
      {children}
    </h2>
  );
}
