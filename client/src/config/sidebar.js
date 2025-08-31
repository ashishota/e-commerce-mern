import {
  LayoutDashboard,
  ShoppingBasket,
  BadgeCheck,
  Blocks,
} from "lucide-react";

export const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: ShoppingBasket,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: BadgeCheck,
  },
  {
    id: "features",
    label: "Features",
    path: "/admin/features",
    icon: Blocks,
  },
];
