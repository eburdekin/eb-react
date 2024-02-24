import ContactIcons from "./ContactIcons";

export default function Footer() {
  return (
    <div className="w-full text-center mt-10">
      <div className="md:hidden">
        <ContactIcons />
      </div>

      <p className="text-sm text-white mb-1">
        &copy; {new Date().getFullYear().toString()}{" "}
        <a href="https://github.com/eburdekin" target="_blank" rel="noreferrer">
          Eileen Burdekin
        </a>
        . Built with <span className="highlighted">React</span> and{" "}
        <span className="highlighted">Tailwind CSS</span>.
      </p>
    </div>
  );
}
