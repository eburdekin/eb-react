export default function Footer() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin
      </p>
    </div>
  );
}
