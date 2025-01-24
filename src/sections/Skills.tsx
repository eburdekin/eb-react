import React, { useState } from "react";
import {
  SiGit,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiPython,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { IconType } from "react-icons";

interface Skill {
  text: string;
  Icon: IconType;
}

const skills: Skill[] = [
  { text: "Javascript", Icon: SiJavascript },
  { text: "Typescript", Icon: SiTypescript },
  { text: "React", Icon: SiReact },
  { text: "Node.js", Icon: SiNodedotjs },
  { text: "Express.js", Icon: SiExpress },
  { text: "Python", Icon: SiPython },
  { text: "PostgreSQL", Icon: SiPostgresql },
  { text: "HTML", Icon: SiHtml5 },
  { text: "CSS", Icon: SiCss3 },
  { text: "Git", Icon: SiGit },
];

interface ISkillCardsProps {
  items: Skill[];
}

const SkillCards: React.FC<ISkillCardsProps> = ({ items }) => {
  return (
    <div className="skill-card-grid">
      {items.map((item: Skill, index: number) => {
        const Icon = item.Icon;

        return (
          <div key={index} className="skill-card">
            <Icon className="skill-icon" />
            <p className="skill-text small-text">{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const [atfSkills, setAtfSkills] = useState(skills.slice(0, 6));

  return (
    <section id="skills">
      <h2 className="section-header">Skills</h2>
      <div className="skill-card-container">
        <SkillCards items={atfSkills} />
        <button
          className="skill-show-button"
          onClick={() => {
            if (atfSkills.length === skills.length) {
              setAtfSkills(skills.slice(0, 6));
            } else {
              setAtfSkills(skills);
            }
          }}
        >
          {atfSkills.length === skills.length ? <ShowLess /> : <ShowMore />}
        </button>
      </div>
    </section>
  );

  function ShowLess() {
    return (
      <div className="skill-show-button-content">
        <span>Show Less</span>
        <FaAnglesUp />
      </div>
    );
  }

  function ShowMore() {
    return (
      <div className="skill-show-button-content">
        <span>Show More</span>
        <FaAnglesDown />
      </div>
    );
  }
};

export default Skills;
