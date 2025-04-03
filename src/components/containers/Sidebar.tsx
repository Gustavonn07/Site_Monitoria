import React from "react";
import {
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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

  const toggleGroup = (groupTitle: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupTitle)
        ? prev.filter((title) => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  const url = location.pathname || "";
  const sidebar_data = React.useMemo(() => {
    return url.includes("multimedia_authoring_2")
      ? sidebar_data_multimedia
      : sidebar_data_programming;
  }, [url]);

  return (
    <>
      {viewport.isSm ? (
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
                TITULO
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
                className={cn(
                  "group-items flex flex-col cursor-pointer",
                  {
                    expanded: expandedGroups.includes(item.groupTitle),
                    "opacity-50 cursor-not-allowed": item.groupDisabled,
                  }
                )}
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
                              "hover:text-secondary-700 hover:bg-primary-300": !item.disabled,
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
