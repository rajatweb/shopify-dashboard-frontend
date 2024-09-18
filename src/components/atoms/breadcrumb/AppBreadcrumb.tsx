import React from "react";
import { getbreadcrumb } from "@/lib/breadcrumb-list";

interface AppBreadcrumbProps {
  pathname: string;
}

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({ pathname }) => {
  const { breadcrumbs } = getbreadcrumb(pathname);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex gap-4">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className={breadcrumb.active ? "active" : ""}>
            {breadcrumb.icon && <span>{breadcrumb.icon}</span>}
            <a href={breadcrumb.href}>{breadcrumb.label}</a>
            {breadcrumb.submenus && (
              <ul>
                {breadcrumb.submenus.map((submenu, submenuIndex) => (
                  <li key={submenuIndex}>
                    <a href={submenu.href}>{submenu.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default AppBreadcrumb;
