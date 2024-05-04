import SectionH2 from "../components/SectionH2";
import { useState } from "react";
import {
  SiGit,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiSqlite,
  SiHtml5,
  SiCss3,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import SkillCards from "../components/SkillCards";

const skills = [
  { text: "React", Icon: SiReact },
  { text: "Typescript", Icon: SiTypescript },
  { text: "Javascript", Icon: SiJavascript },
  { text: "Node.js", Icon: SiNodedotjs },
  { text: "Express.js", Icon: SiExpress },
  { text: "Python", Icon: SiPython },
  { text: "SQLite", Icon: SiSqlite },
  { text: "Tailwind", Icon: SiTailwindcss },
  { text: "HTML", Icon: SiHtml5 },
  { text: "CSS", Icon: SiCss3 },
  { text: "Git", Icon: SiGit },
  { text: "MongoDB", Icon: SiMongodb },
  { text: "Vite.js", Icon: SiVite },
  { text: "Mongoose", Icon: SiMongoose },
];

const Skills = () => {
  const [atfSkills, setAtfSkills] = useState(skills.slice(0, 12));

  return (
    <section id="section-skills">
      <div className="gap-1 justify-evenly max-w-3xl mx-auto mb-16 text-center">
        <SectionH2>Skills</SectionH2>
        <SkillCards items={atfSkills} />
        <button
          className="rounded font-bold p-2 my-6"
          onClick={() => {
            if (atfSkills.length === skills.length) {
              setAtfSkills(skills.slice(0, 12));
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
      <div className="flex gap-2">
        <span>Show Less</span>
        <FaAnglesUp />
      </div>
    );
  }

  function ShowMore() {
    return (
      <div className="flex gap-2">
        <span>Show More</span>
        <FaAnglesDown />
      </div>
    );
  }
};

export default Skills;
