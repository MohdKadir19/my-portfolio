import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { id: 4, name: "React", icon: <FaReact className="text-blue-400" /> },
  { id: 5, name: "Nextjs", icon: <RiNextjsLine className="text-white-500" /> },
  {
    id: 6,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    id: 7,
    name: "Bootstrap CSS",
    icon: <FaBootstrap className="text-purple-600" />,
  },
  { id: 9, name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <>
      <div>
        <h2 className="h2 mb-8">
          My <span>Skills</span>
        </h2>
        <div className="flex flex-wrap gap-6 max-w-sm xl:max-none">
          {skills.map((item) => (
            <Tooltip key={item.id}>
              <TooltipTrigger className="w-10 h-10 xl:w-16 xl:h-16 rounded-full flex items-center justify-center bg-[#201832] group hover:bg-[#201832]/50">
                <div className="text-3xl transition-all duration-300">
                  {item.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      {/* <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip> */}
    </>
  );
};

export default Skills;
