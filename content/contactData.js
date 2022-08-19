import {
  SiVisualstudiocode,
  SiSublimetext,
  SiMicrosoftedge,
  SiGooglechrome,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiPrettier,
  SiPnpm,
  SiYarn,
  SiFigma,
  SiInsomnia,
  SiBitwarden,
  SiSpotify,
  SiObsstudio,
  SiGrammarly,
} from "react-icons/si";
import {
  BsFillPaletteFill,
  BsFillTerminalFill,
  BsWindows,
  BsGithub,
} from "react-icons/bs";
import { FaGitAlt, FaSearch } from "react-icons/fa";

import SVG from "@components/SVG";

const contacts = {
  title: "Utilities",
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
  lastUpdate: "June 30, 2022",
  system: {
    title: "",
    data: [
      {
        name: "VSCode",
        description: "Primary Code editor",
        Icon: SiVisualstudiocode,
        link: "https://code.visualstudio.com/download",
      },
      {
        name: "Sublime Text",
        description: "Text editor",
        Icon: SiSublimetext,
        link: "https://www.techspot.com/downloads/5546-sublime-text.html",
      },
      {
        name: "Andromeda",
        description: "VS Code theme",
        Icon: BsFillPaletteFill,
        link: "https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda",
      },
      {
        name: "Oh-my-zsh",
        description: "Terminal Theme",
        Icon: BsFillTerminalFill,
        link: "https://ohmyz.sh/",
      },
      {
        name: "Windows 11",
        description: "Operating System",
        Icon: BsWindows,
        link: "https://www.microsoft.com/software-download/windows11",
      },
      {
        name: "Microsoft Edge",
        description: "Primary Browser",
        Icon: SiMicrosoftedge,
        link: "https://www.microsoft.com/en-us/edge",
      },
      {
        name: "Chrome",
        description: "Secondary Browser",
        Icon: SiGooglechrome,
        link: "https://www.google.com/chrome",
      },
    ],
  },
};

export default contacts;
