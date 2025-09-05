import React from "react";

const experience = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Associate Solutions Leader",
    company: "Brane Enterprises",
  },
  {
    id: 2,
    year: "2022 - 2024",
    title: "Senior Software Engineer",
    company: "Kellton Tech Solutions",
  },
  {
    id: 3,
    year: "2021 - 2022",
    title: "HTML Developer",
    company: "MBD Group",
  },
  {
    id: 4,
    year: "2020 - 2021",
    title: "Web Developer",
    company: "Sheopals Pvt Ltd.",
  },
  {
    id: 5,
    year: "2017 - 2020",
    title: "Web Developer",
    company: "Creative Infozone",
  },
];

const Journey = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {experience.map((item) => (
        <div key={item.id} className="flex items-start gap-6 w-full">
          <div className="flex flex-col w-max justify-center items-center">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-[1px] h-[100px] xl:h-[180px] bg-white/10"></div>
          </div>
          <div className="m-w-[500px]">
            <p className="text-base xl:text-[18px] mb-2 xl:mb-4 text-white/50">
              {item.year}
            </p>
            <h4 className="h4 mb-0">{item.title}</h4>
            <p className="text-sm text-white/50">{item.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Journey;
