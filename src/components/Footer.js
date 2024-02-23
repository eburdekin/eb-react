import ContactIcons from "./ContactIcons";

export default function Footer() {
  return (
    // <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center">
    <div className="w-full text-center mt-10">
      <div className="md:hidden">
        <ContactIcons />
      </div>

      <p className="text-sm text-white mb-1">
        &copy; {new Date().getFullYear().toString()}{" "}
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          Eileen Burdekin
        </a>
        . All rights reserved.
      </p>
    </div>
  );
}
