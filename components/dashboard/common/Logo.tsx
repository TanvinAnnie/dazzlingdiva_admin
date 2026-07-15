import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3 transition-opacity hover:opacity-80"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white shadow-md">
        <Sparkles className="h-6 w-6" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-slate-900">
          Dazzling Diva
        </span>

        <span className="text-xs text-slate-500">
          Admin Dashboard
        </span>
      </div>
    </Link>
  );
}