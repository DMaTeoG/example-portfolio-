import { FaInstagram, FaYoutube, FaDribbble, FaBehance } from "react-icons/fa";
import { SiBento } from "react-icons/si";

export default function PortfolioSection() {
  const items = [
    { name: "Bento", icon: <SiBento className="text-[#8b5cf6]" /> },
    { name: "Behance", icon: <FaBehance className="text-[#1769ff]" /> },
    { name: "Instagram", icon: <FaInstagram className="text-[#e1306c]" /> },
    { name: "Youtube", icon: <FaYoutube className="text-[#ff0000]" /> },
    { name: "Dribbble", icon: <FaDribbble className="text-[#ea4c89]" /> },
  ];

  return (
    <ul className="flex flex-wrap items-center col-span-12 gap-4 p-5 rounded-2xl bg-foreground">
      <li className="text-white text-lg font-bold border-r pr-4">Portfolio</li>
      {items.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-2 bg-background rounded-lg text-white text-sm px-4 py-2 hover:opacity-80 transition"
        >
          {item.icon}
          {item.name}
        </li>
      ))}
    </ul>
  );
}
