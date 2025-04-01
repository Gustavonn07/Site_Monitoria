import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui";
import { useViewport } from "../../hooks";
import { sidebar_data_multimedia } from "./assets/sidebar.data";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { cn } from "../../utils";

export const Sidebar = () => {
  const viewport = useViewport();
  const navigate = useNavigate();

  const [expandedGroups, setExpandedGroups] = React.useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((title) => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  return (
    <>
      {viewport.isSm ? (
        // VERSÃO MOBILE
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ) : (
        // VERSÃO DESKTOP
        <nav
          className={cn(
            "bg-gray-500 sidebar sm:w-1/3 lg:w-3/12 h-screen p-4 flex flex-col",
            {
              "sm:w-1/12 lg:w-1/12 expanded_sidebar": isCollapsed,
            }
          )}
        >
          <div className="flex justify-between w-full">
            <h3>TITULO</h3>
            <Icon
              className="cursor-pointer"
              icon="lucide:arrow-left-right"
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                if(!isCollapsed) setExpandedGroups([])
              }}
            />
          </div>
          {sidebar_data_multimedia.map((item) => (
            <div key={item.groupTitle} className="space-y-4">
              <h3
                className={cn(
                  "text-xl font-semibold text-white cursor-pointer",
                  {
                    "opacity-50 cursor-not-allowed": item.groupDisabled,
                  }
                )}
                onClick={() => {
                  if (item.groupDisabled) return;
                  toggleGroup(item.groupTitle);
                  setIsCollapsed(false);
                }}
              >
                {item.groupTitle}
              </h3>
              <ul
                className={cn("space-y-2 group-items cursor-pointer", {
                  expanded: expandedGroups.includes(item.groupTitle),
                  "opacity-50 cursor-not-allowed": item.groupDisabled,
                })}
              >
                {item.group.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300",
                      {
                        "opacity-50 cursor-not-allowed": item.disabled,
                        "hover:bg-red-600 hover:text-white": !item.disabled,
                      }
                    )}
                    onClick={() => {
                      if (item.disabled) return;
                      navigate(item.link);
                    }}
                  >
                    <Icon icon={item.icon} className="w-5 h-5" />
                    <h4 className="text-lg font-medium">{item.title}</h4>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </>
  );
};
