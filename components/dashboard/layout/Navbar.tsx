"use client";

import { Bell, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Left Side */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search..."
            className="w-80 pl-10"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        <Button
          variant="ghost"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-3">

          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>

          <div className="hidden sm:block">
            <h4 className="text-sm font-semibold text-slate-900">
              Admin
            </h4>

            <p className="text-xs text-slate-500">
              admin@dazzlingdiva.com
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}