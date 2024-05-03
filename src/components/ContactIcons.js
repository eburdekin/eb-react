import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactIcons() {
  const links = [
    { to: "email", href: "mailto:eburdekin@proton.me", icon: faEnvelope },
    { to: "github", href: "https://github.com/eburdekin", icon: faGithub },
    {
      to: "linkedin",
      href: "https://www.linkedin.com/in/eburdekin/",
      icon: faLinkedin,
    },
  ];

  return (
    <div className="items-center">
      {links.map((link) => {
        return (
          <a href={link.href} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              key={link.to}
              icon={link.icon}
              size="2x"
              className="text-white m-2 hover-effect"
            />
          </a>
        );
      })}
    </div>
  );
}
