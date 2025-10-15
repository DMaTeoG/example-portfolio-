import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function DetailsSection() {
  const details = [
    {
      icon: <span>🧑🏻</span>,
      label: "26 years",
    },
    {
      icon: <FaEnvelope className="text-[#e74c3c]" />,
      label: "iamsunilfreelancer.com",
    },
    {
      icon: <FaPhoneAlt className="text-[#2ecc71]" />,
      label: "+91 9899052055",
    },
    {
      icon: <span>🇮🇳</span>,
      label: "India",
    },
  ];

  return (
    <ul className="flex flex-wrap items-center col-span-12 gap-4 p-5 rounded-2xl bg-foreground">
      <li className="text-white text-lg font-bold border-r pr-4">Details</li>
      {details.map((d) => (
        <li
          key={d.label}
          className="flex items-center gap-2 bg-background rounded-lg text-white text-sm px-4 py-2 hover:opacity-80 transition"
        >
          {d.icon}
          {d.label}
        </li>
      ))}
    </ul>
  );
}
