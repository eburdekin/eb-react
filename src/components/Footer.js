import ContactIcons from "./ContactIcons";

export default function Footer() {
  return (
    // <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
    <div className="w-full text-center mt-10">
      <ContactIcons />
      <p className="text-sm">
        &copy; {new Date().getFullYear().toString()} Eileen Burdekin
      </p>
    </div>
  );
}
