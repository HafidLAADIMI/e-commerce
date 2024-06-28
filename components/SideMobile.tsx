import Link from "next/link";
import React from "react";
import SideMobileItems from "./SideMobileItems";
interface Props {
  clicked: boolean;
}
function SideMobile({ clicked }: Props) {
  const SideMobileItemsInfo = [
    {
      title: "Pc Gamer",
      button: "See All PC Gamers",
      links: [
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
      ],
    },
    {
      title: "Pc Gamer",
      button: "See All PC Gamers",
      links: [
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
        {
          title: "PC GAMERS INTEL",
          link1: "14TH GENERATION",
          link2: "13TH GENERATION",
          link3: "12TH GENERATION",
          link4: "11TH GENERATION",
        },
      ],
    },
  ];
  return (
    <div
      style={{
        transform: clicked ? "translateX(0)" : "translateX(-100%)",
      }}
      className=" text-slate-300 bg-black border border-slate-700 border-solid  absolute flex xl:hidden font-mono flex-col gap-2 transition ease-out duration-300 px-2 py-1 mr-2 items-start z-50 overflow-hidden"
    >
      <div className="flex flex-col gap-5 justify-center items-start">
        <div className="h-8 w-[90vw] pt-1  text-red-600 bg-red-200">Find</div>
        <Link href="#">Configure Your PC</Link>
        <Link href="#">Promotions</Link>
        <Link href="#">Novelty</Link>
      </div>
      <div>
        <div className="h-8 w-[90vw] pt-1 text-red-600 bg-red-200">
          Categories
        </div>
        {SideMobileItemsInfo.map((item,i) => (
          <SideMobileItems item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default SideMobile;
