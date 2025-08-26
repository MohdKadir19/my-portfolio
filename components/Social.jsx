import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineCodepenCircle,
  AiFillLinkedin,
} from "react-icons/ai";
const socials = [
  {
    icon: <AiFillGithub />,
    path: "https://github.com/MohdKadir19",
  },
  {
    icon: <AiFillLinkedin />,
    path: "https://www.linkedin.com/in/mohdkadir19/",
  },
  {
    icon: <AiFillTwitterCircle />,
    path: "",
  },
  {
    icon: <AiOutlineCodepenCircle />,
    path: "https://codepen.io/Mohd-Kadir",
  },
];

const Social = ({ containerStyles, iconStyle }) => {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyle} `}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default Social;
