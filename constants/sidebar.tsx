import {
  LayoutDashboard,
  Image,
  FolderTree,
  Package,
  ShoppingCart,
  Star,
  TicketPercent,
  Users,
  Zap,
  Images,
  Navigation,
  PanelsTopLeft,
  Heart,
  Settings,
  LogOut,
} from "lucide-react";

export interface SidebarItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Hero",
    href: "/hero",
    icon: Image,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: FolderTree,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Reviews",
    href: "/reviews",
    icon: Star,
  },
  {
    title: "Coupons",
    href: "/coupons",
    icon: TicketPercent,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Flash Sale",
    href: "/flash-sale",
    icon: Zap,
  },
  {
    title: "Banner",
    href: "/banner",
    icon: Images,
  },
  {
    title: "Navbar",
    href: "/navbar",
    icon: Navigation,
  },
  {
    title: "Footer",
    href: "/footer",
    icon: PanelsTopLeft,
  },
  {
    title: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];