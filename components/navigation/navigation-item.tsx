import { classNames } from "@/lib/utils";
import React from "react";

type NavigationItemProps = {
  name: string;
  href: string;
  current: boolean;
  icon?: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
  initial?: string;
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  name,
  href,
  current,
  icon: Icon,
  initial,
}) => {
  return (
    <li key={name}>
      {Icon ? (
        <a
          href={href}
          className={classNames(
            current
              ? "bg-gray-50 text-indigo-600"
              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          )}
        >
          <Icon
            className={classNames(
              current
                ? "text-indigo-600"
                : "text-gray-400 group-hover:text-indigo-600",
              "h-6 w-6 shrink-0"
            )}
            aria-hidden="true"
          />
          {name}
        </a>
      ) : (
        <a
          href={href}
          className={classNames(
            current
              ? "bg-gray-50 text-indigo-600"
              : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
          )}
        >
          <span
            className={classNames(
              current
                ? "text-indigo-600 border-indigo-600"
                : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600",
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
            )}
          >
            {initial}
          </span>
          <span className="truncate">{name}</span>
        </a>
      )}
    </li>
  );
};

export default NavigationItem;
