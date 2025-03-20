// Types for our navigation items
export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

// Props for our Navbar component
export interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  siteName: string;
}


