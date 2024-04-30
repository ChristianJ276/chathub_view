"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip } from "@nextui-org/tooltip";

interface Props {
  path: string;
  icon: JSX.Element;
  icon_selected: JSX.Element;
  title: string;
}

export const SidebarMenuItem = ({ path, icon, icon_selected, title }: Props) => {
  const currentPath = usePathname();
  const vare = "/dashboard/useracount";
  console.log("currentPath", currentPath);
  console.log("path", path);
  return (
    <Tooltip
      content={title}
      placement="left"
      className="text-white text-xs bg-slate-700 rounded-md p-2"
    >
      <Link
        href={path}
        className={`
              w-full inline-flex items-center justify-center border-b border-slate-700 py-3 hover:bg-slate-800 transition ease-linear duration-150
              ${currentPath === path ? "bg-blue-800" : ""}
            `}
      >
        <div>
            {
                vare === path ?
                
                <div>{icon_selected}</div>
                :
                <div>{icon}</div>
            }
          
        </div>
      </Link>
    </Tooltip>
  );
};
