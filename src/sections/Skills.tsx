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
    <div className="grid grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6">
      {items.map((item: Skill, index: number) => {
        const Icon = item.Icon;

        return (
          <div
            key={index}
            className="relative group block p-1 sm:p-2 h-full w-full"
          >
            <div className="skill-hover rounded-md w-full p-1 overflow-hidden group-hover:ring-1 ring-gray-600 relative z-20 transition-all duration-500">
              <div className="py-2 z-50 relative space-y-4">
                <Icon className="w-6 sm:w-8 h-6 sm:h-8 mx-auto" />
                <p className="text-sm text-center text-gray-200">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  const [atfSkills, setAtfSkills] = useState(skills.slice(0, 6));

  return (
    <section id="section-skills">
      <h2 className="section-header py-2 my-5 md:my-8">Skills</h2>
      <div className="gap-1 justify-evenly max-w-3xl mx-auto text-center">
        <SkillCards items={atfSkills} />
        <button
          className="p-2 my-6"
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
      <div className="flex gap-1 items-center">
        <span>Show Less</span>
        <FaAnglesUp />
      </div>
    );
  }

  function ShowMore() {
    return (
      <div className="flex gap-1 items-center">
        <span>Show More</span>
        <FaAnglesDown />
      </div>
    );
  }
};

export default Skills;
