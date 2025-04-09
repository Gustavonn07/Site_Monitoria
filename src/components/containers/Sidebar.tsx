import React from "react";
import {
  Separator,
  Sheet,
  SheetContent,
  SheetTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui";
import { useViewport } from "../../hooks";
import {
  sidebar_data_multimedia,
  sidebar_data_programming,
} from "./assets/sidebar.data";
import { useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn, StringHelpers } from "../../utils";

export const Sidebar = () => {
  const viewport = useViewport();
  const navigate = useNavigate();
  const location = useLocation();

  const [expandedGroups, setExpandedGroups] = React.useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((title) => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const url = location.pathname || "";
  const sidebar_data = url.includes("multimedia")
    ? sidebar_data_multimedia
    : sidebar_data_programming;

  return (
    <>
      {viewport.isSm ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="fixed z-50 top-2 left-2 bg-secondary-100 p-1 rounded-sm shadow">
              <Icon
                icon="lucide:menu"
                className="min-w-6 min-h-6 text-primary-800"
              />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[80%] sm:w-[300px] p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-primary-800">
                {url.includes("multimedia")
                  ? "Autoração M. 02"
                  : "Programação 02"}
              </h3>
            </div>
            <Separator />
            <div className="flex flex-col gap-4 mt-4">
              {sidebar_data.map((group) => (
                <div key={group.groupTitle}>
                  <div
                    className={cn(
                      "flex items-center gap-2 cursor-pointer text-primary-800 text-lg font-semibold",
                      {
                        "opacity-50 cursor-not-allowed": group.groupDisabled,
                      }
                    )}
                    onClick={() => {
                      if (group.groupDisabled) return;
                      toggleGroup(group.groupTitle);
                    }}
                  >
                    <Icon icon={group.groupIcon} className="text-xl" />
                    <span>{group.groupTitle}</span>
                  </div>
                  <ul
                    className={cn("ml-5 mt-2 space-y-2", {
                      hidden: !expandedGroups.includes(group.groupTitle),
                      "opacity-50 cursor-not-allowed": group.groupDisabled,
                    })}
                  >
                    {group.group.map((item) => (
                      <li
                        key={item.title}
                        onClick={() => {
                          if (item.disabled) return;
                          navigate(item.link);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-2 text-primary-700 text-base hover:text-secondary-700 cursor-pointer",
                          {
                            "opacity-50 cursor-not-allowed": item.disabled,
                          }
                        )}
                      >
                        <Icon icon={item.icon} className="w-4 h-4" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      ) : (
        <nav
          className={cn(
            "bg-primary-500 sidebar sm:w-1/3 lg:w-3/12 min-h-screen p-4 flex flex-col",
            {
              expanded_sidebar: isCollapsed,
            }
          )}
        >
          <div className="flex flex-col">
            <div className="flex justify-center gap-5 w-full items-center mb-6">
              <h3
                className={cn("text-2xl text-primary-800", {
                  hidden: isCollapsed,
                })}
              >
                {url.includes("multimedia")
                  ? "Autoração. M. 02"
                  : "Programação 02"}
              </h3>
              <Icon
                className={cn(
                  "cursor-pointer ml-auto text-xl text-primary-800",
                  {
                    "mx-auto": isCollapsed,
                  }
                )}
                icon="lucide:arrow-left-right"
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                  if (!isCollapsed) setExpandedGroups([]);
                }}
              />
            </div>
            <Separator />
          </div>
          {sidebar_data.map((item) => (
            <div key={item.groupTitle} className="space-y-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <h3
                      className={cn(
                        "text-xl font-semibold text-primary-800 cursor-pointer flex items-center gap-2",
                        {
                          "opacity-50 cursor-not-allowed": item.groupDisabled,
                          "justify-center": isCollapsed,
                        }
                      )}
                      onClick={() => {
                        if (item.groupDisabled) return;
                        toggleGroup(item.groupTitle);
                        setIsCollapsed(false);
                      }}
                    >
                      <Icon
                        icon={item.groupIcon}
                        className={cn("text-2xl", {
                          "text-4xl": isCollapsed,
                        })}
                      />
                      <span className={cn({ hidden: isCollapsed })}>
                        {StringHelpers.truncateString({
                          text: item.groupTitle,
                          length: [
                            viewport.isLg,
                            viewport.isXl,
                            viewport.is2xl,
                          ].some(Boolean)
                            ? 20
                            : 10,
                        })}
                      </span>
                    </h3>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.groupTitle}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <ul
                className={cn("group-items flex flex-col cursor-pointer", {
                  expanded: expandedGroups.includes(item.groupTitle),
                  "opacity-50 cursor-not-allowed": item.groupDisabled,
                })}
              >
                {item.group.map((item) => (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <li
                          key={item.title}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 text-primary-700 hover:text-secondary-700",
                            {
                              "opacity-50 cursor-not-allowed": item.disabled,
                              "hover:text-secondary-700 hover:bg-primary-300":
                                !item.disabled,
                            }
                          )}
                          onClick={() => {
                            if (item.disabled) return;
                            navigate(item.link);
                          }}
                        >
                          <Icon icon={item.icon} className="w-5 h-5" />
                          <h4 className="text-lg font-medium">
                            {StringHelpers.truncateString({
                              text: item.title,
                              length: [
                                viewport.isLg,
                                viewport.isXl,
                                viewport.is2xl,
                              ].some(Boolean)
                                ? 20
                                : 11,
                            })}
                          </h4>
                        </li>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      )}
    </>
  );
};
