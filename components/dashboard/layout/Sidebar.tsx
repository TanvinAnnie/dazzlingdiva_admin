"use client";

import Logo from "../common/Logo";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "@/constants/sidebar";

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-5">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Dazzling Diva
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Admin Panel v1.0
          </p>
        </div>
      </div>
    </aside>
  );
}