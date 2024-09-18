interface Breadcrumb {
  label: string;
  href: string;
  active: boolean;
  icon?: React.ReactElement;
  submenus?: Breadcrumb[];
}

const breadcrumbsConfig: { [key: string]: Breadcrumb[] } = {
  "/": [
    {
      label: "Home",
      href: "/",
      active: true,
    },
  ],
  "/Dashboard": [
    {
      label: "Home",
      href: "/",
      active: false,
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      active: true,
    },
  ],
  "/dashboard/settings": [
    {
      label: "Home >",
      href: "/",
      active: false,
    },
    {
      label: "Dashboard >",
      href: "/dashboard",
      active: false,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      active: true,
    },
  ],
  "/dashboard/team": [
    {
      label: "Home >",
      href: "/",
      active: false,
    },
    {
      label: "Dashboard >",
      href: "/dashboard",
      active: false,
    },
    {
      label: "Team",
      href: "/dashboard/team",
      active: true,
    },
  ],
};

export function getbreadcrumb(pathname: string): { breadcrumbs: Breadcrumb[] } {
  const breadcrumbs = breadcrumbsConfig[pathname] || [];
  return { breadcrumbs };
}
